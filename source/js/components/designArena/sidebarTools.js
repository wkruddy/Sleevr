import React, { Component } from 'react';
import _ from 'lodash';
import Sidebar from '../common/sidebar/sidebar';
import ItemSelector from '../common/itemSelector/itemSelector';
import constants from '../../constants/designArena.constants';

const { div, button } = React.DOM;
const { sleeveOptions, angleOptions } = constants;

class SidebarTools extends Component {

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
                        selectorOptions: sleeveOptions,
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
                        selectorOptions: angleOptions,
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
            sleeveOptions,
            angleOptions
        };
    }

    render () {

        const sidebar = React.createElement(Sidebar,
                        _.assign({ key: 'sidebarComponent' },
                        this.state));
        const sidebarToolBox = div({
            className: 'sidebar-tools col-lg-3 col-md-3',
            key: 'sidebarToolBox'
        }, [sidebar]);

        return sidebarToolBox;
    }

}

export default SidebarTools;
