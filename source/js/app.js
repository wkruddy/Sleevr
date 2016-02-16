(function(){
	// Initial react controller view

  "use strict";

  var React = require('react'),
      ReactDOM = require('react-dom'),
      _ = require('lodash'),
      navBar = require('./nav-bar/navBar'),
      masthead = require('./masthead/masthead'),
      pitchBlock = require('./pitch-block/pitchBlock'),
      footer = require('./footer/footer'),
      designArena = require('./design-arena/designArena'),
      gallery = require('./gallery/gallery'),
      profile = require('./profile/profile'),
      mainComponents,
      baseProps,
      Sleevr;

  mainComponents = [navBar,
                    masthead,
                    pitchBlock,
                    footer,
                    designArena,
                    gallery,
                    profile];
  baseProps = {
    navItems: [
      {link: "#", title: 'Home'},
      {link: "#", title: 'Design'},
      {link: "#", title: 'Gallery'},
      {link: "#", title: 'Profile'}
    ]
  };

  Sleevr = React.createClass({
    render: function(){

      var self = this;
      var count = 0;
      var childComponents = mainComponents.map(function(component){
        var props = _.extend({key: 'component'+count++}, self.props);
        return React.createElement(component, props);
      });

      return React.createElement('div', {
        className: 'app-block',
        key: 'main-app'
      },
      childComponents);
    }
  });

  ReactDOM.render(React.createElement(Sleevr, baseProps), document.getElementById('sleevr'));
})();