var React = require('react'),
    GalleryImageList = require('../gallery/galleryImageList');

var Masthead = React.createClass({
  render: function (props) {
    
    return React.createElement(GalleryImageList, this.props);
  }
});
module.exports = Masthead;
