import './App.css';
import React, { Component } from "react"
import Apples from "./Apples"

class App extends Component {
  state = {
    question: false
  }

  renderApple = () => {
    if (this.state.question === false) {
      return "hi"
    } else {
      return <Apples />
    }
  }



  render() {
    // const question = this.state.question;
    // let ask;
    // if (question) {
    //   ask = <Apples />
    // } else {
    //   ask = "Hi"
    // }

    const debate = this.state.question ? "Hi" : <Apples />
    return (

      <div className="App">
        <h2>Hello</h2>
        {this.renderApple()}
        {debate}
      </div>
    );
  }
}

export default App;
