import React from 'react'

const Header = () => (
    <div className='header'>
        <ul>
            <li className='logo'>
                <h1>Memory King</h1></li>
            <li className='links'>
                <a href="#about"  className="icon"><i className="material-icons">settings</i></a></li>
            <li className='links'>
                <a href="#contact"  className='active'>Contact</a></li>
            <li className='links'>
                <a href="#about">About</a></li>
        </ul>

    </div>
)

export default Header
