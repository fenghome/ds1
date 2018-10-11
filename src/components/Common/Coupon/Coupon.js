import React from 'react';
import style from './Coupon.less';
export default function Coupon({man,jian}){
  return(
    <div className={style.coupon}>
      <span className={style.cLeft}>每满{man}减{jian}</span>
      <img className={style.line} src="./line.png" />
      <span className={style.cRight}>领取</span>
    </div>
  )
}
