import React from 'react';

const { img, div, section } = React.DOM;

class GalleryImageList extends React.Component {

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
                key: `gallery-image${count}`,
                src: `/assets/images/sm-sleeve-image-${count}.png`
            });

            const listItem = div({
                className: `col-xs-2 col-md-2 sleeve-image-${count}`,
                key: `gallery-list-item${count}`,
                title: `Image${count}`
            }, image);

            listItems.push(listItem);
            count--;
        }

        return section({
            className: 'gallery-image-list-block',
            key: 'gallery-image-list'
        }, div({
                className: 'row sleeve-gallery-row',
                key: 'sleeve-gallery-row'
            }, div({
                    className: 'col-lg-12',
                    key: 'list-item-box'
                }, listItems)
            )
        );
    }
}

export default GalleryImageList;
