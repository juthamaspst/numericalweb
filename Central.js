import React, {Component} from "react";
import {simplify} from "mathjs";
import './EpicMenu.css';
export default class central extends Component{
    constructor(props){
        super(props);
        this.state={value: ''};
  
        
         this.handleSubmit = this.handleSubmit.bind(this);
      }
     
    
      handleSubmit(event) {
        
          event.preventDefault();Central();
      
      }
    render(){
        return(
            <div className="content" path="/bwd">
                <form onSubmit={this.handleSubmit} >
                    <h2>  function: <input  type="text" id="fun"/></h2>
                    <h2> x: <input  type="text" id="x" /></h2>
                    <h2> h: <input  type="text" id="h" /></h2>
                    <input type="submit" value="submit" />
                   
                 </form>

                <br/><h2>output Error of order (h)2</h2>
                <div id="output">
                <tr></tr><td><center>f'(x)</center></td><td><center><b><p id= "fx1"> </p></b></center></td>
				<tr><td><center>f''(x)</center></td><td><center><b><p id= "fx2"> </p></b></center></td></tr>
				<tr><td><center>f'''(x)</center></td><td><center><b><p id= "fx3"></p></b></center></td></tr>
				<tr><td><center>f''''(x)</center></td><td><center><b><p id= "fx4"> </p></b></center></td></tr>
                </div>
            </div>
        );


    }
}
function Central(){
    var x = document.getElementById("x").value;
    var h=document.getElementById("h").value;
    x=parseFloat(x);
    h=parseFloat(h);
    function fx(x){
        const fun=document.getElementById("fun").value;
        
        const simplified=simplify(fun);
        
        var sum=simplified.evaluate({x:x});
        return sum;
    
    } 
    var s1=x+h,s11=x-h;
    var s2=s1+h,s22=s11-h;
    var sum1=(fx(s1)-fx(s11))/(2*h);
    var sum2=(fx(s1)-(2*fx(x))+fx(s11))/Math.pow(h,2);
    var sum3=(fx(s2)-(2*fx(s1))+(2*fx(s11))-(fx(s22)))/(2*Math.pow(h,3));
    var sum4=(fx(s2)-(4*fx(s1))+(6*fx(x))-(4*fx(s11))+fx(s2))/Math.pow(h,4);
    document.getElementById("fx1").innerHTML=sum1;
    document.getElementById("fx2").innerHTML=sum2;
    document.getElementById("fx3").innerHTML=sum3;
    document.getElementById("fx4").innerHTML=sum4;
}