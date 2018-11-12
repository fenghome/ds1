import React from 'react';
import { Icon } from 'antd';
import Tag from '../Tag/Tag';
import style from './ProductItem.less';


export default function ProductItem(props) {

  const { cover, tag, tagColor, name, price, oldPrice, coverW="100%", coverH="100%" } = props;

  return (
    <div className={style.product}>
      <img className={style.cover} style={{width:coverW,height:coverH}} src={cover} />
      <div className={style.tag}>
        <Tag text={tag} bColor={tagColor} />
      </div>
      <a>{name}</a>
      <div className={style.priceInf}>
        <span className={style.pri}>¥{price}</span>
        <span className={style.oPri}>¥{oldPrice}</span>
        <span className={style.icon}>
          <Icon type="shopping-cart" theme="outlined" />
        </span>
      </div>
    </div>
  )
}
