import React from 'react';
import style from './ProductInfo.less';
import Tag from '../Common/Tag/Tag';
import Coupon from '../Common/Coupon/Coupon';
import AddressSelect from '../Common/AddressSelect/AddressSelect';

const addressTree = {
  tabName: '请选择', selectItems: [
    {
      key: 'hebei',
      name: '河北省',
      sub: {
        tabName: '城市', selectItems: [
          {
            key: 'sjz', name: '石家庄', sub: {
              tabName: '区县', selectItems: [
                {
                  key: 'xh', name: '新华区', sub: {
                    tabName: '街道', selectItems: [
                      { key: 'xhl', name: '新华路街道' },
                      { key: 'gx', name: '革新街道' }
                    ]
                  }
                },
                {
                  key: 'qd', name: '桥东区', sub: {
                    tabName: '街道', selectItems: [
                      { key: 'wmj', name: '维明街道' },
                      { key: 'yy', name: '友谊街道' }
                    ]
                  }
                }
              ]
            }
          },
          {
            key: 'bd', name: '保定', sub: {
              tabName: '区县', selectItems: [
                {
                  key: 'ax', name: '安新县', sub: {
                    tabName: '村庄', selectItems: [
                      { key: 'wjz', name: '王家寨' },
                      { key: 'pc', name: '彭村' }
                    ]
                  }
                },
                {
                  key: 'xiongxian', name: '雄县', sub: {
                    tabName: '村庄', selectItems: [
                      { key: 'ljz', name: '李家寨' }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
}



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
            <div className={style.address}><AddressSelect addressTree={addressTree} /></div>
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
