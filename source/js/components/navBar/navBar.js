import React, { Component } from 'react';
import _ from 'lodash';
import NavLinks from './navLinks';

const { div, nav } = React.DOM;

class NavBar extends Component {

    constructor (props) {
        super(props);
        this.state = {
            navItems: [
                { link: '/', title: 'Home' },
                { link: '/design-arena', title: 'Design' },
                { link: '/gallery', title: 'Gallery' },
                { link: '/profile', title: 'Profile' }
            ]
        };
    }

    render () {

        const container = div({ className: 'container-fluid' }, [
            div({
                className: 'navbar-header',
                key: 'nav-header'
            }, div({
                    className: 'navbar-brand',
                    key: 'brand'
                }, 'Sleevr')
            ),
            React.createElement(NavLinks, _.assign({ key: 'nav-list' }, this.state))
        ]);

        let navProps = {
            key: 'navBar',
            className: 'navbar navbar-default navbar-fixed-top',
            role: 'navigation'
        };

        return nav(navProps, container);
    }

}

export default NavBar;
