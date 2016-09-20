var React = require('react'),
    section = React.DOM.section,
    DrawingBoard;

DrawingBoard = React.createClass({
  render: function() {
    var drawingBoardBox = section({
        className: 'drawing-board',
        key: 'drawingBoardBox'
    }, []);

    return drawingBoardBox;
  }
  
});
module.exports = DrawingBoard;
