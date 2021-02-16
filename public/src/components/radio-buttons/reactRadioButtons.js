import React from 'react';

export default class ReactRadioButtons extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
			value: {gender:'male'},
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
			case 'male': this.setState({ value: {gender:'male'}, maleChecked: true, femaleChecked: false, otherChecked: false}); break;
			case 'female': this.setState({ value: {gender:'female'}, maleChecked: false, femaleChecked: true, otherChecked: false}); break;
			case 'other': this.setState({ value: {gender:'other'}, maleChecked: false, femaleChecked: false, otherChecked: true}); break;
		}	
    }
	handleSubmit() {
		alert('Your favorite sex ' + this.state.value.gender);
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
						name = "gender"
                        value = "male"
                        onChange = {this.handleChange}
						checked = {this.state.maleChecked}
                        size = "60"						
                        className = { "react-radio-buttons__field"}
                        ref = {this.input}						
                    />
					<label htmlFor="male"> Male</label><br />
					<input
                        type = "radio"
						id = "female"
						name = "gender"
                        value = "female"
                        onChange = {this.handleChange}
						checked = {this.state.femaleChecked}
                        size = "60"						
                        className = { "react-radio-buttons__field"}
                        ref = {this.input}						
                    />
					<label htmlFor="female"> Female</label><br />
					<input
                        type = "radio"
						id = "other"
						name = "gender"						
                        value = "other"
                        onChange = {this.handleChange}
						checked= {this.state.otherChecked}
                        size = "60"
                        className = { "react-radio-buttons__field"}						
						ref = {this.input}
                    />
					<label htmlFor="other"> Other</label>
					<div><input type="submit" value="Submit" /></div>
				</form>	
			</div>
		);
	}
}
