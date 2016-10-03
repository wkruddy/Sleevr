import React, { Component } from 'react';

const { section } = React.DOM;

class DrawingBoard extends Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        const sleeveSet = this.makeSleeves();

        const drawingBoardBox = section({
            className: 'drawing-board col-lg-9 col-md-9',
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
