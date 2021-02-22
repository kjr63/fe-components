import React from 'react';

export default class DelayMessage extends React.Component {
    constructor (props) {
        super(props);
		this.timer2sec = undefined;
        this.state = {
			loaderOn : 'hidden',
			dMessage : 'not started'
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.timeout2secCallback = this.timeout2secCallback.bind(this);
    }
	componentDidMount () {		
	}
	timeout2secCallback () {
		//Aseta loader näkyväksi
		this.setState({loaderOn: 'visible'});		
	}
	handleSubmit() {
		event.preventDefault();
		//Käynnistä 2sec timer
		this.timer2sec = setTimeout (
			this.timeout2secCallback,
			2000
		);
		//Käynnistä 10sec timer
		let timer10secPromise = new Promise (
			function(resolve, reject) { 
				setTimeout( function() { resolve('huomio herpaantuu'); }, 10000);
			}
		);	
		//Käynnistä haku (hakutimer)
		let fetchPromise = new Promise (
			function (resolve, reject) {
				setTimeout( function() { resolve('fetchReady'); }, 5000);
			}
		);
		//Aseta teksi 'fetching'
		this.setState ({dMessage:'fetching'});
		//Odota ratkaisuja
		Promise.any([timer10secPromise, fetchPromise])
		.then(
			(value) => {
				console.log("any = "+value)
				//Pysäytä loader-timerit
				clearTimeout(this.timer2sec);
				//Piilota loader
				this.setState({loaderOn:'hidden'});
				//JOS 10sec timer laukesi
				if (value === 'huomio herpaantuu') {
					//Anna virheilmoitus
					this.setState({dMessage:'haku epäonnistui'});
				}
				//MUUTOIN
				else {
					//Anna ok-ilmoitus (tai tiedot)
					this.setState({dMessage:'haku ok'});
				}
			}
		).catch ( (e) => {console.log(e)});
	}	
    render () {
		return (
			<div className="delay-message">
				<div className="delay-message__title">Delay message</div>
				<form autoComplete="false" onSubmit={this.handleSubmit}>
					<div><input type="submit" value="Submit" /></div>
				</form>					
				<div className="delay-message__status">{this.state.dMessage}</div>
				<div className="delay-message__loader" style={{visibility:this.state.loaderOn}}>haku ei välittömästi</div>
			</div>
		);
	}
}
