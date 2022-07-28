import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar, message } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined, LineChartOutlined, InfoCircleOutlined } from '@ant-design/icons';

import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  const { SubMenu } = Menu;

  const infoTON = () => {
    message.info('Coming Soon');
  };

  const infoETC = () => {
    message.info('Coming Soon');
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo"><Link to="/">All Your Crypto</Link></Typography.Title>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
      </div>
      {activeMenu && (
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<LineChartOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<FundOutlined />} title="GPU Hashrate">
          <Menu.Item key="5"><Link to="/hashrate">ETH</Link></Menu.Item>
          <Menu.Item key="6" onClick={infoTON}>TON</Menu.Item>
          <Menu.Item key="7" onClick={infoETC}>ETC</Menu.Item>
        </SubMenu>
        <Menu.Item style={{ position: 'absolute', bottom: '1px' }}>
          <Button shape="circle" icon={<InfoCircleOutlined />} onClick={() => alert('Welcome to Know Your Coin, the platform that can help you know evrything about Cryptos!')} />
        </Menu.Item>
      </Menu>
      )}
    </div>
  );
};

export default Navbar;
