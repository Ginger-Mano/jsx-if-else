import React, { Component } from "react"
import { Link } from "react-router-dom"

class Grapes extends Component {
    render() {
        return (
            <div>
                <h1>L: Shinigami. We can get grapes for you. Would you like grapes?</h1>
                <img className="img" alt="" src="https://media2.giphy.com/media/yxFk0khTgzzDYqE8F9/source.gif" />
                <div>
                    <Link to="/answerGrapes"><button>Next</button></Link>
                </div>
            </div>
        )
    }
}
export default Grapes