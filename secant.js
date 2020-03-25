import React, {Component} from "react";

import './EpicMenu.css';
import {simplify,compile} from "mathjs"
export default class secant extends Component{
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
        
          event.preventDefault();Secant();
      
      }
    render(){
        return(
            <div className="content" path="/secant">
                 <form onSubmit={this.handleSubmit}>
                    <h2>function: <input  type="text" id="fun"/></h2>
                    <h4>x0: <input  type="text" id="x0"/></h4>
                    <h4>x1: <input  type="text" id="x1"/></h4>
                  
                    <input  type="submit" value="submit" />
                

                </form>
                <br/><h2>output</h2>
                <div id="output" > </div>
            </div>
        );

    }
}
function Secant(){
    var  x=parseFloat(document.getElementById("x0").value);
    var  xn=parseFloat(document.getElementById("x1").value);
    function fx(x){
      const fun=document.getElementById("fun").value;
      const simplified=simplify(fun);
      var sum=simplified.evaluate({x:x});
      return sum;
    }
    function searchdx(fxo,fx,x,xn){
        return (fxo-fx)/(x-xn);
  
    }
    function searchxn(xn,fx,fxdiv){
        return xn-(fx/fxdiv);
    }
    var ans=" ";
    var c=0,err=100.0;
    
    while(err>0.001){
        var fxn=fx(xn);
        var fxo=fx(x);
        var fxdiv=searchdx(fxo,fxn,x,xn);
      x=xn;
      xn=searchxn(xn,fxn,fxdiv);
      if(c>0){
          err=Math.abs((xn-x)/xn);
          ans+="Iterarion"+c+"<br></br>";
          ans+="x:"+xn.toFixed(6)+"<br></br>";
          ans+="error:"+err.toFixed(6)+"<br></br>";
          console.log(c);
          console.log(xn);
          console.log(err);

      }
      c++;

    }
    document.getElementById("output").innerHTML=ans+" ";
}