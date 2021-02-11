import React from 'react';

export default class HtmlRadioButtons extends React.Component {
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
			<div className="html-radio-buttons">
				<div className="html-radio-buttons__title">Html radio buttons</div>
				<form>
					<input type="radio" id="male" name="gender" value="male" />
					<label htmlFor="male"> Male</label><br />
					<input type="radio" id="female" name="gender" value="female" />
					<label htmlFor="female"> Female</label><br />
					<input type="radio" id="other" name="gender" value="other" />
					<label htmlFor="other"> Other</label>
				</form>				
			</div>
		);
	}
}