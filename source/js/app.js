(function () {
    // Initial react controller view

    'use strict';

    var React = require('react'),
        ReactDOM = require('react-dom'),
        _ = require('lodash'),
        NavBar = require('./navBar/navBar'),
        StartPage = require('./startPage/startPage'),
        PitchBlock = require('./pitchBlock/pitchBlock'),
        PageFooter = require('./pageFooter/pageFooter'),
        DesignArena = require('./designArena/designArena'),
        Gallery = require('./gallery/gallery'),
        Profile = require('./profile/profile'),
        mainComponents,
        baseProps,
        Sleevr;

    mainComponents = [NavBar,
                      StartPage,
                      PitchBlock,
                      PageFooter,
                      DesignArena,
                      Gallery,
                      Profile];
    baseProps = {
        navItems: [
          { link: '/home', title: 'Home' },
          { link: '/design-arena', title: 'Design' },
          { link: '/gallery', title: 'Gallery' },
          { link: '/profile', title: 'Profile' }
        ],
        landingPageGalleryImageCount: 12
    };

    Sleevr = React.createClass({
        render: function () {

            var self = this;
            var count = 0;
            var childComponents = mainComponents.map(function (component) {
                var props = _.assign({ key: 'component' + count++ }, self.props);
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
