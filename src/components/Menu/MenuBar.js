import React from 'react';
import style from './menu.less';
function Menu({ menus, onMouseEnter,onMouseLeave }) {

  let liRefs = [];
  const getMenuCenterX = (index) => {
    return liRefs[index].offsetLeft + liRefs[index].offsetWidth / 2;
  }

  return (
    <ul>
      {
        menus.map((items, index) => (
          <li
            ref={(li) => { liRefs.push(li) }}
            className={style.barItem}
            onMouseEnter={(e) => {
              let menuCenterX = getMenuCenterX(index);
              onMouseEnter(items,menuCenterX);

            }}
            onMouseLeave={onMouseLeave}
          >
            <a >{items.value}</a>
          </li>
        ))
      }
    </ul>
  )
}

export default Menu;
