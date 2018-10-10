import React from 'react';
import style from './ProductInfo.less';
import Tag from '../Tag/Tag';

class ProductInfo extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div className={style.info}>
        <Tag text={product.tag} bColor={product.tagColor} />
        <div className={style.name}>{product.name}</div>
        <div className={style.desc}>{product.desc}</div>
        <div className={style.details}>
          <div className={style.priceLine}>
            <span className={style.pLabel}>价格</span>
            <span className={style.pIcon}>¥</span>
            <span className={style.pPrice}>{product.price}</span>
            <img className={style.pImg} src="/38.png" />
            <span className={style.pVip}>超级会员专享价¥{product.vipPrice}</span>
            <span className={style.pOpen}><a>开通即享 ></a></span>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}

export default ProductInfo;
