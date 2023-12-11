//import React from 'react'
import './WelcomeBox.css'

function WelcomeBox() {
    return (
        <div className='welcome-box position-absolute top-0 start-50 translate-middle-x'>
            <p className='welcome-title'>WELCOME TO LIBRARY</p>
            <p className='welcome-message'>Feed Your Brain<br/>
            <span className='welcome-submessage'>Grab A Book To Read</span></p>
        </div>
    )
}

export default WelcomeBox
