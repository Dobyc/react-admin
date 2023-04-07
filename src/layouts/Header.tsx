import React from "react";
import { Layout, Menu } from "tdesign-react";
import { SearchIcon, NotificationFilledIcon, HomeIcon } from "tdesign-icons-react";

const { HeadMenu, MenuItem } = Menu;
const { Header } = Layout;

function Component() {
  return (
    <Header>
      <HeadMenu
        value="item1"
        operations={
          <div className="t-menu__operations">
            <SearchIcon className="t-menu__operations-icon" />
            <NotificationFilledIcon className="t-menu__operations-icon" />
            <HomeIcon className="t-menu__operations-icon" />
          </div>
        }
      >
        {/* <MenuItem value="item1">已选内容</MenuItem>
        <MenuItem value="item2">菜单内容一</MenuItem>
        <MenuItem value="item3">菜单内容二</MenuItem>
        <MenuItem value="item4" disabled>
          菜单内容三
        </MenuItem> */}
      </HeadMenu>
    </Header>
  );
}

export default Component;
