import React from 'react';

const { footer } = React.DOM;

class PageFooter extends React.Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return footer(null, this.props.copyright);
    }

}

export default PageFooter;
