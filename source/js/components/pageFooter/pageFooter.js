import React, { Component } from 'react';

const { footer, div, em } = React.DOM;

class PageFooter extends Component {

    constructor (props) {
        super(props);
        this.state = {
        	copyright: 'Copyright Kyle Linden 2016. All rights reserved.'
        };
    }

    render () {

        return footer({
        	className: 'container-fluid'
        }, div({ className: 'row page-footer-box' },
        	div({ className: 'col-lg-12 text-center page-footer' },
        		em(null, this.state.copyright ))
        	)
        );
    }

}

export default PageFooter;
