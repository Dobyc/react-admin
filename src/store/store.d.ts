declare interface UserInfo {
  name?: string;
}

declare interface UserState {
  token: string;
  loginStatus: "idle" | "loading" | "failed";
  info: UserInfo;
}

declare interface AppState {
  siteName: string;
  apps: Array<any>;
  menus: Array<Menu>;
}

declare interface Menu {
  title: string;
  name: string;
  path: string;
  code: string;
}
