import React from 'react';
import _ from 'lodash';
import NavLinks from './navLinks';

const { div, nav } = React.DOM;

class NavBar extends React.Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {

        const container = div({ className: 'container-fluid' }, [
            div({
                className: 'navbar-header',
                key: 'nav-header'
            }, div({
                    className: 'navbar-brand',
                    key: 'brand'
                }, 'KL')
            ),
            React.createElement(NavLinks, _.assign({ key: 'nav-list' }, this.props))
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
