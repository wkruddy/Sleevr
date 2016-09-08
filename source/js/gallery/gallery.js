var React = require('react');

var gallery = React.createClass({
  render: function () {
    
    return React.createElement('section', {
        className: 'gallery-block',
        key: 'gallery'
    });
  }
});
module.exports = gallery;
