import React from 'react';

const { section } = React.DOM;

class DrawingBoard extends React.Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        const sleeveSet = this.makeSleeves();

        const drawingBoardBox = section({
            className: 'drawing-board',
            key: 'drawingBoardBox'
        }, sleeveSet);

        return drawingBoardBox;
    }

    makeSleeves () {
        return this.props.sleevesInArena.map(sleeve =>
            this.craftSleeveComponents(sleeve));
    }

    craftSleeveComponents () {
        return React.createElement('div', {});
    }
}

export default DrawingBoard;
