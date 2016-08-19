import React from 'react';

const Content = React.createClass({
    render() {
        return (
            <div className='content'>
                {this.props.children}
            </div>
        )
    }
});

export default Content
