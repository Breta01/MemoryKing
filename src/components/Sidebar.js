import React from 'react'
import { Link } from 'react-router';

const Sidebar = () => (
    <div className='sidebar'>
        <ul className="mdl-navigation">
            <Link to="" className="mdl-navigation__link"><li className="user">
                <i className="material-icons">face</i>
                <div>Hello, <b>Breta H.</b></div>
            </li></Link>
            <Link to="/" className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect"><li>
              <i className="material-icons">dashboard</i>
              <div>Dashboard</div>
            </li></Link>
            <Link to="/game" className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect"><li>
              <i className="material-icons">date_range</i>
              <div>Calendar</div>
            </li></Link>
            <Link to="/game" className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect"><li>
              <i className="material-icons">settings</i>
              <div>Settings</div>
            </li></Link>
            <Link to="/game" className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect"><li>
              <div>1</div>
              <div>One</div>
            </li></Link>
            <Link to="/game" className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect"><li>
              <div>2</div>
              <div>Two</div>
            </li></Link>
        </ul>
    </div>
)

export default Sidebar
