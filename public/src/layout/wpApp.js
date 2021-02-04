import React from 'react';
import Header from '../components/header.js';

export default class WpApp extends React.Component {
    constructor (props) {
        super(props);
    }
	componentDidMount () {
	}

    render () {     
        return (
            <div className="template">
                <Header />
            </div>
        );
    }
}
