import React from 'react';
import style from './ViewList.less';

class ViewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectUrl: props.urls[0]
    }
  }

  changeViewUrl = (index) => {
    this.setState({
      selectUrl: this.props.urls[index]
    })
  }

  render() {
    const { urls } = this.props;
    return (
      <div>
        <div className={style.viewList}>
          <div className={style.view}>
            <img src={this.state.selectUrl} />
          </div>
          <ul className={style.list}>
            {
              urls && urls.map((url, index) => (
                <li>
                  <a onMouseEnter={() => this.changeViewUrl(index)}><img src={url} /></a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>


    )
  }
}

export default ViewList;
