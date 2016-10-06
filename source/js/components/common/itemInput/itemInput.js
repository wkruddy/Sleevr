import React, { Component } from 'react';

const { input, option, button, div, h4 } = React.DOM;

class ItemInput extends Component {

    constructor (props) {
        super(props);
    }

    render () {

        const actionButton = this.makeActionButton();

        return div({
            className: 'item-input box',
            key: `itemInputBox-${this.props.inputTitle}`
        }, [
            h4({
                className: 'item-input header-title',
                key: `itemInputHeader-${this.props.inputTitle}`
            }, this.props.inputTitle),
            input({
                className: 'item-input input',
                key: `itemInput-${this.props.inputTitle}`,
                placeholder: this.props.placeholder,
                onChange: this.props.handleInputChange
            }),
            actionButton
        ]);
    }

    makeActionButton () {
        if (this.props.renderWithButton) {
            return button({
                className: 'item-input action-btn',
                key: `itemInputActionBtn-${this.props.inputTitle}`,
                onClick: this.props.handleActionClick
            });
        } else {
            return [];
        }
    }
}

export default ItemInput;
