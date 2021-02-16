import React from 'react';

export default class ReactMenu extends React.Component {
    constructor (props) {
        super(props);
		this.option = ['volvo','saab','opel','audi']
        this.state = {
			value: this.option[0]
		};
        this.input = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);        
        this.handleChange = this.handleChange.bind(this);
    }
	componentDidMount () {

	}
    handleChange(event){
		//event.persist();
		//alert (event.target.value);
		this.setState({value: event.target.value});
    }
	handleSubmit() {
		alert('Your favorite car ' + this.state.value);
		event.preventDefault();
	}
    render () {
		return (
			<div className="react-menu">
				<div className="react-menu__title">React menu</div>
				<form autoComplete="false" onSubmit={this.handleSubmit}>				
					<label htmlFor="cars">Choose a car: </label>
					<select
						name="cars"
						id="cars"
                        onChange = {this.handleChange}
						ref = {this.input}						
					>
						<option className="react-menu__option" value={this.option[0]}>{this.option[0]}</option>
						<option className="react-menu__option" value={this.option[1]}>{this.option[1]}</option>
						<option className="react-menu__option" value={this.option[2]}>{this.option[2]}</option>
						<option className="react-menu__option" value={this.option[3]}>{this.option[3]}</option>
					</select>
					<br /><br />					
					<div><input type="submit" value="Submit" /></div>
				</form>	
			</div>
		);
	}
}