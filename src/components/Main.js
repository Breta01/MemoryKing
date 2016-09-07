import React from 'react';
import Header from './Header';
import Content from './Content';
import Sidebar from './Sidebar';

const Main = React.createClass({
    render() {
        return (
            <div className="Dashboard">
                <Header />
                <Sidebar />
                <Content>
                    {React.cloneElement(this.props.children, this.props)}
                </Content>
            </div>
        )
    },
    componentDidUpdate: function() {
        // Upgrading all Material Design Lite upgradable components
        // Only important for dynamicaly loading components
        componentHandler.upgradeDom();
    }
});

export default Main
