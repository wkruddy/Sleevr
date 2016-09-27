import React from 'react';
import _ from 'lodash';
import Sidebar from '../common/sidebar/sidebar';

const div = React.DOM.div;

class SidebarTools extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            sidebarHeader: 'Tools',
            sidebarItems: [
                {
                    key: 'tool1',
                    title: 'Tool1'
                },
                {
                    key: 'tool2',
                    title: 'Tool2'
                }
            ]
        };
    }

    render () {
        const sidebar = React.createElement(Sidebar,
                        _.assign({ key: 'sidebarComponent' },
                        this.state));
        const sidebarToolBox = div({
            className: 'sidebar-tools',
            key: 'sidebarToolBox'
        }, [sidebar]);

        return sidebarToolBox;
    }

}

export default SidebarTools;
