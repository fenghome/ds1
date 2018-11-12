import React from 'react';
import ProductItem from '../Common/PorductItem/ProductItem';
import style from './ProductList.less';

export default function ProductList({ title, products }) {
  return (
    <div className={style.productList}>
      <div className={style.listTitle}>
        {title}
      </div>
      <div className={style.listItem}>
        {
          products && products.map((product,index) => (
            <div>
              <ProductItem { ...product } coverW="250px" coverH="250px"/>
              {(index < products.length-1) && <div className={style.line} />}
            </div>
          ))
        }
      </div>
    </div>
  )
}
