import React from 'react'
import github from './images/github.png'
import linkedin from './images/linkedin.png'
import './Footer.css'

function Footer() {
    return (
        <div className='bar'>
            <a href="https://github.com/ashu-0511" rel="noreferrer" target="_blank"><img src={github} alt="none" /></a>
            <a href="https://www.linkedin.com/in/ashutosh-narula-15a638269/" target="_blank" rel="noreferrer"><img src={linkedin} alt="none" /></a>
        </div>
    )
}

export default Footer