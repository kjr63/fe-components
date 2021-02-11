import React from 'react';

export default class OrderWizard extends React.Component {
    constructor (props) {
        super(props);
		
		/*** Externaalit muuttujat ****/
		this.DEFAULT_CUSTOMER = "....";
		this.customer = {};
		
		//Apumuuttujia
		this.element = undefined;
		this.orderState = undefined;
		this.INIT = 0;
		this.READING_DOMAINNAME = 1;
		this.READING_THEME = 2;
		this.READING_PAGETITLE = 3;
		this.sysState = "begin";
		
		//metodit
		this.initPage = this.initPage.bind(this);
		this.control = this.control.bind(this);
		this.openTab = this.openTab.bind(this);
    }
	componentDidMount () {
		console.log('wizard mounted');
		this.initPage ();
	}
	control (orderEvent) { console.log(orderEvent);}
	openTab (evt, menuName) {console.log(evt,menuName);}
	initPage () {
		console.log("initpage function");
		//Lue tilatieto
		//var sysState = sessionStorage.getItem("systemStatus");
		//JOS tultiin pääsivulta NIIN alusta tilaustiedot
		if (this.sysState === "begin") {
			this.customer = {
				name: this.DEFAULT_CUSTOMER,
				email: this.DEFAULT_CUSTOMER
			}
			//customerJSON = JSON.stringify(customer);
			//sessionStorage.setItem("customerJson", customerJSON);
		}
		//customerJSON = sessionStorage.getItem("customerJson");
		//customer = JSON.parse(customerJSON);
		this.orderState = this.INIT;
		this.control ('hello world');
		//sessionStorage.setItem("systemStatus", "order"); 
	}
	
    render () {     
        return (
            <div className="wizard">
				<header><h2 className="w3-teal w3-padding">Tilaus</h2></header>  
				<section className="w3-container">
				{/* Välilehtipalkki */}
					<div className="w3-bar w3-border-0">
						<span className="w3-tag tablink w3-padding-medium w3-white tabdname" onClick={this.control('toDomainname')} >
							Verkkotunnus
						</span>
						<span className="w3-tag tablink w3-padding-medium w3-white tabtheme" onClick={this.control('toTheme')} >
							Teema
						</span>
						<span className="w3-tag tablink w3-padding-medium w3-white tabptitle" onClick={this.control('toPagetitle')} >
							Sivuotsikko
						</span>                     
					</div>
					{/*<!-- Verkkotunnus-välilehti -->*/}
					<div id="domainName" className="w3-container menu w3-white">
						<div className="w3-container w3-padding-small">
							<h2 className="">Hae vapaa verkkotunnus</h2>
							<p>Ennen tilauksen lähettämistä selvitä alla olevista linkeistä onko haluamasi verkkotunnus, esimerkiksi "<b>kalevinvalinta.fi</b>", vapaana käyttöön.</p>
							<p><b>Viestintäviraston</b> palvelusta, jos haluamasi tunnuksen loppuliite on <b>.fi</b>,
								tai <br /><b>enom</b>-kansainvälisestä palvelusta, jos loppuliite on jokin kansainvälinen tunnus kuten <b>.com, .net, .org</b>, jne.
								<br />Loppuliite .fi on maksullinen ja siitä maksetaan 5e lisämaksu kuukaudessa.
							</p>
							<div className="w3-large"><span>Viestintäviraston vapauskyselypalvelu tästä linkistä: </span><a target="_blank" href="https://www.viestintavirasto.fi/fiverkkotunnus/fi-verkkotunnuksenhankkiminen/fi-verkkotunnushaku.html"><b>fi-tunnus</b></a></div>
							<div className="w3-large"><span>Kansainvälisen tunnuksen vapauskyselypalvelu linkistä: </span><a target="_blank" href="https://www.enom.com/domains/search-results"><b>com-,net-, org- jne. tunnus</b></a></div>
						</div>
						<form className="w3-panel w3-card-4 w3-light-grey w3-padding-small" action={this.control('next')}>
							<h3>Syötä alle vapaa verkkotunnuksesi loppuliitteineen</h3>                        
							<p>
								<input id="domname" type="text" placeholder="Verkkotunnus" size="50" />
								<button className="w3-btn w3-tag w3-round-medium w3-card-4 w3-margin-left">seuraava <i className="fa fa-arrow-right"></i></button>
							</p>
						</form>
						<br />
					</div>
					{/*<!-- Teema-välilehti -->   */}             
					<div id="theme" className="w3-container menu w3-padding-32 w3-white">
						<form name="themeForm" className="w3-container w3-padding-bottom w3-card-4">
							<h2>Valitse teema</h2>
							<div className="w3-container w3-padding"><input className="w3-radio" type="radio" name="theme" value="SINGLE_VIEW" />
							<span><b>Single View</b></span></div>
							<div className="w3-container w3-padding"><input className="w3-radio" type="radio" name="theme" value="LONG_PAGE" />
							<span><b>Long Page</b></span></div>
							<div className="w3-container w3-padding"><input className="w3-radio" type="radio" name="theme" value="LONG_PAGE_II" />
							<span><b>Long Page II</b></span></div>
						</form>
						<div className="w3-container w3-padding-large w3-light-gray w3-card-4">
							<button className="w3-btn w3-tag w3-round-medium w3-card-4 w3-margin-left" onClick={this.control('previous')}><i className="fa fa-arrow-left"></i> edellinen</button>
							<button className="w3-btn w3-tag w3-round-medium w3-card-4 w3-margin-left" onClick={this.control('next')}>seuraava <i className="fa fa-arrow-right"></i></button>
						</div>
					</div>
					{/*<!-- Sivuotsikko-välilehti --> */}               
					<div id="pageTitle" className="w3-container menu w3-padding-32 w3-white">
						<h2>Anna sivuston pääotsikko (Esim. "Kalevin valinta")</h2>
						<p><input id="pagetitle" className="w3-input" type="text" placeholder="Sivun pääotsikko" /></p>
						<div className="w3-container w3-padding-large w3-light-gray w3-card-4">
							<button className="w3-btn w3-tag w3-round-medium w3-card-4 w3-margin-left" onClick={this.control('previous')}><i className="fa fa-arrow-left"></i> edellinen</button>
							<button className="w3-btn w3-tag w3-round-medium w3-card-4 w3-margin-left" onClick={this.control('next')}>Valmis! <i className="fa fa-arrow-right"></i></button>
						</div>
					</div>                    
					<br />
				</section>         
			</div>			
        );
    }
}