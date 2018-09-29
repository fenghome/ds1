import React from 'react';
import MenuBar from './MenuBar';
import MenuItem from './MenuItem';

const menus = [
  { key: 'shouye', value: '首页' },
  {
    key: 'jujia', value: '居家',
    items: [
      {
        title: '床品', subItem: [
          { key: 'chuangpintaojian', value: '床品套件' },
          { key: 'beizhen', value: '被枕 ' }
        ],
      },
      {
        title: '家具家装', subItem: [
          { key: 'jiaju', value: '家具' },
          { key: 'dengju', value: '灯具' }
        ]
      }

    ]
  },
  {
    key: 'xiebaopeishi', value: '鞋包配饰',
    items: [
      {
        title: '箱包', subItem: [
          { key: 'xinglixiang', value: '行李箱' },
          { key: 'nvshibaodai', value: '女士包袋 ' }
        ],
      },
      {
        title: '鞋靴', subItem: [
          { key: 'nvxie', value: '女鞋' },
          { key: 'nanxie', value: '男鞋' }
        ]
      }

    ]
  },
];


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
    }
  }

  onMouseEnter = (items) => {
    console.log(items);
    let width = (items.items.lenght+1)*30;
    this.setState({
      items:{
        items:items.items,
        width:width
      }
    })
  }

  onMouseLeave = () => {
    this.setState({
      items:null
    })
  }

  render() {
    return (
      <div>
        <div><MenuBar
          menus={menus}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        /></div>
        <div><MenuItem items={this.state.items} /></div>
      </div>
    )
  }
}

export default Menu;
