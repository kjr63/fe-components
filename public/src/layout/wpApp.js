import React from 'react';
import Header from '../components/header.js';
import HtmlRadioButtons from '../components/radio-buttons/htmlRadioButtons.js';
import ReactRadioButtons from '../components/radio-buttons/reactRadioButtons.js';
import TextFields from '../components/textFields.js';

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
				<TextFields />
				<HtmlRadioButtons />
				<ReactRadioButtons />
            </div>
        );
    }
}
