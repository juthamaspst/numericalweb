import React, {Component} from "react";
import './EpicMenu.css';

const math=require("mathjs");

export default class cramer extends Component {
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
    //alert('A name was submitted: ' + this.state.value);
      event.preventDefault();cramers();
  
  }
    render(){
         
    
        return(
            <div className="content" path="/cramer">
               <form onSubmit={this.handleSubmit} >
                    
                  <br/><table >
        <tr>
          <td colspan="3"><center>A</center></td>
          <td colspan="1"></td>
          <td colspan="1"><center>X</center></td>
          <td colspan="1"></td>
          <td colspan="1"><center>B</center></td>
        </tr>
        <tr>
          <td> <center>-2</center> </td>
          <td> <center>3</center> </td>
          <td> <center>1</center> </td>
          <td rowspan="3" >  </td>
          <td><center>x1</center></td>
          <td rowspan="3" >  </td>
          <td><center>9</center></td>
        </tr>
        <tr>
          <td> <center>3</center> </td>
          <td> <center>4</center> </td>
          <td> <center>-5</center> </td>
          <td><center>x2</center></td>
          <td><center>0</center></td>
        </tr>
        <tr>
          <td> <center>1</center> </td>
          <td> <center>-2</center> </td>
          <td> <center>1</center> </td>
          <td><center>x3</center></td>
          <td><center>-4</center></td>
        </tr>
      </table> 
                   
              <h2><input  type="submit" value="submit"/></h2>

              </form>
                
              <br/><h2>Output</h2>
              <div id="table" ></div>
              
            </div>
            
        );
    }
}
function cramers(){
  
  
  const A = [
    [(-2), 3, 1],
    [3, 4, (-5)],
    [1, (-2), 1]
  ];
  const B = [9, 0, -4];
  const X = [];
  var detA = math.det(A)
  for(var i =0 ;i< A.length;i++){
      var temp = JSON.parse(JSON.stringify(A));
      for(var j=0;j<A.length;j++){
              temp[j][i] = B[j]
            
      }
      
        X.push(math.ceil(math.det(temp)/detA));
      
      
     //temp=Math.ceil(temp);
      
  }
  console.log(X)
    
     document.getElementById("table").innerHTML = "x1=    "+X[0]+"  x2=   "+X[1]+"   x3=    "+X[2];
     
     
  
 
   
  /*const xl=parseFloat(document.getElementById('ss').value);  console.log(xl)
  for(var i=0;i<=xl*xl;i++){
    
      document.getElementById('output').innerHTML=document.getElementById('output').innerHTML+i;
      var newdiv =document.createElement('div');
      newdiv.innerHTML="<input  size=1/>";
      document.getElementById(divname).appendChild(newdiv);
    
    
  }*/

}
//     <p >{X}</p><h2><input type="text" size="1" id="00"/></h2><h5>size Matrix A:  <input type="text" size="1" id="ss"/></h5>