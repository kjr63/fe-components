import React from 'react';

class OpenInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.input = React.createRef();
        this.handleKeyDown = this.handleKeyDown.bind(this);        
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    componentDidMount () {
/*         fetch("ReadContent?param=openinit")
          .then(res => res.json())
          .then(
            (result) => {
              //alert("open luettu: "+result.openText);
              this.setState ({value: result.openText});
            },
            (error) => {
              console.log ("admin openinit error "+error);
            }
        ) */
    }
    handleKeyDown(event){
        if (event.keyCode === 13) {
            //alert('enter');
            event.preventDefault();
        }        
    }    
    handleChange(event){
        //this.setState({ value: event.target.value });
        const cursor = event.target.selectionStart;
        this.setState({ value: event.target.value }, () => {
            if (this.input.current != null)
                this.input.current.selectionEnd = cursor;
        });        
        //console.log("tekstin asetus");
    }  
    handleBlur (e) {
        e.preventDefault();
        //Tallenna muutokset
        //fetch("OpenWrite?resopen="+e.target.value);
		alert ("text field updated "+e.target.value);
    }    
    render(){
        return (
            <div>
                <form autoComplete="false">
					<label htmlFor="open">Opentext: </label>
                    <input
                        type = "text"
						id = "open"
						name = "open"
                        ref = {this.input}
                        value = {this.state.value}
                        onKeyDown = {this.handleKeyDown}
                        onChange = {this.handleChange}
                        onBlur = {this.handleBlur}
                        size = "60"
                    />
                </form>
            </div>
        );
    }
}

class DateInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.input = React.createRef();
        this.handleKeyDown = this.handleKeyDown.bind(this);        
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    componentDidMount () {
/*         fetch("ReadContent?param=addrinit")
          .then(res => res.json())
          .then(
            (result) => {
              //alert("addr luettu: "+result.addrText);
              this.setState ({value: result.addrText});
            },
            (error) => {
              console.log ("admin addrinit error "+error);
            }
        ) */
    }
    handleKeyDown(event){
        if (event.keyCode === 13) {
            //alert('enter');
            event.preventDefault();
        }        
    }
    handleChange(event){
        this.setState({ value: event.target.value });       
        console.log("date: "+event.target.value );
    }     
    handleBlur (e) {
        e.preventDefault();
        //Tallenna muutokset
        //fetch("AddrWrite?resaddr="+e.target.value);
		alert ("your favorite date "+e.target.value);
    }    
    render(){
        return (
            <div>
                <form autoComplete="false">
					<label htmlFor="date">Date: </label>				
                    <input
                        type = "date"
						id = "date"
						name = ""
                        ref = {this.input}
                        value = {this.state.value}                       
                        onChange = {this.handleChange}
                        onBlur = {this.handleBlur}
                        size = "60"
                    />
				<div className="w3-tooltip" style={{display: 'inline-block'}}>
					<pre> </pre>
					<i className="fa fa-question-circle" style={{fontSize:'3rem', color:'red'}}></i>
					<div className="w3-text w3-card w3-margin w3-padding">Hello world!</div>
				</div>
                </form>
            </div>            
        )
    }
}

export default class TextFields extends React.Component {
    constructor (props) {
        super (props);
    }  
    render () {
        return (
            <div className="w3-container w3-padding-large">
				<h4>React text fields</h4>
                <OpenInput />
                <DateInput />
            </div>
        );
    }
}