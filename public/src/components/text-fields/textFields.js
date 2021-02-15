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
                    <input
                        type = "text"
                        ref = {this.input}
                        value = {this.state.value}
                        onKeyDown = {this.handleKeyDown}
                        onChange = {this.handleChange}
                        onBlur = {this.handleBlur}
                        className = {
                            "w3-input w3-xlarge " +
                            "w3-card-4 w3-border "
                        }
                        size = "60"
                    />
                </form>
            </div>
        );
    }
}

class AddressInput extends React.Component{
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
        //fetch("AddrWrite?resaddr="+e.target.value);
		alert ("text field updated "+e.target.value);
    }    
    render(){
        return (
            <div>
                <form autoComplete="false">                
                    <input
                        type = "text"
                        ref = {this.input}
                        value = {this.state.value}
                        onKeyDown = {this.handleKeyDown}                        
                        onChange = {this.handleChange}
                        onBlur = {this.handleBlur}
                        className = {
                            "w3-input w3-large " +
                            "w3-card-4 w3-border "
                        }
                        size = "60"
                    />
                </form>
            </div>            
        )
    }
}

class Powered extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <p className="w3-hide-small w3-hide-medium">powered by <a href="https://www.suomiverkko.online" target="_blank">S.On</a></p>
        );
    }
}
export default class TextFields extends React.Component {
    constructor (props) {
        super (props);
    }  
    render () {
        return (
            <div className="w3-padding-large">
				<h2>Text fields</h2>
                <OpenInput />
                <AddressInput />
                <Powered />
            </div>
        );
    }
}