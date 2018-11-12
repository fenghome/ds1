import React from 'react';

class TabPane extends React.Component{
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default TabPane;
