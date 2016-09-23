import React from 'react';

const section = React.DOM.section;

class DrawingBoard extends React.Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        const drawingBoardBox = section({
            className: 'drawing-board',
            key: 'drawingBoardBox'
        }, []);

        return drawingBoardBox;
    }

}

export default DrawingBoard;
