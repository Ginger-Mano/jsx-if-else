import React, { Component } from "react"
import { Link } from "react-router-dom"


class Grapes extends Component {
    render() {
        return (
            <div>
                <h1>Ryuk: Grapes??? Heh, heh, heh. I only eat Apples.</h1>
                <img alt="" className="img" src="https://media4.giphy.com/media/ycflgA1wZNwUppeah5/source.gif"></img>
                <div>
                    <Link to="/coffee"><button>Next</button></Link>
                </div>
            </div>
        )
    }
}
export default Grapes