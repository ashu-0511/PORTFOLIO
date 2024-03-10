import React from 'react'
import { ReactTyped } from "react-typed";
import './Main.css'

const Main = () => {
    return (
        <div>
            <section className="firstsection">
                <div className="leftsection">Hi,My name is <span className="purple">Ashutosh</span>
                    <div>and I'm a passionate</div>
                    <div id='element'><ReactTyped strings={["Web Developer", "Front-end Developer"]} typeSpeed={40} /></div>

                </div>
                <div className="rightsection">IMAGE</div>
            </section>
        </div>
    )
}

export default Main;
