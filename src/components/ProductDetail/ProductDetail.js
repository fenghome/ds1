import React from 'react';
import style from './ProductDetail.less';

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: [
        { label: '产地国家', content: '中国' },
        { label: '功效', content: '去污' },
        { label: '产地国家', content: '中国' },
        { label: '功效', content: '去污' },
        { label: '产地国家', content: '中国' },
      ],
      productImgs:[
        '/pi1.jpg',
        '/pi2.jpg',
        '/pi3.jpg'
      ]
    }
  }

  renderProductInfo() {
    const { productInfo } = this.state;
    return productInfo.map((item, i) => {
      if (i % 2 == 0) {
        return (
          <div className={style.infoLine} key={i}>
            {
              productInfo.slice(i, i + 2).map((item1, j) => (
                <div className={style.lineItem} key={j}>
                  <div className={style.itemLabel}>{item1.label}</div>
                  <div className={style.itemContent}>{item1.content}</div>
                </div>
              ))
            }
          </div>
        )
      }
    })
  }

  render() {
    const { productInfo } = this.state;
    return (
      <div>
        <div>
          <div className={style.info}>
            {this.renderProductInfo()}
          </div>
        </div>
        <div className={style.show}>
          {
            this.state.productImgs.map(item=>(
              <img src={item} />
            ))
          }
        </div>
      </div >
    )
  }
}
