import React from 'react';
import style from './ProductInfo.less';
import Tag from '../Common/Tag/Tag';
import Coupon from '../Common/Coupon/Coupon';
import AddressSelect from '../Common/AddressSelect/AddressSelect';

const addressStore = [
  {key:'qxz',tabName:'省',items:[{key:'bj',name:'北京'},{key:'tj',name:'天津'},{key:'hb',name:'河北'},{key:'sd',name:'山东'},'山西','广州','台湾']},
  {key:'hb',tabName:'市',items:['石家庄','保定','唐山','邯郸','秦皇岛']},
  {key:'sjz',tabName:'区',items:['新华','长安','桥东','桥西']},
  {key:'sd',tabName:'市',items:['青岛','崂山']},
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
            <div className={style.address}><AddressSelect addressStore={addressStore} /></div>
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
