var React = require('react'),
    ReactDOM = require('react-dom'),
    div = ReactDOM.div,
    section = ReactDOM.section,
    h4 = ReactDOM.h4,
    h1 = ReactDOM.h1,
    ul = ReactDOM.ul,
    li = ReactDOM.li,
    span = ReactDOM.span,
    button = ReactDOM.button,
    Masthead = require('./startPage/masthead'),
    startPageConstants = require('../constants/startPage.constants');


var StartPage = React.createClass({
    render: function () {
        var text = startPageConstants.pitchBlock;
        var masthead = React.createElement(Masthead);

        var jumbotronText = div('row', div({ 
                className:'col-lg-12 jumbotron text-center' 
            }, [
                h1(null, {}),
                h5(null, {})
            ]));

        var pitchBlock = div('row', div({ 
                className:'col-lg-12 main-content' 
            }, [
                h4(null, text.questionHeader),
                ul(null, [
                    li(null, text.questionOne),
                    li(null, text.questionTwo),
                    li(null, text.questionThree),
                ]),
                p(null, text.questionHeader),
                p(null, text.relation),
                span(null, text.started),
                button('btn btn-success', {
                    onClick: function() {
                        console.log('clicked!');
                    }
                })
            ]));


        section({ className: 'container' }, [
            masthead, jumbotronText, pitchBlock
        ]);
        
        return section;
    }
});

module.exports = StartPage;