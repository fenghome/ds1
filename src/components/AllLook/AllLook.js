import React from 'react';
import { Icon, Card, Row, Col } from 'antd';
import style from './AllLook.less';
import Tag from '../Common/Tag/Tag';

class AllLook extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.allLook}>
        <div className={style.title}>大家都在看</div>
        <div className={style.list}>
          <div className={style.btn}>
            <a className={style.circle}><Icon type="left" theme="outlined" style={{ color: "#fff" }} /></a>
          </div>
          <div className={style.listItems}>
            <Row gutter={16}>
              <Col span={6}>
                <div className={style.product}>
                  <img className={style.cover} src="pp1.png" />
                  <div className={style.tag}>
                    <Tag text="今日特价" bColor="#e36844" />
                  </div>
                  <a>平板喷水拖把</a>
                  <div className={style.priceInf}>
                    <span className={style.pri}>¥88</span>
                    <span className={style.oPri}>¥188</span>
                    <span className={style.icon}>
                      <Icon type="shopping-cart" theme="outlined" />
                    </span>
                  </div>
                </div>
              </Col>
              <Col span={6}v>
                <div className={style.product}>
                  <img className={style.cover} src="pp2.png" />
                  <div className={style.tag}>
                    <Tag text="今日特价" bColor="#e36844" />
                  </div>
                  <a>平板喷水拖把</a>
                  <div className={style.priceInf}>
                    <span className={style.pri}>¥88</span>
                    <span className={style.oPri}>¥188</span>
                    <span className={style.icon}>
                      <Icon type="shopping-cart" theme="outlined" />
                    </span>
                  </div>
                </div>
              </Col>
              <Col span={6}>
                <div className={style.product}>
                  <img className={style.cover} src="pp3.png" />
                  <div className={style.tag}>
                    <Tag text="今日特价" bColor="#e36844" />
                  </div>
                  <a>平板喷水拖把</a>
                  <div className={style.priceInf}>
                    <span className={style.pri}>¥88</span>
                    <span className={style.oPri}>¥188</span>
                    <span className={style.icon}>
                      <Icon type="shopping-cart" theme="outlined" />
                    </span>
                  </div>
                </div>
              </Col>
              <Col span={6}>
                <div className={style.product}>
                  <img className={style.cover} src="pp4.png" />
                  <div className={style.tag}>
                    <Tag text="今日特价" bColor="#e36844" />
                  </div>
                  <a>平板喷水拖把</a>
                  <div className={style.priceInf}>
                    <span className={style.pri}>¥88</span>
                    <span className={style.oPri}>¥188</span>
                    <span className={style.icon}>
                      <Icon type="shopping-cart" theme="outlined" />
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className={style.btn}>
            <a className={style.circle}><Icon type="right" theme="outlined" style={{ color: "#fff" }} /></a>
          </div>
        </div>
      </div>
    )
  }
}

export default AllLook;
