import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts";

const exceptList: string[] = ["404", "login"];
const modules = import.meta.glob("../pages/**/index.tsx");

const lazyLoad = (route: string, page: string) => {
  // @ts-ignore
  const Module = lazy(modules[page]);
  return <Module route={route} />;
};

let isFirst = true;

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: lazyLoad("404", "../pages/404/index.tsx"),
    // loader: async ({ params }) => {
    //   console.log("params", params);
    //   return {};
    //   // return fetch(`/api/teams/${params.teamId}.json`);
    // },
    children: Object.keys(modules)
      .map((page) => {
        const reg = /.*pages\/(.*?)\/index\.[jt]sx?$/;
        const path = page.match(reg)?.[1];
        if (path && !exceptList.includes(path)) {
          const index = isFirst;
          isFirst = false;
          const route = path.replace(/\//g, "-");
          return {
            index,
            path,
            element: lazyLoad(route, page),
          };
        } else {
          return {};
        }
      })
      .filter((item) => JSON.stringify(item) !== "{}"),
  },
  {
    path: "/login",
    element: lazyLoad("login", "../pages/login/index.tsx"),
  },
];

const router = createBrowserRouter(routes);
console.log("routes", routes[0].children);

export default router;
