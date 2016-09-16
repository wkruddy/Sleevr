var React = require('react');

var DesignArena = React.createClass({
  render: function(){
    var designBox = React.createElement('section', {
        className: 'design-arena',
        key: 'designArenaBox'
    }, []);

    return designBox;
  }
});
module.exports = DesignArena;