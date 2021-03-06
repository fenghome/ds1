import React from 'react';
import { Menu, Divider, Icon } from 'antd';
import style from './TagSelect.less';
const MenuItem = Menu.Item;

class TagSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectIndex: -1
    }
  }

  selectItem = (index) => {
    this.setState({
      selectIndex: index
    })
  }

  render() {
    const { title, cates } = this.props;
    return (
      <div>
        <div className={style.tagSelect}>
          <div className={style.title}>{title}:</div>
          <ul>
            {
              cates && cates.map((cate, index) => (
                <li className={index == this.state.selectIndex ? style.selected : undefined}>
                  <a onClick={() => this.selectItem(index)}>{cate.value}{cate.icon && <img src={cate.icon} className={style.icon} />}</a>
                </li> 
              ))
            }
          </ul>
        </div>
        <Divider dashed style={{ margin: "0 0" }} />
      </div>

    )
  }
}

export default TagSelect;
