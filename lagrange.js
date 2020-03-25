import React, {Component} from "react";

import './EpicMenu.css';


export default class lagrange extends Component{
    constructor(props){
        super(props);
        this.state={value: ''};
         this.handleSubmit = this.handleSubmit.bind(this);
    }
      handleSubmit(event) {
       
          event.preventDefault();lagrang();
      
      }
    render(){
        return(
            <div className="content" path="/lagran">
                    <h3>Linear lagrange</h3>
                <h5>Example</h5> <br/> 
               
                <div>
                    <table >
                    <tr><th><center>X</center></th><th>F(x)</th></tr> 
                    
                    <tr align="center"><td>2</td><td>0.2339</td></tr>
            
                    <tr align="center"><td>4</td><td>-0.3971</td></tr>
                   
                    </table>
                   

                </div>
                <form onSubmit={this.handleSubmit} >
                    <h2>Xfind: <input  type="text" id="xf" size="3"/></h2>
                    <input  type="submit" value="submit"/>

                </form>
                <br/><h2>output</h2>
                <table id="output" border="1" >  </table>
            </div>
        );
    }
}
function lagrang(){
    var  xf=parseFloat(document.getElementById("xf").value);
    var x=[2,4];
    var fx=[0.2339,(-0.3971)];
    var l0=(x[1]-xf)/(x[1]-x[0]);
    var l1=(x[0]-xf)/(x[0]-x[1]);
    var ans=(l0*fx[0])+(l1*fx[1]);console.log(ans);
    document.getElementById("output").innerHTML=ans.toFixed(6)+" ";
}