import React, { Suspense, useEffect, useState, lazy, memo } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "@/store";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

import "tdesign-react/es/style/index.css";
import "./index.less";
import router from "./router";

const mode = import.meta.env.MODE;

const Loading = memo(() => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  });

  return <></>;
});

(async () => {
  // 开发环境加载mock
  if (mode === "development") {
    const { default: initMocks } = await import("@/mock");
    initMocks();
  }

  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
    </React.StrictMode>
  );
})();
