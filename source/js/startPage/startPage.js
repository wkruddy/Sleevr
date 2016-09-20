var React = require('react'),
    h4 = React.DOM.h4,
    h5 = React.DOM.h5,
    h1 = React.DOM.h1,
    ul = React.DOM.ul,
    li = React.DOM.li,
    p = React.DOM.p,
    div = React.DOM.div,
    section = React.DOM.section,
    span = React.DOM.span,
    button = React.DOM.button,
    _ = require('lodash'),
    Masthead = require('./masthead'),
    startPageConstants = require('../constants/startPage.constants'),
    StartPage;

StartPage = React.createClass({
    render: function () {
        var pitch = startPageConstants.pitchBlock;
        var jumbotron = startPageConstants.jumbotron;
        var masthead = React.createElement(Masthead, _.assign({ key: 'masthead' , className: 'masthead'}, this.props));

        var jumbotronText = div({ className: 'row' },
             div({
                className:'col-lg-12 jumbotron text-center'
            }, [
                h1({ key: 'title', className: 'title' }, jumbotron.title ),
                h5({ key: 'subtitle' }, jumbotron.subtitle )
            ]));

        var actionBtn = button({
            className: 'btn btn-success',
            key: 'goBtn',
            onClick: function () {
                console.log('Dispatcher Emit even to load Design Arena');
            }
        }, pitch.go);

        var pitchBlock = div({ className: 'row' },
            div({
                className:'col-lg-12 main-content'
            }, [
                h4({ key: 'questionHeader' }, pitch.questionHeader),
                ul({ key: 'questionList' }, [
                    li({ key: 'question1'}, pitch.questionOne),
                    li({ key: 'question2'}, pitch.questionTwo),
                    li({ key: 'question3'}, pitch.questionThree),
                ]),
                p({ key: 'answer' }, pitch.answerOneIntro),
                p({ key: 'relationBlock' }, pitch.relation),
                span({ key: 'getStarted' }, pitch.started),
                actionBtn
            ]));

        var components = section({ className: 'container' }, [
            masthead, jumbotronText, pitchBlock
        ]);

        return components;
    }
});

module.exports = StartPage;
