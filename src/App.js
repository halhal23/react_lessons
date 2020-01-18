import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = { count: 0 }
  }

  addCount = () => {
    this.setState({ count: this.state.count + 1 })
  }
  minusCount = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render(){
    return (
      <React.Fragment>
        <h1>{ this.state.count }</h1>
        <button onClick={this.addCount}>+1</button>
        <button onClick={this.minusCount}>-1</button>
      </React.Fragment>
    )
  }
}


export default App;
