import axios, { AxiosRequestConfig } from "axios";
import localforage from "localforage";
import { message } from "tdesign-react";
import { redirect } from "react-router-dom";
import dayjs from "dayjs";
import { isValidKey } from "@/utils";

export interface resultData {
  success: boolean;
  message: string;
  data?: any;
  code: number;
}

interface params {
  /** 唯一请求，取消未完成的重复请求 */
  requestOnly?: boolean;
  /** 不显示报错信息 */
  noErrorMessage?: boolean;
}

const requestMap = new Map();

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
});

// 显示报错信息，减少重复报错频率
const showErrorMessage = async (resData: resultData) => {
  const errorData: object = (await localforage.getItem("error")) || {};
  if (
    resData.message &&
    isValidKey(resData.message, errorData) &&
    (!errorData[resData.message] || dayjs().subtract(1, "seconds").isAfter(errorData[resData.message]))
  ) {
    localforage.setItem("error", { ...errorData, [resData.message]: dayjs().format() });
    message.error(resData.message);
  }
};

http.interceptors.request.use(
  (config) => {
    const token = localforage.getItem("token");
    if (token) config.headers.token = token;

    // requestOnly 唯一请求，上一次请求未完成时取消上一次请求
    if ((config.params && config.params.requestOnly) || (config.data && typeof config.data === "object" && config.data.requestOnly)) {
      const lastController = requestMap.get(config.url);
      if (lastController) lastController.abort();
      const controller = new AbortController();
      requestMap.set(config.url, controller);
      config.signal = controller.signal;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    const params = response.config.params;
    const data = response.config.data;
    if ((params && params.requestOnly) || (data && typeof data === "object" && data.requestOnly)) {
      requestMap.delete(response.config.url);
    }

    if (response.status === 200) {
      // 接口错误
      if (!response.data.success) {
        // 登录超时 / 没有登录
        if (response.data.code === 10000) {
          redirect("/login");
        } else {
          if ((!params || !params.noErrorMessage) && (!data || !data.noErrorMessage)) {
            showErrorMessage(response.data);
          }
        }
      }
      return response.data;
    }

    if ((!params || !params.noErrorMessage) && (!data || !data.noErrorMessage)) {
      showErrorMessage({ success: false, code: -1, message: "" });
    }
    return { ...response, code: response.status, success: false };
  },
  (error) => {
    // 除了主动取消请求，显示错误信息
    if (error.code !== "ERR_CANCELED") {
      showErrorMessage({ success: false, code: -1, message: error.message });
    }
    console.log("error", error);
    return Promise.reject({ ...error, success: false });
  }
);

export default {
  get(url: string, params?: params, config: AxiosRequestConfig = {}): Promise<resultData> {
    return http.get(url, { ...config, params });
  },
  post(url: string, data?: any | params, config: AxiosRequestConfig = {}): Promise<resultData> {
    return http.post(url, data, config);
  },
};
