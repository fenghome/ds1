import React from 'react';
import MenuBar from './MenuBar';
import MenuItem from './MenuItem';
import style from './menu.less';

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
      },
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
      },
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
      },
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
      },

    ]
  },

];


class MenuCom extends React.Component {
  constructor(props) {
    super(props);
    this.menuBarRefs = [];
    this.state = {
      selectId: null,
      move: 0,

    }
  }

  onMouseEnter = (id) => {
    if (!menus[id].items) {
      return;
    }
    //获得中西点x
    let centerX = document.body.clientWidth / 2;
    let maxWidth = 1140;
    let leftX = centerX - maxWidth / 2;
    let rightX = centerX + maxWidth / 2;
    const itemWidth = 140;
    let menuItemsW = menus[id].items.length * (itemWidth + 16) + 16 * 2 + 16 * 2 + 2;
    let menuBarRec = this.menuBarRefs[id].getBoundingClientRect();
    let menuBarCenterX = menuBarRec.x + menuBarRec.width / 2;
    let menuItemsCenterX = menuBarRec.x + menuItemsW / 2;
    let move = menuBarCenterX - menuItemsCenterX
    this.setState({
      move: move
    })
    if (menuItemsW > maxWidth) {
      this.setState({
        move: centerX - (menuBarRec.x + menuItemsW / 2)
      })
    } else if (menuBarRec.x - (menuItemsCenterX - menuBarCenterX) < leftX) {
      this.setState({
        move: leftX - menuBarRec.x
      })
    } else if (menuBarRec.x + menuItemsW - (menuItemsCenterX - menuBarCenterX) > rightX) {
      this.setState({
        move: rightX - (menuBarRec.x + menuItemsW)
      })
    }
    // console.log(menuBarCenterX);
    console.log(this.state.move);
    // console.log(menuBarRec.width / 2);
    // console.log(menuItemsW / 2);
    this.setState({

      selectId: id
    })
  }

  onMouseLeave = () => {
    this.setState({
      selectId: null
    })
  }

  // onMouseEnter = (selectItems, menuCenterX) => {
  //   if (selectItems.items) {
  //     let webWidth = document.body.clientWidth;
  //     let subMenuWidth = 300;
  //     let subMenusWidth = selectItems.items.length * subMenuWidth + 12;
  //     let pageMargin = 50;
  //     let subMenusX = menuCenterX - subMenusWidth / 2;
  //     let subMenusRightX = subMenusX + subMenusWidth;
  //     if (subMenusX < pageMargin) {
  //       subMenusX = pageMargin;
  //     } else if (subMenusRightX > webWidth - pageMargin) {
  //       subMenusX = webWidth - pageMargin - subMenusWidth;
  //     }

  //     this.setState({
  //       selectItems,
  //       menuCenterX,
  //       subMenuWidth,
  //       subMenusWidth,
  //       subMenusX,
  //     })
  //   }
  // }

  // onMouseLeave = () => {
  //   this.setState({
  //     selectItems: null
  //   })
  // }

  render() {
    const { selectId, subMenuWidth, subMenusWidth, subMenusX } = this.state;
    return (
      <div className={style.menu}>
        {
          menus.map((menu, id) => (
            <div className={style.menuBarAndItem}>
              <div
                className={style.menuBarItem}
                key={menu.key}
                onMouseEnter={() => this.onMouseEnter(id)}
                onMouseLeave={() => this.onMouseLeave()}
                ref={(menubar) => this.menuBarRefs.push(menubar)}
              >
                {menu.value}
              </div>
              {
                menu.items && selectId == id && (

                  <div
                    className={style.menuItemContent}
                    onMouseEnter={() => this.onMouseEnter(id)}
                    onMouseLeave={() => this.onMouseLeave()}
                    style={{ left: this.state.move }}
                  >
                    <img className={style.menuItemsIcon} src="/up1.png" />
                    <div
                      className={style.menuItems}
                    >
                      {
                        menu.items && menu.items.map(item => (
                          <div className={style.menuItem} key={item.key}>
                            <div className={style.menuItemTitle}>{item.title}</div>
                            {
                              item.subItem && item.subItem.map(subMenu => (
                                <a className={style.subMenu} key={subMenu.key}>
                                  <img className={style.subMenuIco} src="/mIco1.png" />
                                  <div className={style.subMenuValue}>{subMenu.value}</div>
                                </a>
                              ))
                            }
                          </div>
                        ))
                      }
                    </div>
                  </div>
                )
              }
            </div>
          ))
        }

      </div>
    )
  }
}

export default MenuCom;
