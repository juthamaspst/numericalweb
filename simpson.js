import React, {Component} from "react";
import {simplify} from "mathjs";
import './EpicMenu.css';
import {integral} from "mathjs-simple-integral";
export default class simpson extends Component{
    constructor(props){
        super(props);
        this.state={value: ''};
  
        
         this.handleSubmit = this.handleSubmit.bind(this);
      }
     
    
      handleSubmit(event) {
        
          event.preventDefault();simson();
      
      }
        render(){
            return(
                <div className="content" path="simpson">
                         <form onSubmit={this.handleSubmit} >
                    <h2>  function: <input  type="text" id="fun"/></h2>
                    <h2> a: <input  type="text" id="src" placeholder="start"/></h2>
                    <h2>  b: <input  type="text" id="dest" placeholder="end"/></h2>
                    <input type="submit" value="submit" />
                   
                 </form>

                <br/><h2>output</h2><h4>ค่าประมาณของการอินทิเกรต</h4>
                <div id="output"> </div>
                

                </div>
            );
        }

}
function simson(){
    var A = document.getElementById("src").value;
    var B = document.getElementById("dest").value;

    function fx(x){
        const fun=document.getElementById("fun").value;
        
        const simplified=simplify(fun);
        
        var sum=simplified.evaluate({x:(x)});
        //console.log("s"+sum);
        return sum;
    
    }
   
    var h=(B-A)/2;
   
    var ans=" ";
    var fxx=new Array(2);
    var nw=A;
   
    for(var i=0;i<3;i++){
             fxx[i]=fx(nw);
             nw=parseInt(nw+h);
    
    }
    
    
   
    ans=(h*(fxx[0]+fxx[2]+4*(fxx[1])))/3;
    document.getElementById("output").innerHTML=ans;
}