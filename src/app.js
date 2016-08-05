
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../static/styles/main.scss';

// App component created as a class
class App extends React.Component {

    // render method returns JSX template
    render() {
        return (
          <div>
            <h1>Hi</h1>
            <p>This is memory king app workspace setup</p>
          </div>
        );
    }
}

// Render to ID app in the DOM
ReactDOM.render( < App / > ,
    document.getElementById('app')
);
