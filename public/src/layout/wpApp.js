import React from 'react';
import Header from '../components/header.js';
import HtmlRadioButtons from '../components/radio-buttons/htmlRadioButtons.js';
import ReactRadioButtons from '../components/radio-buttons/reactRadioButtons.js';
import TextFields from '../components/text-fields/textFields.js';
import HtmlCheckbox from '../components/checkboxes/htmlCheckbox.js';
import ReactCheckbox from '../components/checkboxes/reactCheckbox.js';
import HtmlMenu from '../components/menus/htmlMenu.js';
import ReactMenu from '../components/menus/reactMenu.js';
import HtmlRange from '../components/ranges/htmlRange.js';
import ReactRange from '../components/ranges/reactRange.js';
import HtmlNumberField from '../components/number-field/htmlNumberField.js';
import ReactNumberField from '../components/number-field/reactNumberField.js';
import Tooltip from '../components/tooltip/tooltip.js';
import DelayMessage from '../components/delay-message/delayMessage.js';
import ReactModal from '../components/modals/modal.js';

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
				<HtmlCheckbox />
				<ReactCheckbox />
				<HtmlMenu />
				<ReactMenu />
				<HtmlRange />
				<ReactRange />
				<HtmlNumberField />
				<ReactNumberField />
				<Tooltip />
				<DelayMessage />
				<ReactModal />
            </div>
        );
    }
}
