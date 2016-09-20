var React = require('react'),
    a = React.DOM.a,
    li = React.DOM.li,
    ul = React.DOM.ul,
    _ = require('lodash'),
    NavLinks;

NavLinks = React.createClass({

  render: function () {
    var childListItems = this.props.navItems.map(function (navItem) {
      var link = a({
                  href: navItem.link
                }, navItem.title);

      return li({
              key: navItem.title
            }, link);
    });

    return ul({
      key: 'navLinks',
      className: 'nav navbar-nav navbar-right list-unstyled',
    }, childListItems);
  }
  
});

module.exports = NavLinks;
