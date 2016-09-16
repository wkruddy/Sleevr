var React = require('react');
var NavLinks = require('./navLinks');
var _ = require('lodash');

var NavBar = React.createClass({
  render: function(){

    var container = React.createElement('div', {className: 'container-fluid'},[
      React.createElement('div', {className: 'navbar-header', key: 'nav-header'},
        [React.createElement('div', {className: 'navbar-brand', key: 'brand'}, 'KL')]
      ),
      React.createElement(NavLinks, _.extend({key: 'nav-list'}, this.props))
    ]);
    var navProps = {
      key: 'navBar',
      className: 'navbar navbar-default navbar-fixed-top',
      role: 'navigation'
    };
    return React.createElement('nav', navProps, container);
  }
});

module.exports = NavBar;