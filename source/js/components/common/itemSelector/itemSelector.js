import React, { Component } from 'react';

const { select, option, button, div, h4 } = React.DOM;

class ItemSelector extends Component {

    constructor (props) {
        super(props);
    }

    render () {

        const selectorOptions = this.props.selectorOptions.map((opt, i) =>
            option({
                key: `itemOption-${this.props.selectorTitle}-${i}`,
                value: opt.value
            }, opt.title)
        );

        const actionButton = this.makeActionButton();

        return div({
            className: 'item-selector box',
            key: `itemSelectBox-${this.props.selectorTitle}`
        }, [
            h4({
                className: 'item-selector header-title',
                key: `itemSelectorHeader-${this.props.selectorTitle}`
            }, this.props.selectorTitle),
            select({
                className: 'item-selector selector',
                key: `itemSelector-${this.props.selectorTitle}`,
                defaultValue: this.props.defaultValue,
                onChange: this.props.handleSelectorChange
            }, [selectorOptions]),
            actionButton
        ]);
    }

    makeActionButton () {
        if (this.props.renderWithButton) {
            return button({
                className: 'item-selector action-btn',
                key: `itemSelectorActionBtn-${this.props.selectorTitle}`,
                onClick: this.props.handleActionClick
            });
        } else {
            return [];
        }
    }
}

export default ItemSelector;
