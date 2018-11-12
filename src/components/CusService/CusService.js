import React from 'react';
import CusServiceIcon from './CusServiceIcon';
import MessageIcon from './MessageIcon';
import style from './CusService.less';

class CusService extends React.Component {
  render() {
    return (
      <div className={style.cusService}>
        <div className={style.title}>客户服务</div>
        <div className={style.content}>
          <a>
            <CusServiceIcon />
            <div style={{marginTop:8}}>在线客服</div>
          </a>
          <a>
            <MessageIcon />
            <div style={{marginTop:8}}>用户反馈</div>
          </a>
        </div>
      </div >
    )
  }
}

export default CusService;
