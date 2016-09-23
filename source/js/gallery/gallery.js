import React from 'react';

class Gallery extends React.Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {

        return React.createElement('section', {
            className: 'gallery-block',
            key: 'gallery'
        });
    }

}

export default Gallery;
