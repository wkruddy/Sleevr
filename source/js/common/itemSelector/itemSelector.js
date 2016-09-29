import React from 'react';

const { select, option, button, div, h4 } = React.DOM;

class ItemSelector extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {

        const selectorOptions = this.props.selectorOptions.map((opt, i) =>
            option({ key: `itemOption-${this.propsSelectorTitle}-${i}` }, opt.title)
        );

        const actionButton = this.makeActionButton();

        return div({
            key: `itemSelectBox-${this.propsSelectorTitle}`,
            className: 'item-selector box'
        }, [
            h4({
                key: `itemSelectorHeader-${this.propsSelectorTitle}`,
                className: 'item-selector header-title'
            }, this.props.propsSelectorTitle),
            select({
                key: `itemSelector-${this.propsSelectorTitle}`,
                className: 'item-selector selector'
            }, [selectorOptions]),
            actionButton
        ]);
    }

    makeActionButton () {
        if (this.props.renderWithButton) {
            return button({
                key: `itemSelectorActionBtn-${this.propsSelectorTitle}`,
                className: 'item-selector action-btn'
            });
        } else {
            return [];
        }
    }
}

export default ItemSelector;
