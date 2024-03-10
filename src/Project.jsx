import React from 'react'
import './Project.css'
import vistara from './images/vistara.png'
import samsung from './images/samsung.png'

function Project() {
    return (
        <>
            <div className='firstsection3'>
                <h1>Portfolio</h1>
            </div>
            <div className="project">
                <img src={vistara} alt="none" />
                <div className="content">
                    <h2>Vistara clone</h2>
                    <p>Techstack: HTML CSS Javascript ReactJS</p>
                </div>
            </div>
            <hr />
            <div className="project">
                <img src={samsung} alt="none" />
                <div className="content">
                    <h2>Samsung clone</h2>
                    <p>Techstack: HTML CSS Javascript Bootstrap</p>
                </div>
            </div>
        </>
    )
}

export default Project