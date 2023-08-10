export default [
  {
    disuse: false, // disuse为true时，不走mock
    url: /\/api\/login\w*/,
    type: "post",
    response: () => {
      return {
        success: true,
        code: 200,
        message: "",
        data: "27235319153a88c381802a8fd99561397a9d0c6673202d8c35f2b000255688b0cec67da845fd25f4255c5eda009d0b971ec28001764e07c9bdd9bd9e0ba8553e9397246446ef960d0fafdcd4e2d1ff78ed88c0b811a1cdae0fb004b25da7a76cb4efa319d4a0c84497fa614dcd8036bf9808ec8a432c2dc940e02bb546dcc50fc1c1d60e9ba46c88bb1c75fa075fe167b9e04f559428000caf433e25aa283c414015e84b0efb3b117bbf9c1bdfc43d9b211617655aeb6175b7eafb83d8ef82774e23baf7487d83c57f1b26bed7e7c499d2e73fcaf11bd2a4f0f7c2e44ae73e6dc293e79db4dbd4cae5a347d61ecb0d4c9d53679cb9d0e4ea53dc5ec0a0695e8f0f9783fb13d717a3bd9db54358a05c0a8fa9d612763f5fb818c348d26b148757b337eb9bc3b12be7f3292a0e727be51fa2fa464d6267c217772c2e942bfcd88f281d3afa1808dd57a1fe15a9deeb2000",
      };
    },
  },
  {
    disuse: false, // disuse为true时，不走mock
    url: /\/api\/getLoginUser\w*/,
    type: "get",
    response: () => {
      return {
        success: true,
        code: 200,
        message: "请求成功",
        data: {
          id: "1630503809750364162",
          account: "15899860621",
          nickName: "",
          name: "张三",
          sex: 1,
          email: null,
          phone: "36ac2ca288c86b0a7804f0011d56db02",
          adminType: 2,
          nsrsbh: "91440101MA59JN5456",
          nsrmc: "金财互联数据服务有限公司",
          qyId: "1631227593956995073",
          nsrxz: "01",
          username: "15899860621",
        },
      };
    },
  },
  {
    disuse: false, // disuse为true时，不走mock
    url: /\/api\/getAuths\w*/,
    type: "get",
    response: () => {
      return {
        success: true,
        code: 200,
        message: "",
        data: {
          apps: [
            { code: "jx-invoice-manage", name: "进项发票", active: false },
            { code: "xxgl", name: "全电发票", active: false },
            { code: "sk_xxgl", name: "税控开票", active: false },
            { code: "fpfx", name: "发票风险", active: false },
            { code: "store", name: "应用商店", active: false },
            { code: "app_setting", name: "应用设置", active: false },
          ],
          menus: [
            {
              title: "首页",
              name: "Home",
              path: "/home",
              code: "home",
            },
            {
              title: "aa/bb",
              name: "bb",
              path: "/aa/bb",
              code: "aa-bb",
            },
            {
              title: "aa/bb/cc",
              name: "cc",
              path: "/aa/bb/cc",
              code: "aa-bb-cc",
            },
          ],
        },
      };
    },
  },
];
