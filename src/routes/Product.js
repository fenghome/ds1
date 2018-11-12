import React from 'react';
import { Icon } from 'antd';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ViewList from '../components/ViewList/ViewList';
import style from './Product.less';
import ProductInfo from '../components/ProductInfo/ProductInfo';
import AllLook from '../components/AllLook/AllLook';
import Tabs from '../components/TabsCom/Tabs';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import Comment from '../components/Comment/Comment';
import ProductList from '../components/ProductList/ProdcutList';
import Recommend from '../components/Recommend/Recommend';
const TabPane = Tabs.TabPane;
const urls = ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5.jpg'];
const products = [
  {
    name: '轻奢·蕨之语提花四件套',
    desc: '400根如绸臻密，提花精致层次感',
    cover: '/ppp1.png',
    tag: '新品',
    tagColor: '#b4a078',
    price: 799,
    oldPrice: 600,
    vipPrice: 569,
    integral: 4,
  },
  {
    name: '轻奢·蕨之语提花四件套',
    desc: '400根如绸臻密，提花精致层次感',
    cover: '/ppp1.png',
    tag: '新品',
    tagColor: '#b4a078',
    price: 799,
    oldPrice: 600,
    vipPrice: 569,
    integral: 4,
  },
  {
    name: '轻奢·蕨之语提花四件套',
    desc: '400根如绸臻密，提花精致层次感',
    cover: '/pp1.png',
    tag: '新品',
    tagColor: '#b4a078',
    price: 799,
    oldPrice: 600,
    vipPrice: 569,
    integral: 4,
  },
  {
    name: '轻奢·蕨之语提花四件套',
    desc: '400根如绸臻密，提花精致层次感',
    cover: '/pp1.png',
    tag: '新品',
    tagColor: '#b4a078',
    price: 799,
    oldPrice: 600,
    vipPrice: 569,
    integral: 4,
  },
]

const recommends = [
  {
    title:'搞定彩妆，三步够了',
    cover:'/zt1.jpg',
    url:'#'
  },
  {
    title:'搞定彩妆，三步够了',
    cover:'/zt1.jpg',
    url:'#'
  },
  {
    title:'搞定彩妆，三步够了',
    cover:'/zt1.jpg',
    url:'#'
  },
  {
    title:'搞定彩妆，三步够了',
    cover:'/zt1.jpg',
    url:'#'
  },
]
// const { cover, tag, tagColor, name, price, oldPrice, } = props;
class Product extends React.Component {
  render() {
    const breadcrumbs = [{ key: 'shouye', value: '首页' }, { key: 'jujia', value: '居家' }, { key: 'xiaofangbao', value: '小方包' }]
    return (
      <div>
        <Breadcrumb items={breadcrumbs} />
        <div style={{ marginBottom: 32 }}>
          <div style={{ float: "left" }}>
            <ViewList urls={urls} />
          </div>
          <div style={{ float: "right" }}>
            <ProductInfo product={products[0]} />
          </div>
          <div style={{ clear: "both" }} />
        </div>
        <AllLook products={products} />
        <div className={style.productRelate}>
          <div className={style.left}>
            <Tabs defaultKeyId="xiangqing">
              <TabPane keyId="xiangqing" tab="详情"><ProductDetail /></TabPane>
              <TabPane keyId="pingjia" tab="评价"><Comment /></TabPane>
            </Tabs>
          </div>
          <div className={style.right}>
            <div>
              <ProductList products={products} title="24小时热销榜" />
            </div>
            <div style={{marginTop:24}}>
              <Recommend recommends={recommends}/>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Product;
