import React from 'react';

const App = React.createClass({
    render() {
        return (
            <div>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
});

export default App
