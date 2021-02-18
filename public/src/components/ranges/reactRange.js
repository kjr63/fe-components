import React from 'react';

export default class ReactRange extends React.Component {
    constructor (props) {
        super(props);
		this.DEFAULT_VALUE = 25;
		this.DEFAULT_MIN = 0;
		this.DEFAULT_MAX = 50;
        this.state = {
			value: this.DEFAULT,
		};
        this.input = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);        
        this.handleChange = this.handleChange.bind(this);
    }
	componentDidMount () {
		//this.setState ({value: this.DEFAULT_VALUE});
	}
    handleChange(event){
		//event.persist();
		let newValue = event.target.value;
		//console.log("range " + newValue);
		this.setState ({value: newValue});
    }
	handleSubmit() {
		alert('Your favorite range ' + this.state.value);
		event.preventDefault();
	}
    render () {
		return (
			<div className="react-range">
				<div className="react-range__title">React range</div>
				<form autoComplete="false" onSubmit={this.handleSubmit}>
					<label htmlFor="vol">Volume (between 0 and 50): </label>
					<input
                        type = "range"
						id = "vol"
						name = "vol"						
                        min = {this.DEFAULT_MIN}
						max = {this.DEFAULT_MAX}
						value = {this.state.value}
                        onChange = {this.handleChange}
                        size = "60"
                        className = { "react-range__field"}						
						ref = {this.input}
                    />
					<pre> </pre><span>{this.state.value}</span>					
					<pre> </pre><input type="submit" value="Submit" />
				</form>	
			</div>
		);
	}
}
