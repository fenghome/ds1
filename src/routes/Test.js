import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [1, 2, 3]
    };
  }
  handleClick = () => {
    let { items } = this.state;
    items.push(4);
    this.setState({ items });
  }
  render() {
    return (
    <div>
      <ul>
        {this.state.items.map(i => <li key={i}>{i}</li>)}
      </ul>
      <button onClick={this.handleClick}>add</button>
    </div>)
  }
}

export default Test;
