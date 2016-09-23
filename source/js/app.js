// Initial react controller view

'use strict';

import React from 'react';
import _ from 'lodash';

import ReactDOM from 'react-dom';
import NavBar from './navBar/navBar';
import StartPage from './startPage/startPage';
import PageFooter from './pageFooter/pageFooter';
import DesignArena from './designArena/designArena';
import Gallery from './gallery/gallery';
import Profile from './profile/profile';

const mainComponents = [
    NavBar,
    StartPage,
    PageFooter,
    DesignArena,
    Gallery,
    Profile
];

const { div } = React.DOM;

class Sleevr extends React.Component {
    constructor (props) {
        // ES2015 version of getInitialState
        super(props);
        this.state = {};
    }

    render () {

        let childComponents = mainComponents.map(component => {
            let props = _.assign({ key: `${component.name}Component` }, this.props);
            return React.createElement(component, props);
        });

        return div({
            className: 'app-block',
            key: 'main-app'
        }, childComponents);
    }

};

Sleevr.propTypes = {
    navItems: React.PropTypes.array,
    landingPageGalleryImageCount: React.PropTypes.number
};

Sleevr.defaultProps = {
    landingPageGalleryImageCount: 12,
    navItems: [
        { link: '/home', title: 'Home' },
        { link: '/design-arena', title: 'Design' },
        { link: '/gallery', title: 'Gallery' },
        { link: '/profile', title: 'Profile' }
    ]
};

(() => ReactDOM.render(
    React.createElement(Sleevr, Sleevr.defaultProps),
    document.getElementById('sleevr'))
)();
