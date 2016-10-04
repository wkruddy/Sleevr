import React, { Component } from 'react';

const { section, div } = React.DOM;
const { sleeveHash } = constants;

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

    craftSleeveComponents (sleeve) {
        const layout = sleeveHash[sleeve.type];
        const cablesPerRow = layout.numCables/ layout.rows;
        let sleeveRowComponents = [];

        for (let i = 0; i < layout.rows; i++) {
            let cables = [];
            for (let i = 0; i < cablesPerRow; i++) {
                rowItems.push(div({
                    key: `${sleeve.type}Cable-${i}`
                }));
            }
            sleeve.push(cables)
        }

        return div({
            key: `sleeve`
        }, sleeveRowComponents);
    }
}

export default DrawingBoard;
