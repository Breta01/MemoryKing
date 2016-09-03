import React from 'react';

const UserChip = ({name}) => (
    <span className="mdl-chip mdl-chip--contact mdl-chip--deletable">
    <span className="mdl-chip__contact bgcolor--main mdl-color-text--white"><i className="material-icons">face</i></span>
    <span className="mdl-chip__text">{name}</span>
    <button type="button" id="user-menu-lower-right" className="mdl-chip__action mdl-chip--action"><i className="material-icons">settings</i></button>
    <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" data-mdl-for="user-menu-lower-right">
      <li className="mdl-menu__item">Settings</li>
      <li className="mdl-menu__item">Change Account</li>
      <li className="mdl-menu__item">Log out</li>
    </ul>
    </span>
)

export default UserChip;
