import React from 'react';
import { Breadcrumb } from 'antd';
import style from './Breadcrumb.less';
function Bread({items}) {
  return (
    <Breadcrumb className={style.breadcrumb} separator=">">
      {
        items && items.map(item => (
          <Breadcrumb.Item key={item.key}><a>{item.value}</a></Breadcrumb.Item>
        ))
      }
    </Breadcrumb>
  )
}
export default Bread;
