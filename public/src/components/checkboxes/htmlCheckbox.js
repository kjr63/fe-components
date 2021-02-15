import React from 'react';

export default class HtmlCheckbox extends React.Component {
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
			<div className="html-checkbox">
				<div className="html-checkbox__title">Html checkbox</div>
				<form>
					<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
					<label htmlFor="vehicle1"> I have a bike</label><br />
					<input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
					<label htmlFor="vehicle2"> I have a car</label><br />
					<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
					<label htmlFor="vehicle3"> I have a boat</label><br />
				</form>		
			</div>
		);
	}
}