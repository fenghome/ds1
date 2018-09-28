import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { connect } from 'dva';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';


const { Header, Footer, Sider, Content } = Layout;

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;


function IndexPage({ dispatch, index, app }) {

  const Home = getComponent(app, import('../models/home'), import('./Home'));
  const List = getComponent(app, import('../models/list'), import('./List'));
  const Product = getComponent(app, import('../models/product'), import('./Product'));

  return (
    <div>
      <Layout>
        <Header style={{ background: "#FFFFFF" }}>
        </Header>
        <Content>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/list" exact component={List} />
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
