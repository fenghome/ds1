import React from 'react';
import { Icon } from 'antd';
import style from './AddressSelect.less';

class AddressSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelect: false,
      address: ['请选择'],
      tabs: ['请选择'],
      selectTabIndex: -1,
      selectTree: [-1, -1, -1, -1],
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

  updateSelectItems = (selectTree, selectTabIndex) => {
    const { addressTree } = this.props;
    let selectItems = addressTree;
    for (let i = 0; i <= selectTabIndex; i++) {
      if (i < selectTree.length - 1) {
        selectItems = selectItems.items[selectTree[i]].sub
      }
    }

    this.setState({
      selectItems
    });


  }

  updateTabs = () => {
    const { addressTree } = this.props;
    const { tabs, selectTree } = this.state;
    let tempItems = addressTree;
    for (let i = 0; i < selectTree.length; i++) {
      if (selectTree[i] == -1) {
        tabs[i] = tempItems.tabName;
        break;
      }
      tabs[i] = tempItems.items[selectTree[i]].name;
      if (i < selectTree.length - 1) {
        tempItems = tempItems.items[selectTree[i]].sub;
      }

    }
    this.setState({
      tabs
    })
  }



  onSelectAddress = (item, index) => {
    //change selectTabIndex
    let { selectTree, selectTabIndex } = this.state;
    if (selectTabIndex < selectTree.length-1 ) {
      selectTabIndex = selectTabIndex + 1;
      this.setState({
        selectTabIndex
      })
    }

    selectTree[selectTabIndex] = index;
    this.setState({
      selectTree
    })
    console.log(selectTabIndex);
    console.log(selectTree);
    this.updateTabs();
    this.updateSelectItems(selectTree, selectTabIndex);
  }

  changeSelectTabIndex = (index) => {
    // const { addressTree } = this.props;
    this.setState({
      selectTabIndex: index
    })
    this.updateTabs();
    this.updateSelectItems(this.state.selectTree, index-1);
  }

  render() {
    return (
      <div>
        <div
          onMouseEnter={this.mouseEnterAddress}
          onMouseLeave={this.mouseLeaveAddress}
          className={this.state.isSelect ? style.addressLineSelect : style.addressLine}>
          {
            // this.state.address[0] == '请选择' ?
            <a>请选择地址<Icon type="down" theme="outlined" style={{ marginLeft: 6 }} /></a>
            // :
            // <a>
            //   {
            //     this.state.address.map((item, index) => (
            //       <span key={index}>{item}</span>
            //     ))
            //   }
            // </a>
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
                  this.state.tabs.map((a, index) => {
                    let styleObj = this.state.selectTabIndex  == index ? style.selectTab : style.tab;
                    return (
                      <div className={styleObj} key={index} onClick={() => this.changeSelectTabIndex(index)}>
                        <a>{a}</a>
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
                      <a onClick={() => this.onSelectAddress(item, index)}>{item}</a>
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
