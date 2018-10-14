import React from 'react';
import { Icon } from 'antd';
import style from './AddressSelect.less';

class AddressSelect extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isSelect:false,
      address:[]
    }
  }

  mouseEnterAddress=()=>{
    this.setState({
      isSelect:true
    })
  }

  mouseLeaveAddress=()=>{
    this.setState({
      isSelect:false
    })
  }
  render() {
    const { citys } = this.props;
    
    return (
      <div>
        <div 
          onMouseEnter={this.mouseEnterAddress}
          onMouseLeave={this.mouseLeaveAddress}
          className={this.state.isSelect?style.addressLineSelect:style.addressLine}>
          <a 
          >请选择地址<Icon type="down" theme="outlined" style={{ marginLeft: 6 }} /></a>
        </div>
        {
          this.state.isSelect && (
          <div 
            className={style.selectBody}
            onMouseEnter={this.mouseEnterAddress}
            onMouseLeave={this.mouseLeaveAddress}
          >
            <div>
              <div className={style.selectTab}><a>请选择</a></div>
              <div className={style.tab}>石家庄</div>
              <div className={style.hr} /> 
            </div>
            <div className={style.addressInfoWrap}>
              {
                citys.map(city=>(
                  <div className={style.addressInfoItem}><a>{city.name}</a></div>
                ))
              }
            </div>
          </div>
          )
        }
      </div>
    )
  }
}

export default AddressSelect;
