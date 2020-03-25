import React, {Component} from "react";

import './EpicMenu.css';


export default class ludecom extends Component{
    constructor(props){
        super(props);
        this.state={value: ''};
    
       
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleSubmitt = this.handleSubmitt.bind(this);
      }
     
    
      handleSubmit(event) {
       
          event.preventDefault();create(); 
      
      }
      handleSubmitt(event) {
     //
          event.preventDefault();ludecompo();
         
      
      }
    render(){
        return(
            <div className="content" path="/ludecomp">
                 <form onSubmit={this.handleSubmit} >
                        <h5>Size of Matrix A:  <input type="text" size="1" id="ss"  placeholder="3"/></h5>
                       <h2><input  type="submit" value="create"/></h2>
                        <br/><h2>Input</h2>
                   
                    
                </form>
                <div>
                    <div class="card-body">
                        <form id="form2" onSubmit={this.handleSubmitt}>
                            <div id="myDiv"></div><br/>
                            <input  type="submit" value="submit" id="submit"/>
                        </form>

                    </div>
                </div>
               
                <br/><h2>output</h2>
                <table id="output" border="1" > 
                
                </table>
            </div>
        );
    }
}


var cnum;
var x=[],b=[];
function create(){
    var n=document.getElementById("ss").value[0];
    cnum=n;
    document.getElementById('myDiv').innerHTML = ''
    console.log(cnum);
  
    for(var i=0;i<n;i++){
        x.push([]);
    }
    for(var ii=0;ii<n;ii++){
        for(var j=0;j<n;j++){
           x[ii].push(document.createElement("input"));
            x[ii][j].setAttribute("type", "text");
            x[ii][j].setAttribute("id", "in"+ii+""+j);
           
           x[ii][j].setAttribute("size","1");


        }
    }
    for(var k=0;k<n;k++){
        b.push(document.createElement("input"));
       b[k].setAttribute("type", "text");
        b[k].setAttribute("id", "ans"+k);
       
        b[k].setAttribute("size","5");


     }
     for(var l=0;l<n;l++){ 
            var para = document.createElement("div");
            //para.setAttribute("class", "row");

            for(var jj=0;jj<n;jj++){
                var col= document.createElement("div");
                col.appendChild(x[l][jj]);
                x[l][jj].setAttribute("placeholder", "x"+(jj+1));
                para.appendChild(col)

            }
            
        para.insertAdjacentHTML( 'beforeend'," = ");
       var cl= document.createElement("div");
        cl.appendChild(b[l]);
        b[l].setAttribute("placeholder", "b"+(l+1));
        para.appendChild(cl)

        document.getElementById("myDiv").appendChild(para);

    
    }
    /*var s= document.createElement("INPUT");
     s.setAttribute("type","submit")
     s.setAttribute("value","submit")
     s.setAttribute("id","sum")
     s.setAttribute("class","btn btn-lg btn-primary btn-block  mb-2 size-1")
   
     document.getElementById("myDiv").appendChild(s);  */
    
   
}
function ludecompo(){
    /*var a11=x[0][0].value;
    var a12=x[0][1].value;
    var a13=x[0][2].value;
    var a21=x[1][0].value;
    var a22=x[1][1].value;
    var a23=x[1][2].value;
    var a31=x[2][0].value;
    var a32=x[2][1].value;
    var a33=x[2][2].value;
    var b1=b[0].value;
    var b2=b[1].value;
    var b3=b[2].value;
    a11 = parseFloat(a11);
    a12 = parseFloat(a12);
    a13 = parseFloat(a13);
    a21 = parseFloat(a21);
    a22 = parseFloat(a22);
    a23 = parseFloat(a23);
    a31 = parseFloat(a31);
    a32 = parseFloat(a32);
    a33 = parseFloat(a33);
    b1= parseFloat(b1);
    b2 = parseFloat(b2);
    b3 = parseFloat(b3);*/
    
  
   var A=[[x[0][0].value,x[0][1].value,x[0][2].value],
   [x[1][0].value,x[1][1].value,x[1][2].value],[x[2][0].value,x[2][1].value,x[2][2].value]];
   var B=[b[0].value,b[1].value,b[2].value] 
   console.log(A);console.log(B);
   var X = [0,0,0],Y = [0,0,0];
    var L = Array.from(Array(3),_=> Array(3).fill(0))
    var U = Array.from(Array(3),_=> Array(3).fill(0))
  
    for(var i=0;i<A.length;i++){
        for (var j=0;j<A.length;j++){
            if(j>i){
                U[i][j] = A[i][j];
               
            } 
            else{
                if(i===j){
                    U[i][j] = 1; ;
                }
                L[i][j] = A[i][j];
               ;
            }
        }
    }
    for(var k=0;k<A.length;k++){
        for(i=0;i<A.length;i++){
            for(j=0;j<A.length;j++){
                if(i>k){
                    if(j!==k){
                        U[k][i] -= L[k][j] * U[j][i]; }
                }
                else{
                    if(j!==i){
                        L[k][i] -= L[k][j] * U[j][i];}
                }
            }
                if(k>=i) {
                L[k][i] /= U[i][i];}
                else{
                U[k][i] /= L[k][k];}
        }
    }
    for(i=0;i<A.length;i++){
       // console.log(B[i]);//B[]={9,13.5,1.2941175}
        //console.log("+"+L[i][i]);//L[]={-2,8.5,1.2941176}
       Y[i] = (B[i] / L[i][i]).toFixed(6)//forward
       for(j=i+1;j<A.length;j++){
            B[j] -= L[j][i] * Y[i];}
             
    }
    for(i=A.length-1;i>=0;i--) {
        //console.log("2-"+Y[i]);//Y[]={1.000000,1.999990,-1}
        //console.log("3-"+U[i][i]);//U[]={1,-1,1}
        X[i] = (Y[i] / U[i][i]).toFixed(6)//backward
        for (j =i-1;j>=0;j--){
           Y[j] -= U[j][i] * X[i];}
           
    }
    var x1=X[0];
    var x2=X[1];
    var x3=X[2];
    x1=parseInt(x1);
    x2=parseInt(x2);
    x3=parseInt(x3);
    
       document.getElementById("output").innerHTML= "x1:     "+x1+"    x2:       "+x2+"  x3:     "+x3;
    console.log(X)

    
}