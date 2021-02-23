import React from 'react';

export default class ReactModal extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
			visibility: 'hidden'
		};
        this.input = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);        
        this.handleChange = this.handleChange.bind(this);
    }
	componentDidMount () {

	}
    handleChange(event){
		event.preventDefault();
		this.setState({visibility:'hidden'});
    }
	handleSubmit() {
		event.preventDefault();
		this.setState({visibility:'visible'});
	}
    render () {
		return (
			<div className="react-modal">
				<div className="react-modal__title">React modal</div>
				<div className="react-modal__btn-open">
					<form autoComplete="false" onSubmit={this.handleSubmit}>
						<div><input type="submit" value="Open" /></div>
					</form>
				</div>				
				<div className="react-modal__body" style={{visibility:this.state.visibility}}>
					<div className="react-modal__body__btn-close" onClick={this.handleChange}>
						X
					</div>
				</div>
			</div>
		);
	}
}
