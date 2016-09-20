var React = require('react'),
    section = React.DOM.section,
    DesignArena;

DesignArena = React.createClass({
  render: function() {
    var designBox = section({
        className: 'design-arena',
        key: 'designArenaBox'
    }, []);

    return designBox;
  }
  
});
module.exports = DesignArena;
