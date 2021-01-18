import React, { Component } from "react"
import { Link } from "react-router-dom"
import Typewriter from 'typewriter-effect';

class Intro extends Component {

    render() {
        return (
            <div className="introDiv">
                <div className="introInfo">
                    <div>
                        <img alt="" src="https://pa1.narvii.com/7260/4fb0ad5233ee4ea4eb28a7f24e51eb5832e9d8c4r1-500-284_hq.gif" />
                    </div>

                    <div>
                        <Typewriter onInit={(typewriter) => {
                            typewriter.typeString('<h1><span>L: Everyone. I called this meeting to talk about Kiras increase in recent activity. I have reason to believe he has access to police records.</span></h1>')
                                .callFunction(() => {
                                })
                                .pauseFor(1500)
                                .callFunction(() => {
                                })
                                .start();
                        }}
                            options={{
                                autoStart: true,
                                loop: false,
                            }} />
                    </div>
                </div>

                <div>
                    <div className="introInfo2">
                        <div>
                            <Typewriter onInit={(typewriter) => {
                                typewriter.typeString('<h1><span> Sigh Im hungry. I think we need some food. Watari. Do you think you can get us some cake?</span></h1>')
                                    .callFunction(() => {
                                    })
                                    .pauseFor(5500)
                                    .callFunction(() => {
                                    })
                                    .start();
                            }}
                                options={{
                                    autoStart: false,
                                    loop: false,
                                }} />
                        </div>
                        <div>
                            <img className="introimg" alt="" src="https://media4.giphy.com/media/jtu1YG7veuNx2IlEjh/source.gif" />
                        </div>
                    </div>
                </div>


                <div>
                    <Link to="/answerIntro"><button>Next</button></Link>
                </div>

            </div>






        )
    }
}
export default Intro