import React from 'react';
import './SideBar.less';
import config from './SideBarConfig.json';
import Logo from '../../assets/casmm_logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { removeUserSession } from '../../Utils/AuthRequests';
import { useGlobalState } from '../../Utils/userState';

export default function SideBar() {
  const [value] = useGlobalState('currUser');
  let currentRoute = window.location.pathname;
  let navigate = useNavigate();
  let routes = config.routes;

  const handleLogout = () => {
    removeUserSession();
    navigate('/');
  };

  const handleRouteChange = (route) => {
    navigate(route);
  };

  const shouldShowRoute = (route) => {
    if (currentRoute === routes[route]) return false;
    return config.users[value.role].includes(route);
  };

  const menu = (
    <Menu>
      <p>Account</p>
      <p>Home Page</p>
    </Menu>
  );

  return (
    <span id='sideBar'>
      <div id='menu-link'>
        <p>Account</p>
        <p>Home Page</p>
        <p>Settings</p>
      </div>
    </span>
  );
}
