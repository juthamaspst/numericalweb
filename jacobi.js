import React, {Component} from "react";

import './EpicMenu.css';


export default class jacobi extends Component{
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
   
          event.preventDefault();jacobii();
         
      
      }
    render(){
        return(
            <div className="content" path="/jacobb">
                     <form onSubmit={this.handleSubmit} >
                        <h5>Size of Matrix A:  <input type="text" size="1" id="ss" placeholder="4"/></h5>
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
                <table id="output" > 
                
                </table>
            </div>
        );
    }
}


var x=[],b=[],xx=[];
function create(){
    var n=document.getElementById("ss").value[0];
   
    document.getElementById('myDiv').innerHTML = ''

  
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
    /*  for(var h=0;h<n;h++){
         xx.push(document.createElement("input"));
         xx[h].setAttribute("type", "text");
         xx[h].setAttribute("id", "inti"+h);
        
         xx[h].setAttribute("size","5");
         xx[h].setAttribute("placeholder", "xx"+(h+1));

     }*/
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
    
    /*for(var hh=0;hh<n;hh++){
            var c=document.createElement("div");

            c.appendChild(xx[hh]);
            para.appendChild(c);
            document.getElementById("myDiv").appendChild(para);

    }*/
}
var n=0;
function jacobii(){
    var a11=x[0][0].value;
    var a12=x[0][1].value;
    var a13=x[0][2].value,a14=x[0][3].value;
    var a21=x[1][0].value;
    var a22=x[1][1].value;
    var a23=x[1][2].value,a24=x[1][3].value;
    var a31=x[2][0].value;
    var a32=x[2][1].value;
    var a33=x[2][2].value,a34=x[2][3].value;
    var a41=x[3][0].value;
    var a42=x[3][1].value;
    var a43=x[3][2].value;
    var a44=x[3][3].value;
    var b1=b[0].value;
    var b2=b[1].value;
    var b3=b[2].value;
    var b4=b[3].value;
    var A=[[a11,a12,a13,a14],[a21,a22,a23,a24],[a31,a32,a33,a34],[a41,a42,a43,a44]];
  

   var B=[b1,b2,b3,b4];
  
    const e = (xn,xo) => Math.abs((xn-xo)/xn)*100
    
    var xo=[0,0,0,0],xn=[0,0,0,0]
   var t=" ";
    while(n<1 || ((e(xn[0],xo[0])>0.001)||(e(xn[1],xo[1])>0.001)||(e(xn[2],xo[2])>0.001)||(e(xn[3],xo[3])>0.001))){
        if(n>0){
            xo=xn.slice()
        }
        for(var i=0;i<A.length;i++){
            xn[i]=B[i]
            for(var j=0;j<A.length;j++){
                if(i!==j){
                    xn[i]-=(A[i][j]*xo[j])
                }
            }
            xn[i]=xn[i]/A[i][i]
        }
        n++;console.log(n);
        


    }
    var nn=n-1;
    t+="Iteration"+nn+"<br></br>";
  
    console.log("\nInteration="+(n-1))
    for(i=0;i<A.length;i++){
        //console.log("x"+(i+1)+"="+xn[i].toFixed(6))
          t+= " X"+(i+1)+":" +xn[i].toFixed(6) + "<br></br>";
    }
    document.getElementById("output").innerHTML=t+" ";

}