import React from 'react';
import {Icon} from 'antd';
import style from './menu.less';

function MenuItem({ selectItems,menuCenterX,subMenuWidth,subMenusWidth,subMenusX,onMouseEnter,onMouseLeave }) {

  return (
    <div>
      {
        selectItems && (
          <div className={style.items}
            style={{ width: subMenusWidth,left:subMenusX }}
            onMouseEnter={()=>{
              onMouseEnter(selectItems,menuCenterX)}
            }
            onMouseLeave={onMouseLeave}
          >
            {
              selectItems.items.map(m => (
                <div className={style.item} style={{ width: subMenuWidth }}>
                  <div className={style.itemTitle}>{m.title}</div>
                  {
                    m.subItem.map(i => (
                      <div className={style.subItem}><img src="/yay.jpg" style={{width:50,height:50}} />{i.value}</div>
                    ))
                  }
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default MenuItem;
