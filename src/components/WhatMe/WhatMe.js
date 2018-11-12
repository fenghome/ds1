import React from 'react';
import { Icon } from 'antd';
import UpIcon from './UpIcon';
import style from './WhatMe.less';

export default class WhatMe extends React.Component {
  constructor() {
    super();
    this.state = {
      showCode1: false,
      showCode2: false
    }
  }
  render() {
    return (
      <div className={style.whatMe}>
        <div className={style.title}>何为严选</div>
        <div className={style.contnet}>网易原创生活类电商品牌，秉承网易一贯的严谨态度，我们深入世界各地，从源头全程严格把控商品生产环节，力求帮消费者甄选到优质的商品</div>
        <div className={style.fllowMe}>
          <span>关注我们:</span>
          <Icon
            type="codepen-circle"
            style={{ paddingRight: 16, fontSize: 32, color: "#0FAB83" }}
            onMouseEnter={
              () => { this.setState({ showCode1: true }) }
            }
            onMouseLeave={
              () => { this.setState({ showCode1: false }) }
            }
          />
          <Icon
            type="taobao-circle"
            style={{ paddingRight: 16, fontSize: 32, color: "#4BB341" }}
            onMouseEnter={
              () => { this.setState({ showCode2: true }) }
            }
            onMouseLeave={
              () => { this.setState({ showCode2: false }) }
            }
          />
          <Icon type="weibo-circle" style={{ paddingRight: 16, fontSize: 32, color: "#E42F36" }} />
        </div>
        <div className={style.QRcode}>
          {
            this.state.showCode1 && (
              <div
                className={style.code1}
                onMouseEnter={
                  () => { this.setState({ showCode1: true }) }
                }
                onMouseLeave={
                  () => { this.setState({ showCode1: false }) }
                }
              >
                <img className={style.upIco} src="/up.png" />
                <img className={style.codeImg} src="/code1.png" />
              </div>
            )
          }
          {
            this.state.showCode2 && (
              <
                div className={style.code2}
                onMouseEnter={
                  () => { this.setState({ showCode2: true }) }
                }
                onMouseLeave={
                  () => { this.setState({ showCode2: false }) }
                }
              >
                <img className={style.upIco} src="/up.png" />
                <img className={style.codeImg} src="/code2.png" />
              </div>
            )
          }
        </div>
      </div>
    )
  }
}
