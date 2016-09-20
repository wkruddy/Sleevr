var React = require('react'),
    _ = require('lodash'),
    section = React.DOM.section,
    Sidebar = require('../common/sidebar/sidebar'),
    SidebarTools;

SidebarTools = React.createClass({
  render: function() {
    var sidebar = React.createElement(Sidebar, _.assign({ key: 'sidebarComponent' }, this.props));
    var sidebarToolBox = section({
        className: 'sidebar-tools',
        key: 'sidebarToolBox'
    }, []);

    return sidebarToolBox;
  }
  
});
module.exports = SidebarTools;
