import React from 'react';

export default class ReactRadioButtons extends React.Component {
    constructor (props) {
        super(props);
		this.state = {
			dummy: 'none'
		}
    }
	componentDidMount () {

	}
    render () {
		return (
			<div className="react-radio-buttons">
				<div className="react-radio-buttons__title">React radio buttons</div>		
			</div>
		);
	}
}
