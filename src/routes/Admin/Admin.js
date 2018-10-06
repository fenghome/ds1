import React from 'react';
import { Layout,Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const MenuItem = Menu.Item;
class Admin extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Header style={{ textAlign: "center", fontSize: 24, color: "#fff" }}>
            后台管理
          </Header>
          <Layout>
            <Sider>
              <Menu>
                <MenuItem key="1">菜单管理</MenuItem>
              </Menu>
            </Sider>
            <Content>

            </Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    )
  }
}

export default Admin;
