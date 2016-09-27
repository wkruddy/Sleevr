'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import Routes from './routes';

import NavBar from './components/navBar/navBar';
// import StartPage from './components/startPage/startPage';
import PageFooter from './components/pageFooter/pageFooter';
// import DesignArena from './components/designArena/designArena';
// import Gallery from './components/gallery/gallery';
// import Profile from './components/profile/profile';

/* This is the initial React ControllerView */

const { div } = React.DOM;

// const mainComponents = [
//     NavBar,
//     MainLayout
//     // StartPage,
//     PageFooter,
//     // DesignArena,
//     // Gallery,
//     // Profile
// ];


class App extends React.Component {
    constructor (props) {
        // ES2015 version of getInitialState
        super(props);

        this.state = {
            viewportContentComponent: div(null, '')
        };
    }

    render () {

        // let childComponents = mainComponents.map(component => {
        //     let childProps = _.assign({ key: `${component.name}Component` }, this.props);
        //     return React.createElement(component, childProps);
        // });

        const MainLayout = div(_.assign({
            key: 'viewport-component',
            className: 'viewport'
        }, this.props), this.state.viewportContentComponent);

        const childComponents = [
            React.createElement(NavBar, _.assign({ key: 'nav-bar-component' }, this.state)),
            MainLayout,
            React.createElement(PageFooter, _.assign({ key: 'page-footer-component' }, this.state))
        ];

        return div({
            className: 'app-block',
            key: 'main-app'
        }, childComponents);
    }

    componentDidMount () {
        this.setState({ viewportContentComponent: Routes });
    }
}

App.propTypes = {};

App.defaultProps = {};

// export default App;

(() => ReactDOM.render(
    React.createElement(App, {}), document.getElementById('sleevr')
))();

