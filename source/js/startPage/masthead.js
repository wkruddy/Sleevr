import React from 'react';
import GalleryImageList from '../gallery/galleryImageList';

class Masthead extends React.Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return React.createElement(GalleryImageList, this.props);
    }

}

export default Masthead;
