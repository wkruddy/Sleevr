import React from 'react';

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
        }, []);

        return designBox;
    }

}

export default DesignArena;
