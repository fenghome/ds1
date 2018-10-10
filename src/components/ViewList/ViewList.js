import React from 'react';
import style from './ViewList.less'
class ViewList extends React.Component {
  render() {
    return (
      <div className={style.viewList}>
        <div className={style.view}>
          <img src="/yay.jpg" />
        </div>


        <ul className={style.list}>
          <li>
            <a><img src="/rjd.png" /></a>
          </li>
          <li>
            <a><img src="/rjd.png" /></a>
          </li>
          <li>
            <a><img src="/rjd.png" /></a>
          </li>
          <li>
            <a><img src="/rjd.png" /></a>
          </li>
          <li>
            <a><img src="/rjd.png" /></a>
          </li>
        </ul>

      </div>

    )
  }
}

export default ViewList;
