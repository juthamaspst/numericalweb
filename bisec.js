import React, {Component} from "react";
//import ReactDOM from "react-dom";
//import {evaluate,parse} from "mathjs"
import {simplify} from "mathjs"
import './EpicMenu.css';
//import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";


export default class bisec extends Component {
  
    //onclick="bisection()"
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
      
        event.preventDefault();bisection();
    
    }
    render() {
          //
          //const f= parse('(x^4) * 3')
          ///const simplified = simplify(f)
          //console.log(simplified.toString())'3 * x'
          //console.log(simplified.evaluate({ x: 4 }))  <button onclick={this.bisection} >ok</button>
        

        return (
         
        <div className="content">
          <form path="/bisec"onSubmit={this.handleSubmit} >
           <h2>  function: <input  type="text" id="fun"/></h2>
            <h2>  x: <input  type="text" id="xl" /></h2>
            <h2>  y: <input type2="text" id="xr"/></h2>
           <input  type="submit" value="submit"/>

          </form>

          <br/><h2>output</h2>
          <div id="output"> </div>
             
                
        
          
        </div>
        );
        
      }
       
    
}
function bisection(){
  console.log("aaa");
  var xl=parseFloat(document.getElementById("xl").value);
  
  var  xr=parseFloat(document.getElementById("xr").value);
  function fx(x){
    const fun=document.getElementById("fun").value;
    
    const simplified=simplify(fun);
    //let scope={x:parseFloat(x),y:parseFloat(x),z:parseFloat(x)};
    var sum=simplified.evaluate({x:xl,y:xr});
    console.log("s"+sum);return sum;

  }
  var xm=0;
  var t=" ";
  var c=0,err=100.0;
  while(xr-xl>0.000001){
    var xo=xm;
    var fxl=fx(xl);
    var fxr=fx(xr);
    xm=(xl+xr)/2;
    var fxm=fx(xm);
    if(c>0){
      err=Math.abs((xm-xo)/xm);
      if(err>0.000001){
        t+= "Iteration = "+c + "<br></br>";
        t+= " X = "+xm + "<br></br>";
        t+= " Error = "+err + "<br></br>";
        t+= "_____________________________"+"<br></br>";
        console.log(c);
        console.log(xm);
        console.log(err);
      }

    }
    if(fxl*fxm>0){
      xl = xm ;
    }else{
      xr = xm ;
    }
    c++;
  }
  document.getElementById("output").innerHTML=t+" ";
  
  
  
    //ct++;

  
  ///var ans=(fun,x) => simplified.evaluate({x:xl,y:xr})
 // console.log(simplified.evaluate({x:xl,y:xr}))
 
  
  
  /*var result= [" "]
     
  
   const ans=(fun,x) => parse(fun).evaluate({x:x})
    const err=(xm0,xm)=>Math.abs((xm-xm0)/xm)
    const fxm=(xl,xr)=>(xl+xr)/2
    var xm=0,xm0=0,i=0,xr=0,xl=0,ef=0
    while(err(xm0,xm)>=ef||i<=1){
      xm0=xm
      xm=fxm(xl,xr)
      if((ans(fun,x)*ans(fun,x))>0){
        xr=xm
        console.log(xr+' '+ans)
        
      }
        
      else{
        xl=xm
        console.log(xl+' '+ans)
        
  
      }
      result.push({
        i: i,
        x: xm.toFixed(6),
       
        fx: ans(fun,xm).toFixed(6),
        er: err(xm0,xm).toFixed(6),
        
      });
      i++
    }*/
}//
//ReactDOM.render(<bisec />, document.getElementById('root'));