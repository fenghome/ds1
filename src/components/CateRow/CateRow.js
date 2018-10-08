import React from 'react';
import { Breadcrumb, Card, Col, Row } from 'antd';

import style from './CateRow.less';

const { Meta } = Card;

function CateRow({ item }) {
  return (
    <div>
      <div>
        <h3 className={style.title}>{item.title}</h3>
        <div className={style.breadcrumb}>
          <Breadcrumb style={{ float: "left" }}>
            {
              item.subItem && item.subItem.map(subItem => (
                <Breadcrumb.Item key={subItem.key}><a>{subItem.value}</a></Breadcrumb.Item>
              ))
            }
          </Breadcrumb>
          <a style={{ marginLeft: 32 }}>查看更多></a>
        </div>
      </div>
      <div>
        <img src="/banner.jpg" />
      </div>
      <div>
        <Row gutter={16}>
          <Col span={6}>
            <Card
              hoverable
              cover={
                <img alt="example"
                  style={{ background: "#f4f4f4" }}
                  src="/rjd.png"
                />
              }
            >
              <Meta
                title="AB面独立弹簧床垫 进口乳胶"
                description={<div style={{ color: "red", textAlign: "center" }}>¥2599</div>}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={
                <img alt="example"
                  style={{ background: "#f4f4f4" }}
                  src="/rjd.png"
                />
              }
            >
              <Meta
                title="AB面独立弹簧床垫 进口乳胶"
                description={<div style={{ color: "red", textAlign: "center" }}>¥2599</div>}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={
                <img alt="example"
                  style={{ background: "#f4f4f4" }}
                  src="/rjd.png"
                />
              }
            >
              <Meta
                title="AB面独立弹簧床垫 进口乳胶"
                description={<div style={{ color: "red", textAlign: "center" }}>¥2599</div>}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={
                <img alt="example"
                  style={{ background: "#f4f4f4" }}
                  src="/rjd.png"
                />
              }
            >
              <Meta
                title="AB面独立弹簧床垫 进口乳胶"
                description={<div style={{ color: "red", textAlign: "center" }}>¥2599</div>}
              />
            </Card>
          </Col>
        </Row>

      </div>

    </div>
  )
}

export default CateRow;
