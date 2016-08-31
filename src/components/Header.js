import React from 'react';
import UserChip from './UserChip';

const Header = () => (
    <div className='header'>
        <ul>
            <li className='logo'>
                <h1>Memory King</h1>
            </li>
            <li className='user'>
                <UserChip name="Breta" />
            </li>
            <li className='links'>
            <HeaderTab text="Latest" active={false} />
            <HeaderTab text="All" active={true} />
            </li>
        </ul>
    </div>
)

const HeaderTab = ({ text, active }) => (
    <button id={(active) ? 'active' : ''} className="mdl-button mdl-layout__tab mdl-js-button mdl-js-ripple-effect">
    {text}</button>
)

export default Header
