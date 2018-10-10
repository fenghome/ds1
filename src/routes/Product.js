import React from 'react';
import { Icon } from 'antd';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ViewList from '../components/ViewList/ViewList';
import style from './Product.less';

class Product extends React.Component {
  render() {
    const breadcrumbs = [{ key: 'shouye', value: '首页' }, { key: 'jujia', value: '居家' }, { key: 'xiaofangbao', value: '小方包' }]
    return (
      <div>
        <Breadcrumb items={breadcrumbs} />
        <ViewList />
      </div>
    )
  }

}

export default Product;
