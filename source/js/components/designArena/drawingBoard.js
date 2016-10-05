import React, { Component } from 'react';
import constants from '../../constants/designArena.constants';

const { section, div } = React.DOM;
const { sleeveHash, makefakeGUID } = constants;

class DrawingBoard extends Component {

    constructor (props) {
        super(props);
        this.state = {};
        this.currentLayerNum = 1;
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
        const cablesPerRow = layout.numCables / layout.rows;
        let sleeveRowComponents = [];
        const uniqKey = this.getUniqKey();

        for (let i = 0; i < layout.rows; i++) {
            let cables = [];
            for (let i = 0; i < cablesPerRow; i++) {
                cables.push(div({
                    className: `sleeve-cable ${sleeve.angle}`,
                    key: `${sleeve.type}Cable-${i}-${uniqKey}`
                }));
            }
            const cableRow = div({
                className: `sleeve-cable-row ${sleeve.angle}`,
                key: `${sleeve.type}Cable-${i}-${uniqKey}`
            }, cables);
            sleeveRowComponents.push(cableRow);
        }

        return div({
            className: `sleeve-box ${sleeve.angle}`,
            style: {
                'zIndex': `${this.currentLayerNum}`
            },
            'data-layer': `${this.currentLayerNum}`,
            key: `${sleeve.type}Sleeve-${uniqKey}`
        }, sleeveRowComponents);
    }

    getUniqKey () {
        this.currentLayerNum++;
        return `${makefakeGUID()}-${this.currentLayerNum}`;
    }

    setXYCoordinatesForNext () {
        let sleeveLayerElems = document.querySelectorAll('.sleeve-box');
        sleeveLayerElems.reduce((previousMax, elem) => {
            elem.attributes['data-layer']// GET THE HIGHEST INDEX
        }, 0);
    }
}

export default DrawingBoard;
