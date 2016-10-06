import React, { Component } from 'react';
import _ from 'lodash';
import ItemInput from '../common/itemInput/itemInput';

const { div, h4 } = React.DOM;

class CustomLayoutSelector extends Component {

    constructor (props) {
        super(props);
        this.state = {};
        this.debouncedInputHandler = _.debounce(this.props.handleInputChange, 250);
    }

    render () {
        if (this.props.showCustomizer) {
            return div({
                    key: 'itemInput-customLayoutSelectorBox',
                }, [
                    h4({ key: 'customLayoutHeader' }, 'Custom Layout'),
                    React.createElement(ItemInput, {
                        key: 'itemInput-customLayout-pins',
                        inputTitle: 'Number of Pins',
                        placeholder: 'Add number of pins',
                        renderWithButton: false,
                        handleInputChange: (e) => {
                            // Due to the synthetic event wrapping we need to force the event
                            // to persist or it gets nulled out
                            e.persist();
                            this.debouncedInputHandler('customPinCount', e.target.value);
                        }
                    }),
                    React.createElement(ItemInput, {
                        key: 'itemInput-customLayout-rows',
                        inputTitle: 'Number of Rows',
                        placeholder: 'Add number of rows',
                        renderWithButton: false,
                        handleInputChange: (e) => {
                            // Due to the synthetic event wrapping we need to force the event
                            // to persist or it gets nulled out
                            e.persist();
                            this.debouncedInputHandler('customRowCount', e.target.value);
                        }
                    })
                ]
            );
        } else {
            return null;
        }
    }
}

export default CustomLayoutSelector;
