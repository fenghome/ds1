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


class MenuCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectItems: null,
      menuCenterX: 0,
      subMenuWidth: 0,
      subMenusWidth: 0,
      subMenusX: 0
    }
  }

  onMouseEnter = (selectItems, menuCenterX) => {
    if (selectItems.items) {
      let webWidth = document.body.clientWidth;
      let subMenuWidth = 300;
      let subMenusWidth = selectItems.items.length * subMenuWidth + 12;
      let pageMargin = 50;
      let subMenusX = menuCenterX - subMenusWidth / 2;
      let subMenusRightX = subMenusX + subMenusWidth;
      if (subMenusX < pageMargin) {
        subMenusX = pageMargin;
      } else if (subMenusRightX > webWidth - pageMargin) {
        subMenusX = webWidth - pageMargin - subMenusWidth;
      }

      this.setState({
        selectItems,
        menuCenterX,
        subMenuWidth,
        subMenusWidth,
        subMenusX,
      })
    }
  }

  onMouseLeave = () => {
    this.setState({
      selectItems: null
    })
  }

  render() {
    const { selectItems, subMenuWidth, subMenusWidth, subMenusX } = this.state;
    return (
      <div>
        <div><MenuBar
          menus={menus}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        /></div>
        <div>
          <MenuItem
            selectItems={selectItems}
            subMenuWidth={subMenuWidth}
            subMenusWidth={subMenusWidth}
            subMenusX={subMenusX}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          />
        </div>
      </div>
    )
  }
}

export default MenuCom;
