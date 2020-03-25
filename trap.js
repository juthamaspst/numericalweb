import React, {Component} from "react";
import {simplify} from "mathjs";
import './EpicMenu.css';
export default class trapezoidal extends Component{
    constructor(props){
        super(props);
        this.state={value: ''};
  
        
         this.handleSubmit = this.handleSubmit.bind(this);
      }
     
    
      handleSubmit(event) {
        
          event.preventDefault();trapzd();
      
      }
    render(){
        return(
            <div className="content" path="/trap">
                <form onSubmit={this.handleSubmit} >
                    <h2>  function: <input  type="text" id="fun"/></h2>
                    <h2> a: <input  type="text" id="src" placeholder="start"/></h2>
                    <h2>  b: <input  type="text" id="dest" placeholder="end"/></h2>
                    <input type="submit" value="submit" />
                   
                 </form>

                <br/><h2>output</h2>
                <h4>ค่าประมาณของการอินทิเกรต</h4>
                <div id="output"> 
                </div>
            </div>
        );
    }
}
function trapzd(){
    var A = document.getElementById("src").value;
    var B = document.getElementById("dest").value;

    function fx(x){
        const fun=document.getElementById("fun").value;
        
        const simplified=simplify(fun);
        
        var sum=simplified.evaluate({x:x});
        console.log("s"+sum);return sum;
    
    }
    var ans=" ";
    var h=(B-A);
    ans=(h*(fx(A)+fx(B)))/2;
    console.log(ans);
    document.getElementById("output").innerHTML=ans;
}