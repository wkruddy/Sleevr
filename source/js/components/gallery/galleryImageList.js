import React, { Component } from 'react';

const { img, div, section } = React.DOM;

class GalleryImageList extends Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {

        let count = this.props.landingPageGalleryImageCount;

        let listItems = [];
        while (count > 0) {
            const image = img({
                className: 'img-responsive',
                key: `galleryImage${count}`,
                src: `/assets/images/sm-sleeve-image-${count}.png`
            });

            const listItem = div({
                className: `col-xs-2 col-md-2 sleeve-image-${count}`,
                key: `galleryListItem${count}`,
                title: `Image${count}`
            }, image);

            listItems.push(listItem);
            count--;
        }

        return section({
            className: 'gallery-image-list-block',
            key: 'galleryImageList'
        }, div({
                className: 'row sleeve-gallery-row',
                key: 'sleeveGalleryRow'
            }, div({
                    className: 'col-lg-12',
                    key: 'listItemBox'
                }, listItems)
            )
        );
    }
}

export default GalleryImageList;
