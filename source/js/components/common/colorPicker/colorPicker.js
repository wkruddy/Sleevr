import React, { Component } from 'react';
import { Panel as ColorPickerPanel }, ColorPicker from 'rc-color-picker';

const { img, div, section } = React.DOM;

class ColorPicker extends Component {

    constructor (props) {
        super(props);
        this.state = {
            colorPickerComponent: props.pickerMode === 'HSL'
                                ? ColorPickerPanel
                                : ColorPicker
        };
    }

    render () {

        const actionButton = this.makeActionButton();

        return div({
            className: 'color-picker box',
            key: `colorPicker-${this.props.pickerTitle}`
        }, [
            h4({
                className: 'color-picker header-title',
                key: `colorPickerHeader-${this.props.pickerTitle}`
            }, this.props.pickerTitle),
            React.createElement(this.state.colorPickerComponent, {
                mode: this.props.pickerMode,
                onChange: this.props.pickerChangeFn }
            });,
            actionButton
        ]);
    }

    makeActionButton () {
        if (this.props.renderWithButton) {
            return button({
                className: 'color-picker action-btn',
                key: `colorPickerActionBtn-${this.props.pickerTitle}`,
                onClick: this.props.handleActionClick
            });
        } else {
            return [];
        }
    }
}

export default ColorPicker;
