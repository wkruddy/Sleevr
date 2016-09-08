var React = require('react');

var galleryImageList = React.createClass({
    render: function () {

        var count = this.props.landingPageGalleryImageCount;

        var listItems = [];
        while (count > 0) {
            var image = React.createElement('img', {
                className: 'img-responsive',
                key: 'gallery-image' + count,
                src: '/assets/images/sm-sleeve-image-' + count + '.png'
            });

            var listItem = React.createElement('div', {
                className: 'col-xs-2 col-md-2 sleeve-image-' + count,
                key: 'gallery-list-item' + count,
                title: 'Image' + count
            }, image);

            listItems.push(listItem);
            count--;
        }

        var listItemBox = React.createElement('div', {
            className: 'col-lg-12',
            key: 'list-item-box'
        }, listItems);

        var listContainer = React.createElement('div', {
            className: 'row sleeve-gallery-row',
            key: 'sleeve-gallery-row'
        }, listItemBox);

        return React.createElement('section', {
            className: 'gallery-image-list-block',
            key: 'gallery-image-list'
        }, listContainer);
    }
});

module.exports = galleryImageList;
