import React, { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "tdesign-react";
import Header from "./Header";
import Menu from "./Menu";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import styles from "./layout.module.less";

const { Content, Footer, Aside } = Layout;

const Loading = React.memo(() => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  });

  return <></>;
});

function Page() {
  return (
    <div className={styles.container}>
      <Layout>
        <Header />
        <Layout>
          <Aside className={styles.aside}>
            <Menu />
          </Aside>
          <Layout>
            <Content>
              <Suspense fallback={<Loading />}>
                <Outlet />
              </Suspense>
            </Content>
            <Footer>Copyright @ 2019-2020 Tencent. All Rights Reserved</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Page;
