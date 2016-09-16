var React = require('react');
var _ = require('lodash');

var NavLinks = React.createClass({

  render: function () {
    var childListItems = this.props.navItems.map(function (navItem) {
      var link = React.createElement('a', { 
                  href: navItem.link 
                }, navItem.title);

      return React.createElement('li', { 
              key: navItem.title 
            }, link);
    });

    return React.createElement('ul', {
      key: 'navLinks',
      className: 'nav navbar-nav navbar-right list-unstyled',
    }, childListItems);
  },
});

module.exports = NavLinks;
