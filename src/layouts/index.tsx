import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "tdesign-react";
import Header from "./Header";
import Menu from "./Menu";
import styles from "./layout.module.less";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAuths } from "@/store/app";

const { Content, Footer, Aside } = Layout;

function Page() {
  const app = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("effect", app);
    dispatch(getAuths());
  }, []);

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
              <Outlet />
            </Content>
            <Footer>Copyright. All Rights Reserved</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Page;
