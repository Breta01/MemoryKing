import React from 'react'
import { IndexLink } from 'react-router';

const Sidebar = () => (
    <div className='sidebar'>
        <ul className="mdl-navigation">
            <IndexLink to="" className="mdl-navigation__link full-opacity"><li className="user">
                <div><img src="./static/img/logo-icon.png" /></div>
                <div><b>Memory King</b></div>
            </li></IndexLink>
            <IndexLink to="/" activeClassName="active" className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect"><li>
              <i className="material-icons">dashboard</i>
              <div>Dashboard</div>
            </li></IndexLink>
            <IndexLink to="/game" activeClassName="active" className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect"><li>
              <i className="material-icons">apps</i>
              <div>Apps</div>
            </li></IndexLink>
            <IndexLink to="/test" activeClassName="active" className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect"><li>
              <i className="material-icons">settings</i>
              <div>Settings</div>
            </li></IndexLink>
            <IndexLink to="/test" activeClassName="active" className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect"><li>
              <div>1</div>
              <div>Calendar</div>
            </li></IndexLink>
            <IndexLink to="/test" activeClassName="active" className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect"><li>
              <div>2</div>
              <div>Two</div>
            </li></IndexLink>
        </ul>
    </div>
)

export default Sidebar
