import React, { Component } from 'react';
import _ from 'lodash';
import SidebarTools from './sidebarTools';
import DrawingBoard from './drawingBoard';

import constants from '../../constants/designArena.constants';

const { section, div, h2 } = React.DOM;
const { displayValues } = constants;

class DesignArena extends Component {

    constructor (props) {
        super(props);
        this.state = {
            sleevesInArena: [],
            addSleeve: (sleeve) => {
                console.log(sleeve);
                this.state.sleevesInArena.push(sleeve);
            }
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

}

export default DesignArena;
