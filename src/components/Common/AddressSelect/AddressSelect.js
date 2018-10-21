import React from 'react';
import { Icon } from 'antd';
import style from './AddressSelect.less';

class AddressSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelect: false,
      selectAddress: ['请选择'],
      tabs: [{ key: 'zhongguo', name: '请选择' }],
      selectTabIndex: 0,
      selectItems: props.addressStore[0].items,
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
    const { addressStore } = this.props;
    let { tabs, selectItems, selectTabIndex,isSelect,selectAddress } = this.state;
    tabs = tabs.slice(0,selectTabIndex);
    const address = addressStore.find(address => {
      return address.key == item.key;
    });
    if (address) {
      tabs[selectTabIndex] = { key: item.key, name: item.name };
      tabs[selectTabIndex + 1] = { key: address.key, name: address.tabName };
      selectItems = address.items;
      selectTabIndex++;
    } else {
      tabs[selectTabIndex] = { key: item.key, name: item.name };
      selectAddress = [];
      tabs.forEach(tab=>{
        selectAddress.push(tab.name);
      })
      isSelect = false;
    }

    this.setState({
      tabs,
      selectItems,
      selectTabIndex,
      isSelect,
      selectAddress
    })
  }

  changeSelectTabIndex = (tab, index) => {
    const { addressStore } = this.props;
    let { selectItems } = this.state;
    let address = addressStore.find(address => {
      return address.key == tab.key
    });
    if (address) {
      let farAddress = addressStore.find(item => {
        return item.key == address.far
      })
      selectItems = farAddress.items;
    }
    this.setState({
      selectTabIndex: index,
      selectItems
    })

  }

  render() {
    return (
      <div>
        <div
          onMouseEnter={this.mouseEnterAddress}
          onMouseLeave={this.mouseLeaveAddress}
          className={this.state.isSelect ? style.addressLineSelect : style.addressLine}>
          {
            this.state.selectAddress[0] == '请选择' ?
            <a>请选择地址<Icon type="down" theme="outlined" style={{ marginLeft: 6 }} /></a>
            :
            <a>
              {
                this.state.selectAddress.map((item, index) => (
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
                  this.state.tabs.map((tab, index) => {
                    let styleObj = this.state.selectTabIndex == index ? style.selectTab : style.tab;
                    return (
                      <div className={styleObj} key={index} onClick={() => this.changeSelectTabIndex(tab, index)}>
                        <a>{tab.name}</a>
                      </div>
                    )
                  })
                }
                <div className={style.hr} />
              </div>
              <div className={style.addressInfoWrap}>
                {
                  this.state.selectItems.map((item, index) => (
                    <div className={style.addressInfoItem} key={item.key}>
                      <a onClick={() => this.onSelectAddress(item)}>{item.name}</a>
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
