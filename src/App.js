import './App.css';
import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import Grapes from "./Grapes"
import IceCream from "./IceCream"
import Intro from "./Intro"
import Home from "./Home"
import AnswerToIntro from "./AnswerToIntro"
import AnswerToGrapes from "./AnswerToGrapes"
import AnswerToCoffee from "./AnswerToCoffee"
import Coffee from "./Coffee"
import AnswerMatsuda from "./AnswerMatsuda"
import Matsuda from "./Matsuda"
import End from "./End"

class App extends Component {

  // renderApple = () => {
  //   if (this.state.question === false) {
  //     return "hi"
  //   } else {
  //     return <Apples />
  //   }
  // }

  // renderGrapes = () => {
  //   this.setState({
  //     question: true
  //   })
  // }



  render() {
    // const question = !this.state.question;
    // let ask;
    // if (question) {
    //   ask = <IceCream />
    // } else {
    //   ask = <Apples />
    // }

    // const debate = this.state.question ? "Hi" : <Apples />
    return (

      <div className="App">

        {/* {this.renderApple()} */}
        {/* {ask} */}


        {/* {debate} */}
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/intro" render={() => <Intro />} />
          <Route path="/answerIntro" render={() => <AnswerToIntro />} />
          <Route path="/icecream" render={() => <IceCream />} />
          <Route path="/grapes" render={() => <Grapes />} />
          <Route path="/answerGrapes" render={() => <AnswerToGrapes />} />
          <Route path="/coffee" render={() => <Coffee />} />
          <Route path="/answerCoffee" render={() => <AnswerToCoffee />} />
          <Route path="/matsuda" render={() => <Matsuda />} />
          <Route path="/answerMatsuda" render={() => <AnswerMatsuda />} />
          <Route path="/end" render={() => <End />} />
        </Switch>

      </div>
    );
  }
}

export default App;
