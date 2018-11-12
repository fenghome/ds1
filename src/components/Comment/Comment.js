import React from 'react';
import { Icon } from 'antd';
import style from './Comment.less';

export default class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [
        {
          userIco: '/p1.jpg',
          userLeve: 4,
          userLeveImg: '/v4.jpg',
          userName: 'zhangsan',
          starts: 3,
          spec: '规格:2P+1P+0.5P',
          commentContent: '颜值爆表',
          commentImgs: ['/p1.jpg', '/p2.jpg'],
          selectImg: null,
          commentTime: '2018-01-19 17:30'
        },
        {
          userIco: '/p1.jpg',
          userLeve: 4,
          userLeveImg: '/v4.jpg',
          userName: 'zhangsan',
          starts: 3,
          spec: '规格:2P+1P+0.5P',
          commentContent: '颜值爆表',
          commentImgs: ['/p1.jpg', '/p2.jpg'],
          selectImg: null,
          commentTime: '2018-01-19 17:30'
        },
      ]
    }
  }

  handleClickImg(index, imgUrl) {
    let comments = this.state.comments.slice();
    comments[index] = { ...comments[index], selectImg: imgUrl }
    this.setState({
      comments: comments
    })
  }

  handleCloseImg(index) {
    let comments = this.state.comments.slice();
    comments[index] = { ...comments[index], selectImg: null }
    this.setState({
      comments: comments
    })
  }

  renderStarts(index) {
    const { starts } = this.state.comments[index];
    let startCom = [];
    for (let i = 0; i < starts; i++) {
      startCom.push(
        <img src="./star.png" key={'s' + i} />
      )
    }
    return startCom;
  }

  renderListItem() {
    const { comments } = this.state;
    return comments && comments.map((comment, index) => (
      <div className={style.listItem} key={index}>
        <div className={style.userInfo}>
          <img className={style.userIco} src={comment.userIco} />
          <div className={style.userDec}>
            <img calssName={style.userLeve} src={comment.userLeveImg}></img>
            <span className={style.userName}>{comment.userName}</span>
          </div>
        </div>
        <div className={style.commentInfo}>
          <div className={style.commentStarts}>
            {
              this.renderStarts(index)
            }
          </div>
          <span className={style.spec}>{comment.spec}</span>
          <div className={style.commentContent}>{comment.commentContent}</div>
          <div className={style.commentImgs}>
            {
              comment.commentImgs && comment.commentImgs.map(imgUrl => (
                <div
                  className={comment.selectImg == imgUrl ? (style.commentImg + " " + style.selectImg) : style.commentImg}
                  key={imgUrl}
                  onClick={() => this.handleClickImg(index, imgUrl)}
                >
                  <img src={imgUrl} />
                </div>
              ))
            }
          </div>
          {
            comment.selectImg && (
              <div className={style.commentBigImg}>
                <div className={style.imgClose}>
                  <a onClick={() => this.handleCloseImg(index)}><Icon type="close" theme="outlined" /></a>
                </div>
                <div className={style.imgContent}>
                  <img src={comment.selectImg} />
                </div>
              </div>
            )
          }
          <div className={style.commentTime}>{comment.commentTime}</div>
        </div>
      </div>
    ))
  }

  render() {
    const { comments } = this.state;
    return (
      <div className={style.comment}>
        <div className={style.info}>
          <div className={style.praiseRate}>
            <div className={style.prTitle}>好评率</div>
            <div className={style.prNumber}>99.7%</div>
            <div className={style.prStart}>
              <img src="./star.png" />
              <img src="./star.png" />
              <img src="./star.png" />
              <img src="./star.png" />
              <img src="./star.png" />
            </div>
          </div>
          <div className={style.tags}>
            <div className={style.tagsTitle}>大家都在说：</div>
            <div className={style.tagsBody}>
              <div className={style.tag + " " + style.tagSelect}>全部(2212)</div>
              <div className={style.tag}>全部dfsf(2212)</div>
              <div className={style.tag}>全部ssss(2212)</div>

              <div className={style.tag}>全部sdfd(2212)</div>
              <div className={style.tag}>全部(2212)</div>
              <div className={style.tag}>全部dfsdfsd(2212)</div>
              <div className={style.tag}>全部(22dsfsdfsd12)</div>
              <div className={style.tag}>全部(2dfdd212)</div>
              <div className={style.tag}>全部(2212)</div>
              <div className={style.tag}>全部dfsf(2212)</div>
              <div className={style.tag}>全部ssss(2212)</div>

              <div className={style.tag}>全部sdfd(2212)</div>
              <div className={style.tag}>全部(2212)</div>
              <div className={style.tag}>全部dfsdfsd(2212)</div>
              <div className={style.tag}>全部(22dsfsdfsd12)</div>
              <div className={style.tag}>全部(2dfdd212)</div>
            </div>
          </div>
        </div>
        <div className={style.title}>
          <div className={style.titleLab}>排序：</div>
          <div className={style.titleItems}>
            <a className={style.titleItem + " " + style.itemSelect}>默认</a>
            <a className={style.titleItem}>评价时间</a>
          </div>
        </div>
        <div className={style.list}>
          {
            this.renderListItem()
          }
        </div>
      </div>

    )
  }
}
