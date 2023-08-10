import Mock from "mockjs";
import appMock from "./mock";

export default function initMocks() {
  const modules = import.meta.glob("../pages/**/mock.ts", { eager: true });
  const mocks = [...appMock];

  Object.values(modules).forEach((module) => {
    Array.prototype.push.apply(
      mocks,
      // @ts-ignore
      module.default.filter((item) => item.disuse)
    );
  });

  console.log("mocks", mocks);

  mocks.map((item) => {
    Mock.mock(item.url, item.type, item.response);
  });
}
