import React from 'react';

// Card for showing available games
const Gamecard = React.createClass({
	render: function() {
		// CSS with card image
		const CardTitle = {
			background: 'url("' + this.props.image + '") center / cover'
		};

		return (
			<div className="gcard mdl-card">
				<div className="mdl-card__title" style={ CardTitle }>
					<h2 className="mdl-card__title-text">{ this.props.title }</h2>
				</div>
				<div className="mdl-card__supporting-text">
					{ this.props.description }
				</div>
				<div className="mdl-card__actions mdl-card--border">
					<a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
						HOW-TO
					</a>
					<a className="right mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
						START <i className="material-icons">send</i>
					</a>
				</div>
			</div>
		);
	}
});

export default Gamecard;
