import React from 'react';

export default class TextFields extends React.Component {
    constructor (props) {
        super(props);
		this.state = {
			animationDisplay: 'none'
		}
    }
	componentDidMount () {
		//this.setState({ animationDisplay: 'flex' })
		// setTimeout (
			// () => this.setState({ animationDisplay: 'flex' }),
			// 3000
		// );
	}
    render () {
		return (
			<div className="text-fields">
				<div className="text-fields__title">Text fields</div>
			</div>
		);
	}
}