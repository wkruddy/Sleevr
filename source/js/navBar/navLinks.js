import React from 'react';
import _ from 'lodash';

const { a, li, ul } = React.DOM;

class NavLinks extends React.Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        const childLinkComponents = this.props.navItems.map(navItem =>

            li({ key: navItem.title },
                a({
                    key: `${navItem.title}Link`,
                    href: navItem.link
                }, navItem.title)
            )
        );

        return ul({
            key: 'navLinks',
            className: 'nav navbar-nav navbar-right list-unstyled',
        }, childLinkComponents);
    }

}

export default NavLinks;
