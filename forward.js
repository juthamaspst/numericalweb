import React, {Component} from "react";
import {simplify} from "mathjs";
import './EpicMenu.css';
export default class forward extends Component{
    constructor(props){
        super(props);
        this.state={value: ''};
  
        
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleSubmit2 = this.handleSubmit2.bind(this);
      }
     
    
      handleSubmit(event) {
        
          event.preventDefault();Forwardd();
      
      }
      
      handleSubmit2(event) {
        
        event.preventDefault();forward2();
    
    }
    render(){
        return(
            <div className="content" path="/fwd">
                <form onSubmit={this.handleSubmit} >
                    <h2>  function: <input  type="text" id="fun"/></h2>
                    <h2> x: <input  type="text" id="x" placeholder="start"/></h2>
                    <h2> h: <input  type="text" id="h" /></h2>
                    <input type="submit" value="submit" />
                   
                 </form><br/>
                <form   onSubmit={this.handleSubmit2}>
                <input type="submit" value="submit (h)2" />
                </form>
                <br/><h2>output Error of order (h)</h2>
                <div id="output">
                <tr></tr><td><center>f'(x)</center></td><td><center><b><p id= "fx1"> </p></b></center></td>
				<tr><td><center>f''(x)</center></td><td><center><b><p id= "fx2"> </p></b></center></td></tr>
				<tr><td><center>f'''(x)</center></td><td><center><b><p id= "fx3"></p></b></center></td></tr>
				<tr><td><center>f''''(x)</center></td><td><center><b><p id= "fx4"> </p></b></center></td></tr>
                </div>
                <br/><h2>output Error of order (h)2</h2>
                <div id="output">
                <tr></tr><td><center>f'(x)</center></td><td><center><b><p id= "fx11"> </p></b></center></td>
				<tr><td><center>f''(x)</center></td><td><center><b><p id= "fx22"> </p></b></center></td></tr>
				<tr><td><center>f'''(x)</center></td><td><center><b><p id= "fx33"></p></b></center></td></tr>
				<tr><td><center>f''''(x)</center></td><td><center><b><p id= "fx44"> </p></b></center></td></tr>
                </div>
            </div>
        );


    }
}
function Forwardd(){
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
    var s1=x+h,s2=x+h+h,s3=s2+h,s4=s3+h;console.log(s1);
    var sum1 = (fx(s1)-fx(x))/h ; console.log(sum1);
    var sum2 = ((fx(s2)-(2*fx(s1))+fx(x)))/(Math.pow(h,2)) ;
   var  sum3 = ((fx(s3)-(3*fx(s2))+(3*fx(s1))-fx(x)))/(Math.pow(h,3)) ;
    var sum4 = ((fx(s4)-(4*fx(s3))+(6*fx(s2))-(4*fx(s1))+fx(x)))/(Math.pow(h,4)) ;
    document.getElementById("fx1").innerHTML=sum1;
    document.getElementById("fx2").innerHTML=sum2;
    document.getElementById("fx3").innerHTML=sum3;
    document.getElementById("fx4").innerHTML=sum4;
}
function forward2(){
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
    var s1=x+h,s2=x+h+h,s3=s2+h,s4=s3+h,s5=s4+h;console.log(s1);
    var sum1=((-fx(s2))+(4*fx(s1))-(3*fx(x)))/(2*h);
    var sum2=((-fx(s3))+(4*fx(s2))-(5*fx(s1))+(2*fx(x)))/Math.pow(h,2);
    var sum3=((-3*fx(s4))+(14*fx(s3))-(24*fx(s2))+(18*fx(s1))-(5*fx(x)))/(2*Math.pow(h,3));
    var sum4=((-2*fx(s5))+(11*fx(s4))-(24*fx(s3))+(26*fx(s2))-(14*fx(s1))+(3*fx(x)))/Math.pow(h,4);
    document.getElementById("fx11").innerHTML=sum1;
    document.getElementById("fx22").innerHTML=sum2;
    document.getElementById("fx33").innerHTML=sum3;
    document.getElementById("fx44").innerHTML=sum4;
}
