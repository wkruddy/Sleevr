import React from 'react';
import GalleryImageList from '../gallery/galleryImageList';

class Masthead extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            landingPageGalleryImageCount: 12
        };
    }

    render () {
        return React.createElement(GalleryImageList, this.state);
    }

}

export default Masthead;
