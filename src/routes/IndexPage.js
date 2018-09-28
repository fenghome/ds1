import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { connect } from 'dva';
const { Header, Footer, Sider, Content } = Layout;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const menus = [
  { key: "aa", value: "aa" },
  { key: "bb", value: "bb" },
  { key: "cc", value: "cc", sub: [{ key: "dd", value: "dd", sub: [{ key: 'ww', value: "ww" }] }, { key: "ee", value: "ee" }] },
  { key: 'kk', value: 'kk' }
]

const breadMap = [
  { key: "cc", value: "cc" },
  { key: "dd", value: 'dd' },
  { key: "ww", value: "ww" }
]

function IndexPage({ dispatch, example }) {

  const { breadMap,defaultKey } = example;

  const getMenu = (menus) => {
    return menus.map(item => {
      if (item.sub) {
        return getSubMenu(item);
      }
      return <MenuItem key={item.key}>{item.value}</MenuItem>
    })
  }

  const getSubMenu = (subMenus) => {
    return (
      <SubMenu key={subMenus.key} title={subMenus.value}>
        {
          subMenus.sub.map(item => {
            if (item.sub) {
              return getSubMenu(item);
            }
            return <MenuItem key={item.key}>{item.value}</MenuItem>
          })
        }
      </SubMenu>
    )
  }

  const onSelectMenu = ({ item, key, keyPath }) => {
    let breadMap = [];
    keyPath.reverse().forEach((key, index) => {
      let menu = {};
      if (index == 0) {
        menu = menus.find(m => {
          return m.key == key;
        })
      } else {
        menu = breadMap[index - 1].sub.find(m => {
          return m.key == key;
        })
      }
      breadMap.push(menu);
    });
    dispatch({
      type: 'example/setBreadMap',
      payload: breadMap
    })
  }

  const onClickBread = (e) => {

    dispatch({
      type:'example/setDefaultKey',
      payload:[e]
    })
  }

  return (
    <Layout>
      <Header style={{ background: "#FFFFFF" }}>
      </Header>
      <Layout>
        <Sider theme="light">
          <Menu onClick={onSelectMenu} defaultOpenKeys={defaultKey}>
            {
              getMenu(menus)
            }
          </Menu>

        </Sider>
        <Content>
          <Breadcrumb>
            {
              breadMap.map(item => (
                <Breadcrumb.Item key={item.key}>
                  <a onClick={() => onClickBread(item.key)}>
                    {item.value}
                  </a>
                </Breadcrumb.Item>
              ))
            }
          </Breadcrumb>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect(({ example }) => ({ example }))(IndexPage);
