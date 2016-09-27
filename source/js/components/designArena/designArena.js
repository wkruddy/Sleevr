import React from 'react';
import SidebarTools from './sidebarTools';
import DrawingBoard from './drawingBoard';

const { section } = React.DOM;

class DesignArena extends React.Component {

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
            className: 'design-arena',
            key: 'designArenaBox'
        }, [
            React.createElement(SidebarTools,
                _.assign({ key: 'sidebarTools' }, this.state)),
            React.createElement(DrawingBoard,
                _.assign({ key: 'drawingBoard' }, this.state))
        ]);

        return designBox;
    }

}

export default DesignArena;
