import React from 'react';
import style from './menu.less';
function MenuItem({ items }) {
  return (
    <div>
      {
        items && <div className={style.items} style={{width:items.width}}>
          {
            items.items.map(item => (
              <div className={style.item}>
                <div className={style.itemTitle}>{item.title}</div>
                {
                  item.subItem.map(i => (
                    <div className={style.subItem}>{i.value}</div>
                  ))
                }
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default MenuItem;
