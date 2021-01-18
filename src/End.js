import React from "react"
import { Link } from "react-router-dom"

function End() {
    return (
        <div>
            <h2>The End</h2>
            <div>
                <Link to="/"><button>Back to Beginning</button></Link>
            </div>
        </div>
    )
}
export default End