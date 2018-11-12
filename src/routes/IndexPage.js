import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { connect } from 'dva';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';

import MenuCom from '../components/Menu/MenuCom';
import CusService from '../components/CusService/CusService';
import WhatMe from '../components/WhatMe/WhatMe';
import QRCoder from '../components/QRCoder/QRCoder';

import style from './IndexPage.less';


// const MenuItem = Menu.Item;
// const SubMenu = Menu.SubMenu;
// const ItemGroup = Menu.ItemGroup;


function IndexPage({ dispatch, index, app }) {

  const Home = getComponent(app, import('../models/home'), import('./Home'));
  const List = getComponent(app, import('../models/list'), import('./List'));
  const Product = getComponent(app, import('../models/product'), import('./Product'));

  return (
    <div className={style.layout}>
      <div className={style.header}>
        <MenuCom />
      </div>
      <div className={style.content}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/list" component={List} />
          <Route path="/product" component={Product} />
        </Switch>
      </div>
      <div className={style.footer}>
        <CusService />
        <WhatMe />
        <QRCoder />
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

function getComponent(app, model, component) {
  return dynamic({
    app,
    models: () => [model],
    component: () => component,
  })
}

export default connect(({ index }) => ({ index }))(IndexPage);
