import React from 'react';
import { Icon } from 'antd';
import style from './AddressSelect.less';

class AddressSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelect: false,
      address: [],
      tabs:[],
      selectTabIndex: -1,
      selectAddressTreeIndex:[-1,-1,-1,-1],
      selectItems: props.addressTree.selectItems,
    }
  }

  mouseEnterAddress = () => {
    this.setState({
      isSelect: true
    })
  }

  mouseLeaveAddress = () => {
    this.setState({
      isSelect: false
    })
  }

  onSelectAddress = (item) => {
    let { isSelect, address,selectTabIndex , selectItems } = this.state;

    //change selectTabIndex
    if (item.sub && address[0] != '请选择') {
      this.setState({
        selectTabIndex: selectTabIndex + 1
      })
    }
    //change adress
    if (address[0] == '请选择') {
      address[0] = item.name;
    } else{
      address.push(item.name);
    }

    console.log(address);
    //change selectItems,isSelect
    if (item.sub) {
      selectItems = item.sub;
    } else {
      isSelect = false;
    }

    this.setState({
      isSelect,
      address,
      selectItems
    })
  }

  changeSelectTabIndex = (index) => {
    // const { addressTree } = this.props;
    this.setState({
      selectTabIndex: index
    })
    console.log(index);
  }

  render() {
    const { citys } = this.props;

    return (
      <div>
        <div
          onMouseEnter={this.mouseEnterAddress}
          onMouseLeave={this.mouseLeaveAddress}
          className={this.state.isSelect ? style.addressLineSelect : style.addressLine}>
          {
            this.state.address[0] == '请选择' ?
              <a>请选择地址<Icon type="down" theme="outlined" style={{ marginLeft: 6 }} /></a>
              :
              <a>
                {
                  this.state.address.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))
                }
              </a>
          }
        </div>
        {
          this.state.isSelect && (
            <div
              className={style.selectBody}
              onMouseEnter={this.mouseEnterAddress}
              onMouseLeave={this.mouseLeaveAddress}
            >
              <div>
                {
                  this.state.address.map((a, index) => {
                    let styleObj = this.state.selectTabIndex == index ? style.selectTab : style.tab;
                    return (
                      <div className={styleObj} key={index} onClick={() => this.changeSelectTabIndex(index)}>
                        <a>{a}</a>
                      </div>
                    )
                  })
                }
                {/* <div className={style.selectTab}><a>请选择</a></div>
              <div className={style.tab}>石家庄</div> */}
                <div className={style.hr} />
              </div>
              <div className={style.addressInfoWrap}>
                {
                  this.state.selectItems.map((item, index) => (
                    <div className={style.addressInfoItem} key={item.key}>
                      <a onClick={() => this.onSelectAddress(item, index)}>{item.name}</a>
                    </div>
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
