import React from 'react';
import _ from 'lodash';
import Sidebar from '../common/sidebar/sidebar';
import ItemSelector from '../common/itemSelector/itemSelector';

const { div, button } = React.DOM;

class SidebarTools extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            sidebarHeader: 'Tools',
            sidebarItems: [
                {
                    key: 'typePicker',
                    title: 'Cable Pin Layout',
                    component: React.createElement(ItemSelector, {
                        key: 'itemSelector-pinLayout',
                        renderWithButton: false,
                        onChange: (val) => {
                            console.log(val);
                            // set the selected value to the raw node?
                            this.state.selectedSleeveValue;
                        }
                    })
                },
                {
                    key: 'anglePicker',
                    title: 'Viewing Angle',
                    component: React.createElement(ItemSelector, {
                        key: 'itemSelector-viewAngle',
                        onChange: (val) => {
                            console.log(val);
                            // set the selected value to the raw node?
                            this.state.selectedAngleValue;
                        }
                    })
                },
                {
                    key: 'saveDesign',
                    title: 'Save',
                    className: 'btn btn-success',
                    component: button({
                        key: 'saveDesignButton',
                        onClick: () => {
                            this.props.addSleeve(
                                this.state.selectedSleeveValue,
                                this.state.selectedAngleValue
                            );
                        }
                    })
                }
            ],
            sleeveOptions: [
                {
                    title: '24 Pin Motherboard',
                    value: '24-pin-mobo'

                },
                {
                    title: '12 Pin CPU',
                    value: '12-pin-cpu'
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
