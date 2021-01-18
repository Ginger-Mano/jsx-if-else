import React, { Component } from "react"
import { Link } from "react-router-dom"

class Home extends Component {
    render() {
        return (
            <div>
                <div className="homeDiv">


                    <h2 className="homeTitle">A Food Coversation:</h2>
                    <h4 className="subtitle">Using characters from the anime, Death Note.</h4>


                    <img alt="" className="homeImg" src="https://64.media.tumblr.com/50cc9915567c1fa1475c51c3cb9285a1/tumblr_obpa72Br9V1uc9x1zo1_1280.gifv" />

                    <br></br><br></br>

                    <Link to="/intro"><button className="button">Begin</button></Link>

                </div>
                {/* <div>
                    <img alt="" src="https://64.media.tumblr.com/50cc9915567c1fa1475c51c3cb9285a1/tumblr_obpa72Br9V1uc9x1zo1_1280.gifv" />


                    <Link to="/intro"><button className="button">Begin</button></Link>

                </div> */}
            </div>
        )
    }
}
export default Home