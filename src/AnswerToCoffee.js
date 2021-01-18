import React, { Component } from "react"
import { Link } from "react-router-dom"

class AnswerToCoffee extends Component {
    render() {
        return (
            <div>
                <h1>Yes!</h1>
                <div>
                    <Link to="/matsuda"><button>Next</button></Link>
                </div>
            </div>
        )
    }
}
export default AnswerToCoffee