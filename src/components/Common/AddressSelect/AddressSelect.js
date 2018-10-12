import React from 'react';
import { Icon } from 'antd';
import style from './AddressSelect.less';

class AddressSelect extends React.Component {
  render() {
    return (
      <div>
        <div className={style.addressLine}>
          请选择地址
          <Icon type="down" theme="outlined" style={{ marginLeft: 6 }} />
        </div>
        <div className={style.selectBody}>
          <div>
            <div className={style.selectTab}>请选择</div>
            <div className={style.tab}>石家庄</div>
            <div className={style.hr} />
          </div>
          <div className={style.addressInfoWrap}>
            <div className={style.addreddInfoItem}><a href="#">北京市</a></div>
            <div className={style.addreddInfoItem}><a>北京市</a></div>
            <div className={style.addreddInfoItem}><a>北京市</a></div>
            <div className={style.addreddInfoItem}><a>北京市</a></div>
            <div className={style.addreddInfoItem}><a>北京市</a></div>
            <div className={style.addreddInfoItem}><a>北京市</a></div>
            <div className={style.addreddInfoItem}><a>北京市</a></div>
            <div className={style.addreddInfoItem}><a>北京市</a></div>
            <div className={style.addreddInfoItem}><a>北京市</a></div>

          </div>
        </div>
      </div>
    )
  }
}

export default AddressSelect;
