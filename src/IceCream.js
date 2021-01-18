import React from "react"
import { Link } from "react-router-dom"

function IceCream() {
    return (
        <div>
            <h2>Watari: Perhaps Ryuzaki. It is hot out. We can have ice cream instead.</h2>
            <img alt="" src="https://media2.giphy.com/media/d5wZm7aq4QDmanKmvh/giphy.gif" />
            <div>
                <Link to="/grapes"><button>Next</button></Link>
            </div>
        </div>
    )
}
export default IceCream