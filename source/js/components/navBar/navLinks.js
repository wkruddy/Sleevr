import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

const ReactLink = React.createFactory(Link);

const { li, ul } = React.DOM;

const activeStyle = {
    borderBottom: '5px solid rgb(66, 249, 95)'
};

class NavLinks extends Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        const childLinkComponents = this.props.navItems.map(navItem =>

            li({ className: 'nav-link', key: navItem.title },
                ReactLink({
                    to: navItem.link,
                    activeStyle,
                    onlyActiveOnIndex: navItem.activeOnIndex
                }, navItem.title)
            )
        );

        return ul({
            className: 'nav navbar-nav navbar-right list-unstyled',
            key: 'navLinks'
        }, childLinkComponents);
    }

}

export default NavLinks;
