import React from 'react';
import _ from 'lodash';
import Masthead from './masthead';
import startPageConstants from '../constants/startPage.constants';

const { h1, h4, h5, ul, li, p, div, section, span, button } = React.DOM;

class StartPage extends React.Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        const pitch = startPageConstants.pitchBlock;
        const jumbotron = startPageConstants.jumbotron;
        const masthead = React.createElement(Masthead, _.assign({
            key: Masthead.name,
            className: 'masthead'
        }, this.props));

        const jumbotronText = div({ key: 'jumbotron', className: 'row' },
             div({
                className:'col-lg-12 jumbotron text-center'
            }, [
                h1({ key: 'title', className: 'title' }, jumbotron.title),
                h5({ key: 'subtitle' }, jumbotron.subtitle)
            ]));

        const actionBtn = button({
            className: 'btn btn-success',
            key: 'goBtn',
            onClick: () => {
                console.log('Dispatcher Emit even to load Design Arena');
            }
        }, pitch.go);

        const pitchBlock = div({ key: 'pitchBlock', className: 'row' },
            div({
                className:'col-lg-12 main-content'
            }, [
                h4({ key: 'questionHeader' }, pitch.questionHeader),
                ul({ key: 'questionList' }, [
                    li({ key: 'question1' }, pitch.questionOne),
                    li({ key: 'question2' }, pitch.questionTwo),
                    li({ key: 'question3' }, pitch.questionThree),
                ]),
                p({ key: 'answer' }, pitch.answerOneIntro),
                p({ key: 'relationBlock' }, pitch.relation),
                span({ key: 'getStarted' }, pitch.started),
                actionBtn
            ]));

        return section({ key: 'startPage', className: 'container' }, [
            masthead, jumbotronText, pitchBlock
        ]);

    }
}

export default StartPage;
