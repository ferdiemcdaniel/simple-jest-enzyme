import React, { Component } from "react";
class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count || 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    const { count } = this.state;
    return (
      <div data-test='component-click-counter'>
        <h1 data-test='component-text-display-counter'>{count}</h1>
        <button data-test='button-increment-counter' onClick={(e) => {this.handleClick()}}>Click Counter</button>
        <button data-test='button-reset-counter' onClick={(e) => {this.setState({count: 0})}}>Reset</button>
      </div>
    );
  }
}

export default ClickCounter;