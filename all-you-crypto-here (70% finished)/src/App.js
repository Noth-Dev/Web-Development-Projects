import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import { GPUhashrate } from './components/GPUhashrate';
import { Foundurhashrate } from './components/Foundurhashrate';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
            <Route exact path="/hashrate">
              <GPUhashrate />
            </Route>
            <Route exact path="/urhashrate">
              <Foundurhashrate />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright 2022 <br />
          <Link to="/">
            All Your Crypto™.
          </Link> <br />
          All Rights Reserved. <br />
          More Updates Will Come. Stay Connected! <br />
          Contact Me To info@allyourcryptohere.com.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
