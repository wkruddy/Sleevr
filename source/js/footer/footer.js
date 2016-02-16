var React = require('react');

var footer = React.createClass({
  render: function(){
    return React.createElement('footer', this.props.copyright);
  }
});
module.exports = footer;