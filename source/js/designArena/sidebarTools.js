import React from 'react';
import _ from 'lodash';
import Sidebar from '../common/sidebar/sidebar';

const section = React.DOM.section;

class SidebarTools extends React.Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        const sidebar = React.createElement(Sidebar,
                        _.assign({ key: 'sidebarComponent' },
                        this.props));
        const sidebarToolBox = section({
            className: 'sidebar-tools',
            key: 'sidebarToolBox'
        }, []);

        return sidebarToolBox;
    }

}

export default SidebarTools;
