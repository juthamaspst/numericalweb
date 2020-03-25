import React, {Component} from "react";

import './EpicMenu.css';
import {simplify,compile} from "mathjs"
export default class onepointt extends Component{
    constructor(props){
        super(props);
        this.state={value: ''};
  
        //this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
      }
      //handleChange(event) {
      //  this.setState({value: event.target.value});
      //}
    
      handleSubmit(event) {
        
          event.preventDefault();onep();
      
      }
    render(){
        return(
            <div className="content" path="/onepoint">
                <form onSubmit={this.handleSubmit}>
                    <h2>function: <input  type="text" id="fun"/></h2>
                    <h2>x: <input  type="text" id="x1"/></h2>
                    
                    <input  type="submit" value="submit"/>
                

                </form>
                <br/><h2>output</h2>
                <div id="output"> </div>
            </div>
        );
    
    }
}
function onep(){
    var  x1=parseFloat(document.getElementById("x1").value);
    function fx(x){
      const fun=document.getElementById("fun").value;
      
      const simplified=simplify(fun);
     
      var sum=simplified.evaluate({x:x});
      
      return sum;
  
    }
   var ans=" ";
    var err=100;
    var c=0;
    while(err>0.001){
        var xo=x1;
        x1=fx(x1);
        if(c>0){
            err=Math.abs((x1-xo)/x1);
            ans+="Iterarion"+c+"<br></br>";
            ans+="x:"+x1.toFixed(6)+"<br></br>";
            ans+="error:"+err.toFixed(6)+"<br></br>";
            console.log(err);
            
        }
        c++;
    }
    document.getElementById("output").innerHTML=ans+" ";
}
