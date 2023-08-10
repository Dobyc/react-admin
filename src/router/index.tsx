import { lazy } from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "@/layouts";
import ErrorPage from "@/pages/error";
import localforage from "localforage";
// import checkAuth from "./checkAuth";

const exceptList: string[] = ["error", "login"];
const modules = import.meta.glob("../pages/**/index.tsx");

export const lazyLoad = (route: string, page: string) => {
  // @ts-ignorez
  const Module = lazy(modules[page]);
  return <Module route={route} />;
};

let isFirst: Boolean = true;

interface Router {
  path: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
  children?: Array<Router>;
  [key: string]: any;
}

const routes: Array<Router> = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    loader: async () => {
      const token = localforage.getItem("token");
      if (!token) {
        return redirect("/login");
      }
      return "";
    },
    children: [],
  },
  {
    path: "/login",
    element: lazyLoad("login", "../pages/login/index.tsx"),
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
];

Object.keys(modules).forEach((page) => {
  const reg = /.*pages\/(.*?)\/index\.[jt]sx?$/;
  const path: string = page.match(reg)?.[1] || "";
  if (path && !exceptList.includes(path)) {
    const index = isFirst;
    isFirst = false;
    const route = path.replace(/\//g, "-");
    routes[0].children?.push({
      index,
      path,
      element: lazyLoad(route, page),
      loader: async () => {
        // 权鉴
        const auths: Array<any> = (await localforage.getItem("auths")) || [];
        if (!auths.includes(route)) {
          return redirect("/error");
        }
        return "";
      },
    });
  }
});

const router = createBrowserRouter(routes);

export default router;
