import React, {Component} from "react";
import {simplify} from "mathjs";
import './EpicMenu.css';
export default class compt extends Component{
    constructor(props){
        super(props);
        this.state={value: ''};
  
        
         this.handleSubmit = this.handleSubmit.bind(this);
      }
     
    
      handleSubmit(event) {
        
          event.preventDefault();Compt();
      
      }
    render(){
        return(
            <div className="content" path="/comptt">
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
function Compt(){
    var A = document.getElementById("src").value;
    var B = document.getElementById("dest").value;
    var n=document.getElementById("n").value;
    function fx(x){
        const fun=document.getElementById("fun").value;
        
        const simplified=simplify(fun);
        
        var sum=simplified.evaluate({x:x});
        return sum;
    
    } 
    var ans=" ";
    var h=(B-A)/n;console.log(h);
    var sum = fx(A);
    for(var i = 1 ; i < n ; i++){
        sum += 2*fx(A+(i*h));
    }
    sum += fx(B);
    sum = (h/2)*sum ;
    ans+= sum + "<br></br>";
    document.getElementById("output").innerHTML=ans;
}