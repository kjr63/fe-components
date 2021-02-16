import React from 'react';

export default class ReactCheckbox extends React.Component {
    constructor (props) {
        super(props);
		this.vehicle1 = 'Monarch';
		this.vehicle2 = 'Audi';
		this.vehicle3 = 'Buster';
        this.state = {
			value: {bike: '', car:'', boat:''},
			bikeChecked: false,
			carChecked: false,
			boatChecked: false
		};
        this.input = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);        
        this.handleChange = this.handleChange.bind(this);
    }
	componentDidMount () {

	}
    handleChange(event){
		event.persist();
		this.setState (
			(prevState) => {
				let newState = prevState;
				switch (event.target.name) {
					case 'bike': newState.bikeChecked = !prevState.bikeChecked; break;
					case 'car': newState.carChecked = !prevState.carChecked; break;
					case 'boat': newState.boatChecked = !prevState.boatChecked; break;
				}
				if (newState.bikeChecked) {newState.value.bike = this.vehicle1} else {newState.value.bike = ''}
				if (newState.carChecked) {newState.value.car = this.vehicle2} else {newState.value.car = ''}
				if (newState.boatChecked) {newState.value.boat = this.vehicle3} else {newState.value.boat = ''}
				return (newState);
			}
		);
    }
	handleSubmit() {
		alert('Your favorite vehicles ' + JSON.stringify(this.state.value) );
		event.preventDefault();
	}
    render () {
		return (
			<div className="react-checkbox">
				<div className="react-checkbox__title">React checkbox</div>
				<form autoComplete="false" onSubmit={this.handleSubmit}>
					<input
                        type = "checkbox"
						id = "vehicle1"
						name = "bike"
                        ref = {this.input}
                        value = {this.vehicle1}
                        onChange = {this.handleChange}
						checked = {this.state.bikeChecked}
                        className = { "react-checkbox__field"}
                        size = "60"
                    />
					<label htmlFor="vehicle1"> {this.vehicle1}</label><br />
					<input
                        type = "checkbox"
						id = "vehicle2"
						name = "car"
                        ref = {this.input}
                        value = {this.vehicle2}
                        onChange = {this.handleChange}
						checked = {this.state.carChecked}
                        className = {"react-checkbox__field"}
                        size = "60"
                    />
					<label htmlFor="vehicle1"> {this.vehicle2}</label><br />
					<input
                        type = "checkbox"
						id = "vehicle3"
						name = "boat"
                        ref = {this.input}
                        value = {this.vehicle3}
                        onChange = {this.handleChange}
						checked= {this.state.boatChecked}
                        className = { "react-checkbox__field"}
                        size = "60"
                    />
					<label htmlFor="vehicle1"> {this.vehicle3}</label>
					<div><input type="submit" value="Submit" /></div>
				</form>	
			</div>
		);
	}
}
