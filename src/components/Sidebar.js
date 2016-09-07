import React from 'react'
import { IndexLink } from 'react-router';

const Sidebar = () => (
    <div className='sidebar'>
        <ul className="mdl-navigation">
            <IndexLink to="" className="mdl-navigation__link"><li className="user">
                <i className="material-icons">face</i>
                <div>Hello, <b>Breta H.</b></div>
            </li></IndexLink>
            <IndexLink to="/" activeClassName="active" className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect"><li>
              <i className="material-icons">dashboard</i>
              <div>Dashboard</div>
            </li></IndexLink>
            <IndexLink to="/game" activeClassName="active" className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect"><li>
              <i className="material-icons">date_range</i>
              <div>Calendar</div>
            </li></IndexLink>
            <IndexLink to="/game" activeClassName="active" className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect"><li>
              <i className="material-icons">settings</i>
              <div>Settings</div>
            </li></IndexLink>
            <IndexLink to="/game" activeClassName="active" className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect"><li>
              <div>1</div>
              <div>One</div>
            </li></IndexLink>
            <IndexLink to="/game" activeClassName="active" className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect"><li>
              <div>2</div>
              <div>Two</div>
            </li></IndexLink>
        </ul>
    </div>
)

export default Sidebar
