import React, { useCallback } from "react";
import { Menu } from "tdesign-react";
import {
  DashboardIcon,
  ServerIcon,
  RootListIcon,
  ControlPlatformIcon,
  PreciseMonitorIcon,
  MailIcon,
  UserCircleIcon,
  PlayCircleIcon,
  Edit1Icon,
} from "tdesign-icons-react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/hooks";

const { MenuItem } = Menu;

function Component() {
  const navigate = useNavigate();
  const menus = useAppSelector((state) => state.app.menus);

  console.log("menus", menus);

  const handleClickMenu = useCallback((menu: Menu) => {
    console.log("menu", menu);
    navigate(menu.path);
  }, []);

  return (
    <Menu theme="light" value="dashboard" style={{ marginRight: 50, height: 550 }}>
      {menus.map((item) => (
        <MenuItem key={item.code} value={item.code} icon={<DashboardIcon />} onClick={() => handleClickMenu(item)}>
          {item.title}
        </MenuItem>
      ))}
      {/* <MenuItem value="dashboard" icon={<DashboardIcon />}>
        仪表盘
      </MenuItem>
      <MenuItem value="resource" icon={<ServerIcon />}>
        资源列表
      </MenuItem>
      <MenuItem value="root">
        <RootListIcon />
        根目录
      </MenuItem>
      <MenuItem value="control-platform" icon={<ControlPlatformIcon />}>
        调度平台
      </MenuItem>
      <MenuItem value="precise-monitor" icon={<PreciseMonitorIcon />}>
        精准监控
      </MenuItem>
      <MenuItem value="mail" icon={<MailIcon />}>
        消息区
      </MenuItem>
      <MenuItem value="user-circle" icon={<UserCircleIcon />}>
        个人中心
      </MenuItem>
      <MenuItem value="play-circle" icon={<PlayCircleIcon />}>
        视频区
      </MenuItem>
      <MenuItem value="edit1" icon={<Edit1Icon />}>
        资源编辑
      </MenuItem> */}
    </Menu>
  );
}

export default Component;
