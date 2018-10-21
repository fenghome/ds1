import React from 'react';
import { Icon } from 'antd';
import style from './ProductInfo.less';
import Tag from '../Common/Tag/Tag';
import Coupon from '../Common/Coupon/Coupon';
import AddressSelect from '../Common/AddressSelect/AddressSelect';

const addressStore = [
  {
    key: 'zhongguo', tabName: '请选择', far: null, items: [
      { key: 'bj', name: '北京' },
      { key: 'tj', name: '天津' },
      { key: 'hb', name: '河北' },
      { key: 'sd', name: '山东' }
    ]
  },
  {
    key: 'hb', far: 'zhongguo', tabName: '市', items: [
      { key: 'sjz', name: '石家庄' },
      { key: 'bd', name: '保定' },
      { key: 'ts', name: '唐山' },
      { key: 'qhd', name: '秦皇岛' }
    ]
  },
  {
    key: 'sjz', far: 'hb', tabName: '区', items: [
      { key: 'xh', name: '新华' },
      { key: 'ca', name: '长安' },
      { key: 'qx', name: '桥西' }
    ]
  },
  {
    key: 'xh', far: 'sjz', tabName: '街道', items: [
      { key: 'lianmeng', name: '联盟路' },
      { key: 'xinhualu', name: '新华路' },
      { key: 'hezuolu ', name: '合作路' }
    ]
  },
  {
    key: 'qx', far: 'sjz', tabName: '街道', items: [
      { key: 'weimin', name: '维明街道' },
      { key: 'zentou', name: '振头街道' }
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
            <div className={style.address}><AddressSelect addressStore={addressStore} /></div>
          </div>
          <div className={style.hr} />
          <div className={style.serviceLine}>
            <span className={style.pLabel}>服务</span>
            <div className={style.service}><a>･ 支持30天无忧退换货･ 支持30天无忧退换货･ 支持30天无忧退换货･ 支持30天无忧退换货･ 支持30天无忧退换货</a></div>
          </div>
        </div>
        <div className={style.line1}>
          <div className={style.label}>颜色</div>
          <a><div className={style.isSelect}>蓝色<img src="/dg.png" /></div></a>
          <a><div className={style.selectBox}>黑色</div></a>
          <a><div className={style.selectBox}>白色</div></a>
        </div>
        <div className={style.line1}>
          <div className={style.label}>数量</div>
          <div className={style.numberBox}>
            <a><div className={style.btn}><Icon type="minus" theme="outlined" /></div></a>
            <div className={style.num}>1</div>
            <a><div className={style.btn}><Icon type="plus" theme="outlined" /></div></a>
          </div>
        </div>
        <div className={style.line2}>
          <div className={style.buy}><a>立即购买</a></div>
          <div className={style.addCar}>
            <a>
              <Icon type="shopping-cart" theme="outlined" className={style.icon} />
              加入购物车
            </a>
          </div>
          <div className={style.collection}>
            <a>
              <Icon type="star" theme="outlined" className={style.icon} />
              收藏
          </a>
          </div>
        </div>
        <div></div>
      </div>
    )
  }
}

export default ProductInfo;
