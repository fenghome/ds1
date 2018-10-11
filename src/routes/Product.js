import React from 'react';
import { Icon } from 'antd';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ViewList from '../components/ViewList/ViewList';
// import style from './Product.less';
import ProductInfo from '../components/ProductInfo/ProductInfo';
const urls = ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5.jpg'];
const product = {
  name:'轻奢·蕨之语提花四件套',
  desc:'400根如绸臻密，提花精致层次感',
  tag:'新品',
  tagColor:'#b4a078',
  price:799,
  vipPrice:569,
  integral:4,

}
class Product extends React.Component {
  render() {
    const breadcrumbs = [{ key: 'shouye', value: '首页' }, { key: 'jujia', value: '居家' }, { key: 'xiaofangbao', value: '小方包' }]
    return (
      <div>
        <Breadcrumb items={breadcrumbs} />
        <div>
          <div style={{ float: "left" }}>
            <ViewList urls={urls} />
          </div>
          <div style={{ float: "right" }}>
            <ProductInfo product={product} />
          </div>
        </div>

      </div>
    )
  }

}

export default Product;
