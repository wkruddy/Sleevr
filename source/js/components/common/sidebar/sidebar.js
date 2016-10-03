import React, { Component } from 'react';

const { section, ul, li, div } = React.DOM;

class Sidebar extends Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        const sidebarItems = this.props.sidebarItems.map(item =>
            li({
                className: 'sidebar-tool',
                key: item.key
            }, item.component || item.title)
        );

        const header = div({
            className: 'sidebar-header',
            key: 'sidebarHeader',
        }, this.props.sidebarHeader);

        const sidebarList = ul({
            classNamr: 'sidebar-list',
            key: 'sidebarList'
        }, sidebarItems);

        return section({
            className: 'sidebar-box',
            key: 'sidebarBox'
        }, [header, sidebarList]);
    }

}

export default Sidebar;
