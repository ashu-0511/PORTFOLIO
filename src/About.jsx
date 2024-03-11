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
                        <img src={html} alt="none" />
                        <img src={css} alt="none" />
                        <img src={javascript} alt="none" />
                        <img src={react} alt="none" />
                        <img src={bootstrap} alt="none" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;