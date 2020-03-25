import React, {Component} from "react";

import './EpicMenu.css';
import {simplify,derivative} from "mathjs"
export default class newton extends Component{
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
        
          event.preventDefault();newtonss();
      
      }
    render(){
        return(
            <div className="content" path="/newton">
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
function newtonss(){
    var  x1=parseFloat(document.getElementById("x1").value);
    function fx(x){
      const fun=document.getElementById("fun").value;
      
      const simplified=simplify(fun);
     
      var sum=simplified.evaluate({x:x});
      
      return sum;
  
    }
    function searchdiv(x){
        var expression = document.getElementById("fun").value;
        var  expr = derivative(expression,'x');
        let scope = {x:parseFloat(x)};
        var sum = expr.eval(scope);
            return sum ;
    }
    var ans=" ";
    var c=0;
    var err=100;
    while(err>0.001){
        var fxx=fx(x1);
        var fxdiv=searchdiv(x1);
        console.log(fxdiv);
        var xo=x1;
        x1=x1-(fxx/fxdiv);
        if(c>0){
            err=Math.abs((x1-xo)/x1);
            ans+="Iterarion  "+c+"<br></br>";
            ans+="x:"+x1.toFixed(6)+"<br></br>";
            ans+="error:"+err.toFixed(6)+"<br></br>";
            console.log(err);
            console.log(x1);

        }
        c++;

    }
    document.getElementById("output").innerHTML=ans+" ";
}
