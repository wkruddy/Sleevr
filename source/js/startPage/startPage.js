var React = require('react'),
    rDOM = require('react-dom'),
    h4 = rDOM.h4,
    h5 = rDOM.h5,
    h1 = rDOM.h1,
    ul = rDOM.ul,
    li = rDOM.li,
    p = rDOM.p,
    span = rDOM.span,
    button = rDOM.button,
    Masthead = require('./masthead');
    startPageConstants = require('../constants/startPage.constants');

var StartPage = React.createClass({
    render: function () {
        var pitch = startPageConstants.pitchBlock;
        var jumbotron = startPageConstants.jumbotron;
        var masthead = React.createElement(Masthead);

        var jumbotronText = React.createElement('div', { className: 'row' },
             React.createElement('div', {
                className:'col-lg-12 jumbotron text-center'
            }, [
                React.createElement('h1', {}, jumbotron.title ),
                React.createElement('h5', {}, jumbotron.subtitle )
            ]));

        var actionBtn = React.createElement('button', {
            className: 'btn btn-success',
            key: 'goBtn',
            onClick: function () {
                console.log('Dispatcher Emit even to load Design Arena');
            }
        }, pitch.go);

        var pitchBlock = React.createElement('div', { className: 'row' },
            React.createElement('div', {
                className:'col-lg-12 main-content'
            }, [
                React.createElement('h4', {}, pitch.questionHeader),
                React.createElement('ul', [
                    React.createElement('li', {}, pitch.questionOne),
                    React.createElement('li', {}, pitch.questionTwo),
                    React.createElement('li', {}, pitch.questionThree),
                ]),
                React.createElement('p', {}, pitch.answerOneIntro),
                React.createElement('p', {}, pitch.relation),
                React.createElement('span', {}, pitch.started),
                actionBtn
            ]));

        var components = React.createElement('section', { className: 'container' }, [
            masthead, jumbotronText, pitchBlock
        ]);

        return components;
    }
});

module.exports = StartPage;
