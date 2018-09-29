import React from 'react';
import style from './menu.less';
function Menu({ menus,onMouseEnter,onMouseLeave }) {

  return (
    <ul>
      {
        menus.map(item => (
          <li
            className={style.barItem}
            onMouseEnter={() => onMouseEnter(item)}
            onMouseLeave={() => onMouseLeave()}
          >
            <a >{item.value}</a>
          </li>
        ))
      }
    </ul>
  )
}

export default Menu;
