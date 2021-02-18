import React from 'react';

export default class HtmlNumberField extends React.Component {
    constructor (props) {
        super(props);
		// this.state = {
			// animationDisplay: 'none'
		// }
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
			<div className="html-number-field">
				<div className="html-number-field__title">Html number field</div>
				<form>
					<label htmlFor="points">Points: </label>
					<pre> </pre><input type="number" id="points" name="points" size="5" />
				</form>			
			</div>
		);
	}
}