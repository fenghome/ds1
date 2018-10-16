import React from 'react';
import { Icon } from 'antd';
import style from './AddressSelect.less';

class AddressSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelect: false,
      address: ['请选择'],
      tabs: [],
      selectTabIndex: -1,
      selectTree: [-1, -1, -1, -1],
      selectItems: props.addressTree,
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

  updateSelectItems = () => {
    const { addressTree } = this.props;
    let selectItems = addressTree;
    this.state.selectTree.forEach(i => {
      if (i != -1) {
        selectItems = selectItems.items[i].sub
      }
    });

    this.setState({
      selectItems
    });

  }

  updateTabs = ()=>{
    const { addressTree } = this.props;
    const { tabs,selectTree } = this.state;
    let selectItems = addressTree;
    for(let i=0;i<selectTree.length;i++){
      if(selectTree[i] == -1){
        tabs[i] = selectItems.tabName;
        break;
      }
      tabs[i] = selectItems.items[selectTree[i]].name;
      if(selectItems.items[selectTree[i]].sub){
        selectItems = selectItems.items[selectTree[i]].sub;
      }
    }
  }



  onSelectAddress = (item, index) => {
    //change selectTabIndex
    let { selectTree, selectTabIndex } = this.state;
    if (item.sub) {
      selectTabIndex = selectTabIndex + 1;
      this.setState({
        selectTabIndex
      })
    }

    selectTree[selectTabIndex] = index;

    this.updateSelectItems();

    // //change adress
    // if (address[0] == '请选择') {
    //   address[0] = item.name;
    // } else{
    //   address.push(item.name);
    // }

    // console.log(address);
    // // change selectItems,isSelect
    // if (item.sub) {
    //   selectItems = item.selectItem;
    // } else {
    //   isSelect = false;
    // }

    // this.setState({
    //   isSelect,
    //   // address,
    //   selectItems
    // })
  }

  changeSelectTabIndex = (index) => {
    // const { addressTree } = this.props;
    this.setState({
      selectTabIndex: index
    })
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
                  this.state.selectItems.items.map((item, index) => (
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
