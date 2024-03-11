import React from 'react'
import { ReactTyped } from "react-typed";
import './Main.css'
import resume from './docs/Ashutosh_resume.pdf'


const Main = () => {
    return (
        <div>
            <section className="firstsection">
                <div className="leftsection">Hi,My name is <span className="purple">Ashutosh Narula</span>
                    <div>and I'm a passionate</div>
                    <div id='element'><ReactTyped strings={["Web Developer", "Front-end Developer"]} typeSpeed={40} /></div>
                    <div className="buttons">
                        <button className="btn"><a href={resume} target="_blank" rel='noreferrer' >Resume</a> </button>
                        <button className="btn" ><a href="https://github.com/ashu-0511" target="_blank" rel='noreferrer' >Github</a></button>
                    </div>
                </div>
                <div className="rightsection">IMAGE</div>
            </section>
        </div>
    )
}

export default Main;
