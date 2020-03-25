import React, {Component} from "react";
import {simplify} from "mathjs";
import './EpicMenu.css';
export default class compS extends Component{
    constructor(props){
        super(props);
        this.state={value: ''};
  
        
         this.handleSubmit = this.handleSubmit.bind(this);
      }
     
    
      handleSubmit(event) {
        
          event.preventDefault();Comps();
      
      }
    render(){
        return(
            <div className="content" path="/comps">
                       <form onSubmit={this.handleSubmit} >
                    <h2>  function: <input  type="text" id="fun"/></h2>
                    <h2> a: <input  type="text" id="src" placeholder="start"/></h2>
                    <h2>  b: <input  type="text" id="dest" placeholder="end"/></h2>
                    <h2>  N: <input  type="text" id="n" /></h2>
                    <input type="submit" value="submit" />
                   
                 </form>

                <br/><h2>output</h2>
                <div id="output"></div>
                

            </div>
        );
    }
}
function Comps(){
    var A = document.getElementById("src").value;
    var B = document.getElementById("dest").value;
    var n=document.getElementById("n").value;
    function fx(x){
        const fun=document.getElementById("fun").value;
        
        const simplified=simplify(fun);
        
        var sum=simplified.evaluate({x:x});
       return sum;
    
    } 
    var h=(B-A)/n;console.log(h);
      var sumev=0;
      var sumod=0;
      
      for(var i=1;i<n;i++){
        if(i%2===0){
          sumev+=fx(parseFloat(A)+h*i);
        }else{
          sumod+=fx(parseFloat(A)+h*i);
        }
      }
      var ans=(h*(fx(A)+(4*sumod)+(2*sumev)+fx(B)))/3
      document.getElementById("output").innerHTML=ans;
}