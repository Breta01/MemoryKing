import React from 'react';

const UserChip = ({name}) => (
    <span className="mdl-chip mdl-chip--contact mdl-chip--deletable">
    <span className="mdl-chip__contact bgcolor--main mdl-color-text--white"><i className="material-icons">face</i></span>
    <span className="mdl-chip__text">{name}</span>
    <button type="button" className="mdl-chip__action mdl-chip--action"><i className="material-icons">settings</i></button>
    </span>
)

export default UserChip;
