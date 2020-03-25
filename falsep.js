import React, {Component} from "react";
import ReactDOM from "react-dom";
import './EpicMenu.css';
import {simplify,compile} from "mathjs"
export default class falseposition extends Component{
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
        
          event.preventDefault();falsep();
      
      }
    render(){
        return(
        <div className="content" path="/falseps">
            <form onSubmit={this.handleSubmit}>
            <h2>function: <input  type="text" id="fun"/></h2>
            <h2>x: <input  type="text" id="xl"/></h2>
            <h2>y: <input type2="text" id="xr"/></h2>
            <input  type="submit" value="submit"/>
          

            </form>
            <br/><h2>output</h2>
            <div id="output"> </div>
        </div>    

        );
        
    }
}
function falsep(){
    console.log("aaa");
  var xl=parseFloat(document.getElementById("xl").value);
  
  var  xr=parseFloat(document.getElementById("xr").value);
  function fx(x){
    const fun=document.getElementById("fun").value;
    
    const simplified=simplify(fun);
   
    var sum=simplified.evaluate({x:x});
    
    return sum;

  }
  function search(xl,xr){
    return (xl*fx(xr)-xr*fx(xl))/(fx(xr)-fx(xl));
  }
  var t=" ";
  var c=0,xm=0;
  var xo=xr;
  var e=10;
  while(e>=0.000001){
      xm=search(xl,xr);
      e=Math.abs((xm-xo)/xm).toFixed(8);
      c++;
      
      if(fx(xm)*fx(xl)>0){
          xl=xm;  
        
      }
      else{
          xr=xm;
         
      }
      xo=xm;
    t+="Iteration"+c+"<br></br>";
    t+= " X: "+ xm.toFixed(6) + "<br></br>";
  }
  
  console.log(xm);
  document.getElementById("output").innerHTML=t+" ";
}
