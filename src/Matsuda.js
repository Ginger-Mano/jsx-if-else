import React, { Component } from "react"
import { Link } from "react-router-dom"

class Matsuda extends Component {
    render() {
        return (
            <div>
                <h1>Matsuda: Eh, may I have some fish?</h1>
                <div>
                    <Link to="/answerMatsuda"><button>Next</button></Link>
                </div>
            </div>
        )
    }
}
export default Matsuda