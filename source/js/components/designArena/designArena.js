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
        this.currentSleeves = [];

        this.state = {
            sleeveOptions,
            angleOptions,
            sidebarHeader: 'Tools',
            sleevesInArena: [],
            sidebarItems: [
                {
                    key: 'typePicker',
                    component: this.makePinSelector()
                },
                {
                    key: 'anglePicker',
                    component: this.makeAngleSelector()
                },
                {
                    key: 'customPicker',
                    component: this.makePinCustomizer()
                },
                {
                    key: 'saveDesign',
                    component: button({
                        className: 'btn btn-success',
                        selectorTitle: 'Save',
                        key: 'saveDesignButton',
                        onClick: () => this.addSleeve()
                    }, '+')
                }
            ],
            selectedSleeveValue: sleeveOptions[0].value,
            selectedAngleValue: angleOptions[0].value,
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
        this.currentSleeves.push(sleeve);

        this.setState({ sleevesInArena: this.currentSleeves });
    }

    makePinSelector () {
       return React.createElement(ItemSelector, {
                key: 'itemSelector-pinLayout',
                selectorTitle: 'Cable Pin Layout',
                renderWithButton: false,
                selectorOptions: sleeveOptions,
                defaultValue: sleeveOptions[0].value,
                handleSelectorChange: (evt) => {
                    this.setState({ selectedSleeveValue: evt.target.value });
                }
            });
    }

    makeAngleSelector () {
        return React.createElement(ItemSelector, {
                key: 'itemSelector-viewAngle',
                selectorTitle: 'Viewing Angle',
                renderWithButton: false,
                selectorOptions: angleOptions,
                defaultValue: angleOptions[0].value,
                handleSelectorChange: (evt) => {
                    this.setState({ selectedAngleValue: evt.target.value });
                }
            });
    }

    makePinCustomizer () {
        return div({
                key: 'itemSelector-customLayout',
            }, [
                h4(null, 'Custom Layout'),
                React.createElement(ItemSelector, {
                    key: 'itemSelector-customLayout-pins',
                    selectorTitle: 'Number of Pins',
                    renderWithButton: false,
                    selectorOptions: angleOptions,
                    handleSelectorChange: (evt) => {
                        this.setState({ selectedAngleValue: evt.target.value });
                    }
                }),
                React.createElement(ItemSelector, {
                    key: 'itemSelector-customLayout-rows',
                    selectorTitle: 'Number of Rows',
                    renderWithButton: false,
                    handleSelectorChange: (evt) => {
                        this.setState({ selectedAngleValue: evt.target.value });
                    }
                })
            ]
        )
    }
}

export default DesignArena;
