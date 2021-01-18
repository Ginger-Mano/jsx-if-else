import React, { Component } from "react"
import { Link } from "react-router-dom"

class Coffee extends Component {
    render() {
        return (
            <div>
                <h1>L to the others: Would you like some coffee?</h1>
                <img alt="" className="img" src="https://media3.giphy.com/media/L2wEbAL75L24xiHWFa/source.gif"></img>
                <div>
                    <Link to="/answerCoffee"><button>Next</button></Link>
                </div>
            </div>
        )
    }
}
export default Coffee