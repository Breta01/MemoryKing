import React from 'react'

const Sidebar = () => (
    <div className='sidebar'>
        <ul>
            <li className="user">
                <i className="material-icons">face</i>
                <div>Hello, <b>Breta H.</b></div>
            </li>
            <li>
              <i className="material-icons">dashboard</i>
              <div>Dashboard</div>
            </li>
            <li>
              <i className="material-icons">date_range</i>
              <div>Calendar</div>
            </li>
            <li>
              <i className="material-icons">settings</i>
              <div>Settings</div>
            </li>
            <li>
              <div>1</div>
              <div>One</div>
            </li>
            <li>
              <div>2</div>
              <div>Two</div>
            </li>
        </ul>
    </div>
)

export default Sidebar
