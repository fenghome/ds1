import React from 'react';
import TabPane from './TabPane';
import style from './Tabs.less';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectKeyId: props.defaultKeyId,
    }
  }

  handleClick(keyId) {
    this.setState(
      { selectKeyId: keyId }
    )
  }

  renderHeader() {
    const { children } = this.props;
    const { selectKeyId } = this.state;
    return React.Children.map(children, item => (
      <div
        key={item.props.keyId}
        className={item.props.keyId == selectKeyId ? style.itemAct : style.item}
        onClick={() => { this.handleClick(item.props.keyId) }}
      >
        {item.props.tab}
      </div>
    ))
  }

  renderContent() {
    const { children } = this.props;
    return React.Children.map(children, item => {
      if (item.props.keyId == this.state.selectKeyId) {
        return <div>{item.props.children}</div>
      }
    })
  }

  render() {
    return (
      <div className={style.tabs}>
        <div className={style.header}>{this.renderHeader()}</div>
        {/* <div className={style.line} /> */}
        <div>{this.renderContent()}</div>
      </div>
    )
  }
}

Tabs.TabPane = TabPane;

export default Tabs;
