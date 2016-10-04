import React, { Component } from 'react';
import _ from 'lodash';
import SidebarTools from './sidebarTools';
import DrawingBoard from './drawingBoard';
import ItemSelector from '../common/itemSelector/itemSelector';

import constants from '../../constants/designArena.constants';

const { section, div, h2, button } = React.DOM;
const { displayValues, sleeveOptions, angleOptions, sleeveHash } = constants;

class DesignArena extends Component {

    constructor (props) {
        super(props);
        this.state = {
            sidebarHeader: 'Tools',
            sleevesInArena: [],
            sidebarItems: [
                {
                    key: 'typePicker',
                    title: 'Cable Pin Layout',
                    component: React.createElement(ItemSelector, {
                        key: 'itemSelector-pinLayout',
                        renderWithButton: false,
                        selectorOptions: sleeveOptions,
                        onChange: (evt) => {
                            this.setState({ selectedSleeveValue: evt.target.value });
                        }
                    })
                },
                {
                    key: 'anglePicker',
                    title: 'Viewing Angle',
                    component: React.createElement(ItemSelector, {
                        key: 'itemSelector-viewAngle',
                        selectorOptions: angleOptions,
                        onChange: (evt) => {
                            this.setState({ selectedAngleValue: evt.target.value });
                        }
                    })
                },
                {
                    key: 'saveDesign',
                    title: 'Save',
                    className: 'btn btn-success',
                    component: button({
                        key: 'saveDesignButton',
                        onClick: () => this.addSleeve()
                    }, '+')
                }
            ],
            sleeveOptions,
            angleOptions
        };
    }

    componentWillMount () {

    }

    render () {
        const designBox = section({
            className: 'design-arena container main-content',
            key: 'designArenaBox'
        }, [
                h2({
                    className: 'row container-header',
                    key: 'containerHeader'
                }, displayValues.header),
                div({ className: 'row', key: 'designArena' }, [
                    React.createElement(SidebarTools,
                        _.assign({ key: 'sidebarTools' }, this.state)),
                    React.createElement(DrawingBoard,
                        _.assign({ key: 'drawingBoard' }, this.state))
                    ]
                )
            ]
        );

        return designBox;
    }

    addSleeve () {

        const sleeve = {
            type: this.state.selectedSleeveValue,
            angle: this.state.selectedAngleValue
        };
        this.state.sleevesInArena.push(sleeve);
    }

}

export default DesignArena;
