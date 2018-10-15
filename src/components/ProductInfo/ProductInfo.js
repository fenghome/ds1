import React from 'react';
import style from './ProductInfo.less';
import Tag from '../Common/Tag/Tag';
import Coupon from '../Common/Coupon/Coupon';
import AddressSelect from '../Common/AddressSelect/AddressSelect';

const citys = [
  {
  key:'hebei',
  name:'河北省',
  citys:[
    {
      key:'shijiazhuang',
      name:'石家庄',
      qu:[
        {
          key:'xinhua',
          name:'新华区',
          jiedao:[
            {
              key:'gexin',
              name:'革新街道',
            },
            {
              key:'beiyuan',
              name:'北苑街道'
            },
            {
              key:'ningan',
              name:'宁安街道'
            }
          ]
        },
      ]
    }
  ]
}
  
]

class ProductInfo extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div className={style.info}>
        <Tag text={product.tag} bColor={product.tagColor} />
        <div className={style.name}>{product.name}</div>
        <div className={style.desc}>{product.desc}</div>
        <div className={style.details}>
          <div className={style.line}>
            <span className={style.pLabel}>价格</span>
            <span className={style.pIcon}>¥</span>
            <span className={style.pPrice}>{product.price}</span>
            <img className={style.pImg} src="/38.png" />
            <span className={style.pVip}>超级会员专享价¥{product.vipPrice}</span>
            <span className={style.pOpen}><a>开通即享 ></a></span>
          </div>
          <div className={style.line}>
            <span className={style.pLabel}>领卷</span>
            <Coupon man="199" jian="20" />
          </div>
          <div className={style.line}>
            <span className={style.pLabel}>积分</span>
            <span>购买最高得{product.integral}积分</span>
          </div>
          <div className={style.line}>
            <span className={style.pLabel}>配送</span>
            <span>至</span>
            <div className={style.address}><AddressSelect citys={citys}/></div>
          </div>
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
