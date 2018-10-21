import React from 'react';
import { Icon } from 'antd';
import style from './AllLook.less';

class AllLook extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={style.allLook}>
        <div className={style.title}>大家都在看</div>
        <div className={style.list}>
          <div className={style.btn}>
            <a className={style.circle}><Icon type="left" theme="outlined" style={{color:"#fff"}}/></a>
          </div>
          <div className={style.listItems}>
          bbbb
          </div>
          <div className={style.btn}>
            <a className={style.circle}><Icon type="right" theme="outlined" style={{color:"#fff"}}/></a>
          </div>
        </div>
      </div>
    )
  }
}

export default AllLook;
