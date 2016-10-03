import React, { Component } from 'react';
import _ from 'lodash';
import NavLinks from './navLinks';

const { div, nav } = React.DOM;

class NavBar extends Component {

    constructor (props) {
        super(props);
        this.state = {
            navItems: [
                { link: '/', title: 'Home', activeOnIndex: true},
                { link: '/design-arena', title: 'Design', activeOnIndex: false},
                { link: '/gallery', title: 'Gallery', activeOnIndex: false},
                { link: '/profile', title: 'Profile', activeOnIndex: false }
            ]
        };
    }

    render () {

        const container = div({ className: 'container-fluid' }, [
            div({
                className: 'navbar-header',
                key: 'navHeader'
            }, div({
                    className: 'navbar-brand',
                    key: 'brand'
                }, 'Sleevr')
            ),
            React.createElement(NavLinks, _.assign({ key: 'navList' }, this.state))
        ]);

        let navProps = {
            className: 'navbar navbar-default navbar-fixed-top',
            key: 'navBar',
            role: 'navigation'
        };

        return nav(navProps, container);
    }

}

export default NavBar;
