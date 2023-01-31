import React, { Component, MouseEvent } from "react";

interface TestProps {
  title: string;
  number?: number;
}
interface TestState {
  count: number;
}

export class TestComponent extends Component<TestProps, TestState> {
  constructor(props: TestProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick(event: MouseEvent) {
    //event.preventDefault();
    // alert(event.currentTarget.tagName);
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <>
        <h1>Classic component: {this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>{this.props.title}</button>
      </>
    );
  }
}
