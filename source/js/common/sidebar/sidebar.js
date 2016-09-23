import React from 'react';

const section = React.DOM.section;

class Sidebar extends React.Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        const sidebarToolBox = section({
            className: 'sidebar-tools',
            key: 'sidebarToolBox'
        }, []);

        return sidebarToolBox;
    }

}

export default Sidebar;
