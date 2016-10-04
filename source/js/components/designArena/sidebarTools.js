import React, { Component } from 'react';
import _ from 'lodash';
import Sidebar from '../common/sidebar/sidebar';

const { div } = React.DOM;

class SidebarTools extends Component {

    constructor (props) {
        super(props);
    }

    render () {

        const sidebar = React.createElement(Sidebar,
                        _.assign({ key: 'sidebarComponent' },
                        this.props));
        const sidebarToolBox = div({
            className: 'sidebar-tools col-lg-3 col-md-3',
            key: 'sidebarToolBox'
        }, [sidebar]);

        return sidebarToolBox;
    }

}

export default SidebarTools;
