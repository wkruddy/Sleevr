import React from 'react';

const { section, ul, li, div } = React.DOM;

class Sidebar extends React.Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        const sidebarItems = this.props.sidebarItems.map(item => {

            return li({
                key: item.key,
                className: 'sidebar-tool'
            }, item.component || item.title)
        }
        );

        const header = div({
            key: 'sidebar-header',
            className: 'sidebar-header'
        }, this.props.sidebarHeader);

        const sidebarList = ul({
            key: 'sidebar-list',
            classNamr: 'sidebar-list'
        }, sidebarItems);

        return section({
            className: 'sidebar-box',
            key: 'sidebar-box'
        }, [ header, sidebarList ]);
    }

}

export default Sidebar;
