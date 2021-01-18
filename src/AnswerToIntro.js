import React, { Component } from "react"
import IceCream from "./IceCream"
import Grapes from "./Grapes"


class AnswerToIntro extends Component {
    state = {
        question: false
    }




    render() {
        const question = !this.state.question;
        let ask;
        if (question) {
            ask = <IceCream />
        } else {
            ask = <Grapes />
        }

        return (
            <div>
                {ask}


            </div>
        )
    }
}
export default AnswerToIntro