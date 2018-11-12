import React from 'react';
import style from './Recommend.less';

export default function Recommend({ recommends }) {
  return (
    <div className={style.list}>
      <div className={style.title}>
        专题推荐
      </div>
      <div className={style.listItems}>
        {
          recommends && recommends.map(item => (
            <div className={style.listItem}>
              <a href={item.url}>
                <img src={item.cover} />
                <div className={style.itemTitle}>{item.title}</div>
              </a>
            </div>
          ))
        }
      </div>
    </div>
  )
}
