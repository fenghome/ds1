import React from 'react';
import { Icon, Card, Row, Col } from 'antd';
import style from './AllLook.less';
import Tag from '../Common/Tag/Tag';
import ProductItem from '../Common/PorductItem/ProductItem';

class AllLook extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;
    return (
      <div className={style.allLook}>
        <div className={style.title}>大家都在看</div>
        <div className={style.list}>
          <div className={style.btn}>
            <a className={style.circle}><Icon type="left" theme="outlined" style={{ color: "#fff" }} /></a>
          </div>
          <div className={style.listItems}>
            <Row gutter={16}>
              {
                products && products.map(product => (
                  <Col span={6} >
                    <ProductItem {...product} coverW="210px" coverH="210px"/>
                  </Col>
                ))
              }
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
