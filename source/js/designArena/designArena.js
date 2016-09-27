import React from 'react';
import SidebarTools from './sidebarTools';
import DrawingBoard from './drawingBoard';

const section = React.DOM.section;

class DesignArena extends React.Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        const designBox = section({
            className: 'design-arena',
            key: 'designArenaBox'
        }, [SidebarTools, DrawingBoard]);

        return designBox;
    }

}

export default DesignArena;
