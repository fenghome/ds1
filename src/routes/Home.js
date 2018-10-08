import React from 'react';
import { Carousel } from 'antd';

import CateRow from '../components/CateRow/CateRow';

const item = {
  title: '箱包', subItem: [
    { key: 'xinglixiang', value: '行李箱' },
    { key: 'nvshibaodai', value: '女士包袋 ' }
  ],
}

function Home() {
  return (
    <div>
      <Carousel autoplay >
        <div><img src="/yay.jpg" style={{ width: 800, height: 200 }} /></div>
        <div><img src="/yay.jpg" style={{ width: 800, height: 200 }} /></div>
        <div><img src="/yay.jpg" style={{ width: 800, height: 200 }} /></div>
        <div><img src="/yay.jpg" style={{ width: 800, height: 200 }} /></div>
      </Carousel>
      <CateRow item={item} />
      <CateRow item={item} />
      <CateRow item={item} />
    </div>
  )
}

export default Home;
