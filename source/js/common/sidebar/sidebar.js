var React = require('react'),
    section = React.DOM.section,
    Sidebar;

Sidebar = React.createClass({
  render: function() {
    var sidebarToolBox = section({
        className: 'sidebar-tools',
        key: 'sidebarToolBox'
    }, []);

    return sidebarToolBox;
  }
  
});
module.exports = Sidebar;
