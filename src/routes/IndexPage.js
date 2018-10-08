import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { connect } from 'dva';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';

import Menu from '../components/Menu/Menu';
const { Header, Footer, Sider, Content } = Layout;

// const MenuItem = Menu.Item;
// const SubMenu = Menu.SubMenu;
// const ItemGroup = Menu.ItemGroup;


function IndexPage({ dispatch, index, app }) {

  const Home = getComponent(app, import('../models/home'), import('./Home'));
  const List = getComponent(app, import('../models/list'), import('./List'));
  const Product = getComponent(app, import('../models/product'), import('./Product'));

  return (
    <div style={{ margin: "0 auto", width: 1090 }}>
      <Layout>
        <Header style={{ background: "#FFFFFF" }}>
          <Menu />

        </Header>
        <Content>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/list" component={List} />
            <Route path="/product" exact component={Product} />
          </Switch>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
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
