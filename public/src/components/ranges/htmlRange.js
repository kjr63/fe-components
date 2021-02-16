import React from 'react';

export default class HtmlRange extends React.Component {
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
			<div className="html-range">
				<div className="html-range__title">Html ranges</div>
				<form>
					<label htmlFor="vol">Volume (between 0 and 50): </label>
					<input type="range" id="vol" name="vol" min="0" max="50" /><pre> </pre>
					<input type="submit" value="Submit" />
				</form>			
			</div>
		);
	}
}