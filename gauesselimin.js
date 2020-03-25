import React, {Component} from "react";

import './EpicMenu.css';



export default class elim extends Component {
    constructor(props){
        super(props);
        this.state={value: ''};
    
        this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
        
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
       
          event.preventDefault();create();
      
      }
      handleSubmitt(event) {
       
        event.preventDefault();gausselim();
    
    }
     
        render(){
            return(
                <div className="content" path="/eliminate">
                   <form onSubmit={this.handleSubmit} >
                        <h5>Size of Matrix A:  <input type="text" size="1" id="ss"  placeholder="3"/></h5>
                        <h2><input  type="submit" value="create"/></h2>

                    </form>
                    <div class="row">
                        <h2> input</h2>
                        <form id="form2" onSubmit={this.handleSubmitt} >
                            <div id="myDiv" ></div>
                            <input  type="submit" value="submit" id="submit"/>
                        </form> 
                    </div>
                    <br/>
                    <div >
                            <br/><h2>output</h2>
                        <table id="output"  border="1">
                                
                        </table>

                    </div>
                
              
                
               
               
               
                </div>
            );
        }
}


 var x=[],b=[];
function create(){
    var n=document.getElementById("ss").value[0];
  
    document.getElementById('myDiv').innerHTML = ''
  
    console.log(n);
   
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

}
function gausselim(){
        console.log("aa");
        var a11=x[0][0].value;
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
     b3 = parseFloat(b3);
     var temp = a21;
       
     a21 = a21 - ((temp*a11)/a11);
     a22 = a22 - ((temp*a12)/a11);
     a23 = a23 - ((temp*a13)/a11);
     b2 =  b2 - ((temp*b1)/a11);
  
     //clear a31
     
     temp = a31;
     a31 = a31 - ((temp*a11)/a11);
     a32 = a32 - ((temp*a12)/a11);
     a33 = a33 - ((temp*a13)/a11);
     b3 =  b3 - ((temp*b1)/a11);
     
     
     //clear a32
     
     temp = a32;
     a31 = a31 - ((temp*a21)/a22);
     a32 = a32 - ((temp*a22)/a22);
     a33 = a33 - ((temp*a23)/a22);
     b3 =  b3 - ((temp*b2)/a22);
  
      var x3 = b3/a33;
       var x2 = (b1-(a23*x3))/a22;
       var x1 = (b1-(a12*x2)-(a13*x3))/a11;
       x1=Math.ceil(x1.toFixed(6));
       x2=Math.ceil(x2.toFixed(6));
       x3=Math.ceil(x3.toFixed(6));
       document.getElementById("output").innerHTML= "x1:     "+x1+"    x2:       "+x2+"  x3:     "+x3;

    
}


