import React from "react";
import "./About.css"
import html from './images/html.png'
import css from './images/css.png'
import javascript from './images/js.png'
import react from './images/react.png'
import bootstrap from './images/bootstrap.png'


function About() {
    return (
        <div>
            <div>
                <section className="firstsection1">
                    <div className="leftsection">
                        <div><h2>I'm Ashutosh Narula</h2>
                            <p className="about">A Dedicated front-end developer, passionate in leveraging cutting-edge technologies to craft user friendly and engaging
                                web solutions.</p>
                        </div>
                    </div>

                </section>
                <div><div className="firstsection2"><h1>Skills</h1></div>
                    <div className="icons">
                        <div className="tag"><img title="HTML" src={html} alt="none" />
                            <p>HTML</p></div>
                        <div className="tag"><img title="CSS" src={css} alt="none" />
                            <p>CSS</p></div>
                        <div className="tag"><img title="Javascript" src={javascript} alt="none" />
                            <p>Javascript</p></div>
                        <div className="tag"><img title="ReactJS" src={react
                        } alt="none" />
                            <p>ReactJS</p></div>
                        <div className="tag"><img title="Bootstrap" src={bootstrap} alt="none" />
                            <p>Bootstrap</p></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;