import React, { Component } from 'react';

const { section } = React.DOM;

class Gallery extends Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {

        return section({
            className: 'gallery-block',
            key: 'gallery'
        });
    }

}

export default Gallery;
