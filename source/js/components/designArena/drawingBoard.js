import React, { Component } from 'react';
import _ from 'lodash';
import constants from '../../constants/designArena.constants';

const { section, div } = React.DOM;
const { makefakeGUID } = constants;

class DrawingBoard extends Component {

    constructor (props) {
        super(props);
        this.state = {};
        this.currentLayerNum = 1;
        this.lodash = _;
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

        const cableConfig =  _.find(this.props.sleeveOptions, (opt) =>
                                            opt.value === sleeve.type);

        const angleConfig = _.find(this.props.angleOptions, (opt) =>
                                    opt.value === sleeve.angle);

        let numCables = isCustom ? sleeve.customPinCount : cableConfig.numCables;

        // If the default rows are less than what the angle says we shoud display, use that
        // Otherwise, single-row cables like molex will render inconsistently
        const defaultRowsShouldOverride = cableConfig.defaultRows < angleConfig.rows;

        let rows = isCustom
                ? sleeve.customRowCount
                : defaultRowsShouldOverride
                ? cableConfig.defaultRows
                : angleConfig.rows;


        let cables = this.getNumCables(numCables, rows, sleeve.angle, cableConfig.defaultRows);

        return { cables, rows };

    }

    getNumCables (numCables, rows, angle, defaultRows) {

        const angleRowMap = {
            side: 1, // Side views will default to 2, for 2 cable/2 rows
            curved: 1, // Same as above, for now
            top: numCables / defaultRows,
            bot: numCables / defaultRows,
            default: numCables / rows
        };

        return angleRowMap[angle] || angleRowMap.default;
    }

    // buildSleeveConfig (sleeve) {

    //     const isCustom = sleeve.type === 'custom';

    //     const cableConfig =  _.find(this.props.sleeveOptions, (opt) =>
    //                                         opt.value === sleeve.type);

    //     const angleConfig = _.find(this.props.angleOptions, (opt) =>
    //                                 opt.value === sleeve.angle);

    //     let numCables =  cableConfig.numCables;

    //     // If the default rows are less than what the angle says we shoud display, use that
    //     // Otherwise, single-row cables like molex will render inconsistently
    //     const defaultRowsShouldOverride = cableConfig.defaultRows < angleConfig.rows;

    //     let rows = defaultRowsShouldOverride
    //             ? cableConfig.defaultRows
    //             : angleConfig.rows;

    //     const cableOpts = this.mutateBasedOnCustomValues(rows, numCables, sleeve, cableConfig);
    //     let cables = this.getNumCables(cableOpts);

    //     // return { cables, rows };
    //     return cables;

    // }

    // mutateBasedOnCustomValues (rows, numCables, sleeve, cableConfig) {
    //     const angleRowMap = { // Do the division per row, but only display 1 row
    //         top: 1,
    //         bot: 1,
    //         default: sleeve.customRowCount
    //     };

    //     if (sleeve.type === 'custom') {
    //         numCables = sleeve.customPinCount
    //         rows = angleRowMap[sleeve.angle] || angleRowMap.default
    //     }

    //     return { rows, numCables, angle: sleeve.angle, cableConfig };
    // }

    // getNumCables (cableOpts) {
    //     let { numCables: cables, rows, angle, cableConfig } = cableOpts;

    //     const angleCableMap = {
    //         side: 1, // Side views will default to 2, for 2 cable/2 rows
    //         curved: 1, // Same as above, for now
    //         top: cables / cableConfig.defaultRows
    //         default: cables / rows
    //     };
    //     cables =  angleCableMap[angle] || angleCableMap.default;

    //     return {
    //         rows,
    //         cables
    //     }
    // }

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
        const top = `${dropElem.offsetTop - this.draggingState.initialOffsetY}px`;
        const left = `${dropElem.offsetLeft - this.draggingState.initialOffsetX}px`;
        this.draggingState.elem.style.top = top;
        this.draggingState.elem.style.left = left;
        this.draggingState = {};
    }
}

export default DrawingBoard;
