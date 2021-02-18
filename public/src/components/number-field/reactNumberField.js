import React from 'react';

export default class ReactRadioButtons extends React.Component {
    constructor (props) {
        super(props);
		this.DEFAULT_STEP = 2;
        this.state = {
			value: 0
		};
        this.input = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);        
        this.handleChange = this.handleChange.bind(this);
    }
	componentDidMount () {

	}
    handleChange(event){
		//event.persist();
		let newValue = event.target.value;
		this.setState ({value: newValue});
    }
	handleSubmit() {
		alert('Your favorite number ' + this.state.value);
		event.preventDefault();
	}
    render () {
		return (
			<div className="react-number-field">
				<div className="react-number-field__title">React number field</div>
				<form autoComplete="false" onSubmit={this.handleSubmit}>
					<label htmlFor="points">Points: </label>
					<input
                        type = "number"
						id = "points"
						name = "points"
						step = {this.DEFAULT_STEP}
                        value = {this.state.value}
                        onChange = {this.handleChange}
                        size = "5"
                        className = { "react-number-field__field"}						
						ref = {this.input}
                    />
					<pre> </pre><input type="submit" value="Submit" />
				</form>	
			</div>
		);
	}
}
