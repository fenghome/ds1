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
          <ul>
            <li>请选择</li>
            <li className={style.selectTab}>石家庄</li>
            <div className={style.hr} />
          </ul>
          <div>cccc</div>
        </div>
      </div>
    )
  }
}

export default AddressSelect;
