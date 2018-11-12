import React from 'react';
import style from './QRCoder.less';

export default function QRCoder(){
  return (
    <div className={style.qrCoder}>
      <div className={style.title}>扫码下载严选APP</div>
      <img className={style.content} src="/wycoder.png" />
      <div className={style.footer}>下载领1000元新人礼包</div>
    </div>
  )
}
