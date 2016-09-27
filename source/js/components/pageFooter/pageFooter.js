import React from 'react';

const { footer, div, em } = React.DOM;

class PageFooter extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
        	copyright: 'Copyright Kyle Linden 2016. All rights reserved.'
        };
    }

    render () {

        return footer({
        	className: 'container'
        }, div({ className: 'row'},
        	div({ className: 'col-lg-12 text-center' },
        		em(null, this.state.copyright ))
        	)
        );
    }

}

export default PageFooter;
