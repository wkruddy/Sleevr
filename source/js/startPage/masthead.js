var React = require('react'),
    galleryImageList = require('./gallery/galleryImageList');

var masthead =  React.createClass({
  render: function () {
    
    return React.createElement(galleryImageList, {});
  }
});
module.exports = masthead;
