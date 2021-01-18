import React, { Component } from "react"
import { Link } from "react-router-dom"

class Matsuda extends Component {
    render() {
        return (
            <div>
                <h1>Everyone in annoyance: Matsuda!</h1>
                <div>
                    <Link to="/end"><button>Next</button></Link>
                </div>
            </div>
        )
    }
}
export default Matsuda