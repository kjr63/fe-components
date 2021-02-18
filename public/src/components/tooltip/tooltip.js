import React from 'react';

export default class Tooltip extends React.Component {
    constructor (props) {
        super(props);
    }
	componentDidMount () {

	}
    render () {
		return (
			<div className="react-tooltip">
				<div className="react-tooltip__title tooltip">
					<div>CSS Tooltip</div>
					<div className="tooltiptext">
						<ul className="w3-ul">
							<li>Videolla näytetään "Pizza Hut" - nimisen yrityksen sivun luonti</li>
							<li>Tarvitset sivun avaamiseen vain sivulle nimen ja sähköpostiosoitteen</li>
						</ul>
					</div> 
				</div>
				<div className="react-tooltip__title w3-tooltip">
					<div>W3CSS Tooltip</div>
					<div className="w3-text w3-tag w3-margin-left w3-medium"><em>Takaisin kotisivulle</em></div>                        
				</div>				
			</div>
		);
	}
}
