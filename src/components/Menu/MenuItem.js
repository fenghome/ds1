import React from 'react';
import style from './menu.less';
function MenuItem({ items }) {
  return (
    <div>
      {
        items && (
          <div className={style.items}
            style={{ width: items.subMenusWidth,left:items.subMenusX }}>
            {
              items.menuItems.map(m => (
                <div className={style.item} style={{ width: items.subMenuWidth }}>
                  <div className={style.itemTitle}>{m.title}</div>
                  {
                    m.subItem.map(i => (
                      <div className={style.subItem}>{i.value}</div>
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
