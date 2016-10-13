import React, { Component } from 'react';
import { Panel as ColorPickerPanel } from 'rc-color-picker';
import _ from 'lodash';
import SidebarTools from './sidebarTools';
import DrawingBoard from './drawingBoard';
import ItemSelector from '../common/itemSelector/itemSelector';
import CustomLayoutSelector from './customLayoutSelector';

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
            showCustomizer: false,
            selectedSleeveValue: sleeveOptions[0].value,
            selectedAngleValue: angleOptions[0].value,
            handleCustomizerInputChange: this.handleCustomizerInputChange,
            customPinCount: 0,
            customRowCount: 0
        };
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
                div({ className: 'row', key: 'designArena' },
                    [
                        React.createElement(SidebarTools,
                            _.assign({
                                key: 'sidebarTools',
                                sidebarItems: this.getSidebarItems()
                            }, this.state)
                        ),
                        React.createElement(DrawingBoard,
                            _.assign({ key: 'drawingBoard' }, this.state))
                    ]
                )
            ]
        );

        return designBox;
    }

    getSidebarItems () {
        return [
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
                key: 'colorPicker',
                component: this.makeColorPicker()
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
        ];
    }

    addSleeve () {

        const sleeve = {
            type: this.state.selectedSleeveValue,
            angle: this.state.selectedAngleValue,
            customPinCount: this.state.customPinCount,
            customRowCount: this.state.customRowCount
        };
        this.currentSleeves.push(sleeve);

        this.setState({ sleevesInArena: this.currentSleeves });
    }

    makePinSelector () {
        return React.createElement(ItemSelector, {
            selectorTitle: 'Cable Pin Layout',
            renderWithButton: false,
            selectorOptions: sleeveOptions,
            defaultValue: sleeveOptions[0].value,
            handleSelectorChange: this.handleSelectorChange.bind(this)
        });
    }

    makeAngleSelector () {
        const handleSelectorChange = (e) => {
            this.setState({ selectedAngleValue: e.target.value });
        };

        return React.createElement(ItemSelector, {
            selectorTitle: 'Viewing Angle',
            renderWithButton: false,
            selectorOptions: angleOptions,
            defaultValue: angleOptions[0].value,
            handleSelectorChange
        });
    }

    makePinCustomizer () {
        return React.createElement(CustomLayoutSelector, {
            showCustomizer: this.state.showCustomizer,
            handleCustomizerInputChange: this.handleCustomizerInputChange.bind(this)
        });
    }

    makeColorPicker () {
        return React.createElement(ColorPickerPanel, {
            mode: 'HSL',
            onChange: (val) => {
                this.setState({ activeColorValues: val });
            }
        });
    }

    handleCustomizerInputChange (key, value) {
        this.setState({ [key]: Math.floor(value) });
    }

    handleSelectorChange (e) {
        const pinLayout = e.target.value;

        this.setState({
            showCustomizer: pinLayout === 'custom',
            selectedSleeveValue: pinLayout,
            customPinCount: 0,
            customRowCount: 0
        });
    };

}

export default DesignArena;
