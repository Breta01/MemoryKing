
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
            <h1>Hi and Welcome to the Memory King</h1>
          </div>
        );
    }
}

// Render to ID app in the DOM
ReactDOM.render(
    <App />, document.getElementById('app')
);
