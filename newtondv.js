import React, {Component} from "react";

import './EpicMenu.css';


export default class newtondv extends Component{
    constructor(props){
        super(props);
        this.state={value: ''};
    
       
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleSubmitQ = this.handleSubmitQ.bind(this);
         this.handleSubmitP = this.handleSubmitP.bind(this);
        
      }
     
    
      handleSubmit(event) {
       
          event.preventDefault();newtondevide();
      
      }
      handleSubmitQ(event) {
        event.preventDefault();newtonquard(); 
    
        }
      handleSubmitP(event) {
        event.preventDefault();newtonpoly(); 
    
        }
    render(){
        return(
            <div className="content" path="/ndd" >
                <h3>Linear Interpolation"  "Quardatic Interpolation</h3>
                <h5>Example</h5> <br/> 
               
                <div>
                    <table >
                    <tr><th><center>X</center></th><th>F(x)</th></tr> 
                    
                    <tr align="center"><td>2</td><td>0.2239</td></tr>
                    <tr align="center"><td>3</td><td>0.55</td></tr>
                    <tr align="center"><td>4</td><td>0.3971</td></tr>
                   
                    </table>
                   

                </div>
                <form onSubmit={this.handleSubmit} >
                   
                    <h2>  x1: <input  type="text" id="x0" size="3" /></h2>
                    <h2>  x2: <input type2="text" id="x1" size="3"/></h2>
                    <h2>Xfind: <input  type="text" id="xf" size="3"/></h2>
                    <input  type="submit" value="submit"/>

                </form>
                <h2>output</h2>
                <table id="output" border="1" >  </table>
                
                <div className="content2" >
                    <br/>
                   <br/>
                   <br/>
                   <div>
                    <table >
                    <tr><th><center>X</center></th><th>F(x)</th></tr> 
                    
                    <tr align="center"><td>2</td><td>0.2239</td></tr>
                    <tr align="center"><td>3</td><td>0.55</td></tr>
                    <tr align="center"><td>4</td><td>0.3971</td></tr>
                   
                    </table> <br/>
                   

                    </div>
                
                    <form onSubmit={this.handleSubmitQ} >
                    
                   
                    <h3>Xfind: <input  type="text" id="xff" size="3"/></h3>
                    <input  type="submit" value="submit"/>

                    </form>
                    <br/><h2>output</h2>
                    <table id="output2" border="1" >  </table>
               
                </div>
                <div>
                <br/>
                  
                   <div>
                    <h3>Polynomial Interpolation</h3>
                    <table >
                    <tr><th><center>X</center></th><th>F(x)</th></tr> 
                    
                    <tr align="center"><td>0</td><td>9.81</td></tr>
                    <tr align="center"><td>20000</td><td>9.7487</td></tr>
                    <tr align="center"><td>40000</td><td>9.6879</td></tr>
                    <tr align="center"><td>60000</td><td>9.6879</td></tr>
                    <tr align="center"><td>80000</td><td>9.5682</td></tr>
                    </table> <br/>
                   

                    </div>
                    
                    <form onSubmit={this.handleSubmitP} >
                    
                   
                    <h2>Xfind: <input  type="text" id="xf2" size="3"/></h2>
                    <input  type="submit" value="submit"/>

                    </form>
                    <br/><h2>output</h2>
                    <table id="output3" border="1" >  </table>
                </div>


            </div>
           
                    
            
        );
    }
}
function newtondevide(){
    var  x0=parseFloat(document.getElementById("x0").value);
    var  x1=parseFloat(document.getElementById("x1").value);
    var  xf=parseFloat(document.getElementById("xf").value);
    var fx=[0.2239,0.55,0.3971]
    var c0=fx[0];console.log(c0);
    var c1=(fx[1]-fx[0])/x1-x0;console.log(c1);
 //
    var sumfx=c0+c1*(xf-x0);
    document.getElementById("output").innerHTML=sumfx.toFixed(6)+" ";
  
}
function newtonquard(){
    
    var  xf=parseFloat(document.getElementById("xff").value);
    var x=[2,3,4];
    var fx=[0.2239,0.55,0.3971]
    var c0=fx[0];console.log(c0);
    var c1=(fx[1]-fx[0])/(x[1]-x[0]);console.log(c1);
    var c2=(((fx[2]-fx[1])/(x[2]-x[1]))-c1)/(x[2]-x[0]);console.log(c2);
    var div1=xf-x[0],div2=(xf-x[0])*(xf-x[1]);
    var sumfx=c0+(c1.toFixed(6)*div1)+(c2.toFixed(6)*div2);
    console.log(sumfx);
    document.getElementById("output2").innerHTML=sumfx.toFixed(6)+" ";

}
function newtonpoly(){
    var  xf=parseFloat(document.getElementById("xf2").value);
    var x=[0,20000,40000,60000,80000];
    var fx=[9.81,9.7487,9.6789,9.6789,9.5682];
    var c0=fx[0];console.log(c0);
   
    //col1
    var c10=(fx[1]-fx[0])/(20000-0);console.log("1"+c10);
    var c11=(fx[2]-fx[1])/(40000-20000);console.log("1"+c11);
    var c12=(fx[3]-fx[2])/(60000-40000);console.log("1"+c12);
    var c13=(fx[4]-fx[3])/(80000-60000);console.log("1"+c13);
    //col2
    var c20=(c11)-(c10)/(40000-0);console.log(c20);
    var c21=(c12)-(c11)/(60000-20000);console.log(c21);
    var c22=(c13)-(c12)/(80000-40000);console.log(c22);
    //col3
    var c30=(c21)-(c20)/(60000-0);console.log(c30);
    var c31=(c22)-(c21)/(80000-20000);console.log(c31);
    //col4
    var c4=(c31)-(c30)/(80000-0);console.log(c4);
    
    var div1=xf-x[0],div2=(xf-x[0])*(xf-x[1]);
    var div3=(xf-x[0])*(xf-x[1])*(xf-x[2]);
    var div4=(xf-x[0])*(xf-x[1])*(xf-x[3])*(xf-x[4]);
   // console.log(s0,s1,s2,s3);
   
   var ans=c0+(c10.toFixed(6)*div1)+(c20.toFixed(6)*div2)+(c30.toFixed(6)*div3)+(c4.toFixed(6)*div4) ;
   document.getElementById("output3").innerHTML=ans.toFixed(6)+" ";

}