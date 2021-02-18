import React from 'react';

export default class HtmlMenu extends React.Component {
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
			<div className="html-menu">
				<div className="html-menu__title">Html menus</div>
				<form>
					<label htmlFor="cars">Choose a car: </label>
					<select name="cars" id="cars">
						<option value="volvo">Volvo</option>
						<option value="saab">Saab</option>
						<option value="opel">Opel</option>
						<option value="audi">Audi</option>
					</select>
					<br /><br />
					<input type="submit" value="Submit" />
				</form>
				<br />
				<form>
					<label htmlFor="cars">Choose a car: </label>
					<select name="cars" id="cars">
						<optgroup label="Swedish Cars">
							<option value="volvo">Volvo</option>
							<option value="saab">Saab</option>
						</optgroup>
						<optgroup label="German Cars">
							<option value="mercedes">Mercedes</option>
							<option value="audi">Audi</option>
						</optgroup>
					</select>
					<br /><br />
					<input type="submit" value="Submit" />
				</form>				
			</div>
		);
	}
}