var React = require('react');

var PageFooter = React.createClass({
  render: function(){
    return React.createElement('footer', this.props.copyright);
  }
});
module.exports = PageFooter;