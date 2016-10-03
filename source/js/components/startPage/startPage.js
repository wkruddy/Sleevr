import React, { Component } from 'react';
import { withRouter } from 'react-router';
import _ from 'lodash';
import Masthead from './masthead';
import startPageConstants from '../../constants/startPage.constants';

import { Link } from 'react-router';

const ReactLink = React.createFactory(Link);

const { h1, h4, h5, ul, li, p, div, section, span, button } = React.DOM;

class PreDecoratedStartPage extends Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        const pitch = startPageConstants.pitchBlock;
        const jumbotron = startPageConstants.jumbotron;
        const masthead = React.createElement(Masthead, _.assign({
            className: 'masthead',
            key: Masthead.name
        }, this.props));

        const jumbotronText = div({ className: 'row', key: 'jumbotron' },
             div({
                className: 'col-lg-12 jumbotron text-center',
                key: 'jumbotronText'
            }, [
                h1({ className: 'title', key: 'title' }, jumbotron.title),
                h5({ className: 'subtitle',  key: 'subtitle' }, jumbotron.subtitle)
            ]));

        const actionBtn = button({
            className: 'btn btn-success',
            key: 'goBtn',
            onClick: () => {
                this.props.router.push('/design-arena');
            }
        }, pitch.go);

        const pitchBlock = div({ key: 'pitchBlock', className: 'row' },
            div({
                className: 'col-lg-12 main-content',
                key: 'pitchBlock'
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

        return section({ className: 'start-page container', key: 'startPage' }, [
            masthead, jumbotronText, pitchBlock
        ]);

    }
}

PreDecoratedStartPage.propTypes = {
    router: React.PropTypes.shape({
        push: React.PropTypes.func.isRequired
    }).isRequired
};

// In order to get programmatic navigation, we need to decorate the class before we export it
const StartPage = withRouter(PreDecoratedStartPage);

export default StartPage;
