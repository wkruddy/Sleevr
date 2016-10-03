'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import Routes from './routes';

import NavBar from './components/navBar/navBar';
import PageFooter from './components/pageFooter/pageFooter';

/* This is the initial React ControllerView */

const { div } = React.DOM;

class App extends Component {
    constructor (props) {
        // ES2015 version of getInitialState
        super(props);
    }

    render () {

        const MainLayoutRegion = div(_.assign({
            className: 'layout-region',
            key: 'layoutComponent'
        }), this.props.children);

        const childComponents = [
            React.createElement(NavBar, _.assign({ key: 'nav-bar-component' }, this.state)),
            MainLayoutRegion,
            React.createElement(PageFooter, _.assign({ key: 'page-footer-component' }, this.state))
        ];

        return div({
            className: 'app-block',
            key: 'sleevrApp'
        }, childComponents);
    }
}

App.propTypes = {};

App.defaultProps = {};

export default App;
