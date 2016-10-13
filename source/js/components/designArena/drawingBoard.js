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
            key: 'drawingBoardBox',
            onDragOver: (e) => e.preventDefault(),
            onDrop: (e) => this.onDragDrop(e),
        }, sleeveSet);

        return drawingBoardBox;
    }

    makeSleeves () {
        return this.props.sleevesInArena.map(sleeve =>
            this.craftSleeveComponents(sleeve));
    }

    craftSleeveComponents (sleeve) {

        const sleeveConfig = this.buildSleeveConfig(sleeve);

        const cablesPerRow = sleeveConfig.cables;
        const rowsPerSleeve = sleeveConfig.rows;

        let sleeveRowComponents = [];
        const uniqKey = this.getUniqKey();

        for (let i = 0; i < rowsPerSleeve; i++) {
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
                zIndex: `${this.currentLayerNum}`
            },
            'data-layer': `${this.currentLayerNum}`,
            draggable: true,
            onDragStart: (e) => this.onDragStart(e),
            key: `${sleeve.type}Sleeve-${uniqKey}`
        }, sleeveRowComponents);
    }

    buildSleeveConfig (sleeve) {
        const isCustom = sleeve.type === 'custom';

        let layout = sleeveHash[sleeve.type];

        if (isCustom) {
            layout.numCables = sleeve.customPinCount;
            layout.rows = sleeve.customRowCount;
        }

        // Algorithm to take the sleeves per row and the angle, then build the correct
        const cablesPerRow = this.getCablesPerRow(layout, sleeve.type);

        const rowsPerSleeve = this.getRowsPerSleeve(layout, sleeve.angle);
    }
    getCablesPerRow (layout, sleeveType, angle) {
        
        const cableMap = {
            default: layout.numCables / layout.rows,
            custom: layout.numCables,
            side: 1
        };

        return cableMap[angle] || cableMap[sleeveType] || cableMap['default'];
    }

    getRowsPerSleeve (layout, angle) {
        const angleMap = {
            default: layout.rows,
            curved: 2,
            side: 2,
            top: 1,
            bot: 1
        };

        return angleMap[angle] || angleMap['default'];
    }

    getUniqKey () {
        this.currentLayerNum++;
        return `${makefakeGUID()}-${this.currentLayerNum}`;
    }

    setXYCoordinatesForNext () {
        let sleeveLayerElems = document.querySelectorAll('.sleeve-box');
        sleeveLayerElems.reduce((previousMax, elem) => {
            elem.attributes['data-layer'];// GET THE HIGHEST INDEX
        }, 0);
    }

    onDragStart (e) {

        // var data = {
        //   name: 'foobar',
        //   age: 15
        // };

        // e.dataTransfer.setData('text', JSON.stringify(data));
        const elem = e.currentTarget;
        this.draggingState = {
            elem,
            initialOffsetY: elem.offsetTop,
            initialOffsetX: elem.offsetLeft
        };

    }

    onDragDrop (e) {
        const dropElem = e.currentTarget;

        this.draggingState.elem.style.top = `${dropElem.offsetTop - this.draggingState.initialOffsetY}px`;
        this.draggingState.elem.style.left = `${dropElem.offsetLeft - this.draggingState.initialOffsetX}px`;
        this.draggingState = {};
    }
}

export default DrawingBoard;
