var React = require('react'),
    div = React.DOM.div,
    nav = React.DOM.nav,
    _ = require('lodash'),
    NavLinks = require('./navLinks'),
    NavBar;

NavBar = React.createClass({
  render: function(){

    var container = div({ className: 'container-fluid' },[
      div({ className: 'navbar-header', key: 'nav-header' },
        [div({ className: 'navbar-brand', key: 'brand' }, 'KL')]
      ),
      React.createElement(NavLinks, _.assign({key: 'nav-list'}, this.props))
    ]);
    var navProps = {
      key: 'navBar',
      className: 'navbar navbar-default navbar-fixed-top',
      role: 'navigation'
    };
    return nav(navProps, container);
  }
});

module.exports = NavBar;