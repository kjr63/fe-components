import React from 'react';

export default class ReactRadioButtons extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
			value: 'male',
			maleChecked: true,
			femaleChecked: false,
			otherChecked: false
		};
        this.input = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);        
        this.handleChange = this.handleChange.bind(this);
    }
	componentDidMount () {

	}
    handleChange(event){
		//event.persist();
		switch (event.target.value) {
			case 'male': this.setState({ value: 'male', maleChecked: true, femaleChecked: false, otherChecked: false}); break;
			case 'female': this.setState({ value: 'female', maleChecked: false, femaleChecked: true, otherChecked: false}); break;
			case 'other': this.setState({ value: 'other', maleChecked: false, femaleChecked: false, otherChecked: true}); break;
		}	
    }
	handleSubmit() {
		alert('Your favorite sex ' + this.state.value);
		event.preventDefault();
	}
    render () {
		return (
			<div className="react-radio-buttons">
				<div className="react-radio-buttons__title">React radio buttons</div>
				<form autoComplete="false" onSubmit={this.handleSubmit}>
					<input
                        type = "radio"
						id = "male"
                        ref = {this.input}
                        value = "male"
                        onChange = {this.handleChange}
						checked = {this.state.maleChecked}
                        className = { "react-radio-buttons__field"}
                        size = "60"
                    />
					<label htmlFor="male"> Male</label><br />
					<input
                        type = "radio"
						id = "female"
                        ref = {this.input}
                        value = "female"
                        onChange = {this.handleChange}
						checked = {this.state.femaleChecked}
                        className = { "react-radio-buttons__field"}
                        size = "60"
                    />
					<label htmlFor="female"> Female</label><br />
					<input
                        type = "radio"
						id = "other"
                        ref = {this.input}
                        value = "other"
                        onChange = {this.handleChange}
						checked= {this.state.otherChecked}
                        className = { "react-radio-buttons__field"}
                        size = "60"
                    />
					<label htmlFor="other"> Other</label>
					<div><input type="submit" value="Submit" /></div>
				</form>	
			</div>
		);
	}
}
