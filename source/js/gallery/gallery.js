var React = require('react');

var Gallery = React.createClass({
  render: function () {
    
    return React.createElement('section', {
        className: 'gallery-block',
        key: 'gallery'
    });
  }
});
module.exports = Gallery;
