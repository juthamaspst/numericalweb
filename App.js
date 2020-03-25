
import React, {Component} from "react";
import DropdownButton from 'react-bootstrap/DropdownButton'

import './EpicMenu.css';

import { Route,NavLink} from "react-router-dom";

import bisec from "./Root/bisec";
import falsep from "./Root/falsep";
import onepointt from "./Root/onepoint";
import newton from "./Root/newtonrs"
import secant from "./Root/secant";
import cramer from "./Linear/cramer";
import elim from "./Linear/gauesselimin";
import gauessjd from "./Linear/gauessjd";
import ludecom from "./Linear/LUdecom";
import jacobi from "./Linear/jacobi";
import gausssd from "./Linear/gausssd";
import conjugate from "./Linear/conjugate";
import newtondv from "./Interpolate/newtondv";
import lagrange from "./Interpolate/lagrange";
import spilne from "./Interpolate/spilne";
import trapezoidal from "./Integrate/trap";
import simpson from "./Integrate/simpson";
import compt from "./Integrate/compT";
import compS from "./Integrate/compS";
import linearR from "./regression/linearR";
import forward from "./Diff/forward";
import backward from "./Diff/Backward";
import central from "./Diff/Central";

class App extends Component {
  
  constructor(){
    super();
   
    this.state = {
          displayMenu1: false,
          displayMenu2: false,
          displayMenu3: false,
          displayMenu4: false,
          displayMenu5: false,
          displaMenu6: false

        };
   
     this.showDropdownMenu1 = this.showDropdownMenu1.bind(this);
     this.hideDropdownMenu1 = this.hideDropdownMenu1.bind(this);
     this.showDropdownMenu2 = this.showDropdownMenu2.bind(this);
     this.hideDropdownMenu2 = this.hideDropdownMenu2.bind(this);
     this.showDropdownMenu3 = this.showDropdownMenu3.bind(this);
     this.hideDropdownMenu3 = this.hideDropdownMenu3.bind(this);
     this.showDropdownMenu4 = this.showDropdownMenu4.bind(this);
     this.hideDropdownMenu4 = this.hideDropdownMenu4.bind(this);
     this.showDropdownMenu5 = this.showDropdownMenu5.bind(this);
     this.hideDropdownMenu5 = this.hideDropdownMenu5.bind(this);
     this.showDropdownMenu6 = this.showDropdownMenu6.bind(this);
     this.hideDropdownMenu6 = this.hideDropdownMenu6.bind(this);
    
   };
   
   showDropdownMenu1(event) {
       event.preventDefault();
       this.setState({ displayMenu1: true }, () => {
       document.addEventListener('click', this.hideDropdownMenu1);
       });
    }
    hideDropdownMenu1() {
        
       this.setState({ displayMenu1: false }, () => {
         document.removeEventListener('click', this.hideDropdownMenu1);
       });
    }
     
   showDropdownMenu2(event) {
    event.preventDefault();
    this.setState({ displayMenu2: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu2);
    });
 }
 hideDropdownMenu2() {
     
    this.setState({ displayMenu2: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu2);
    });
 }
 showDropdownMenu3(event) {
  event.preventDefault();
  this.setState({ displayMenu3: true }, () => {
  document.addEventListener('click', this.hideDropdownMenu3);
  });
}
hideDropdownMenu3() {
   
  this.setState({ displayMenu3: false }, () => {
    document.removeEventListener('click', this.hideDropdownMenu3);
  });
}
showDropdownMenu4(event) {
 event.preventDefault();
  this.setState({ displayMenu4: true }, () => {
  document.addEventListener('click', this.hideDropdownMenu4); 
  });
}
hideDropdownMenu4() {
   
  this.setState({ displayMenu4: false }, () => {
    document.removeEventListener('click', this.hideDropdownMenu4);
  });
}
showDropdownMenu5(event) {
  event.preventDefault();
  this.setState({ displayMenu5: true }, () => {
  document.addEventListener('click', this.hideDropdownMenu5);
  });
}
hideDropdownMenu5() {
   
  this.setState({ displayMenu5: false }, () => {
    document.removeEventListener('click', this.hideDropdownMenu5);
  });
}
showDropdownMenu6(event) {
  event.preventDefault();
  this.setState({ displayMenu6: true }, () => {
  document.addEventListener('click', this.hideDropdownMenu6);
  });
}
hideDropdownMenu6() {
   
  this.setState({ displayMenu6: false }, () => {
    document.removeEventListener('click', this.hideDropdownMenu6);
  });
}
 
  
  render(){
     
    return (
      
         <div >
            <navbar className="menu">
                
                <DropdownButton id="dropdown-button" title="Root of Equation" onClick={this.showDropdownMenu1}>
                  { this.state.displayMenu1?(
                      <ul>
                         <li><NavLink to ="/bisec" >Bisection</NavLink></li>
                        <li><NavLink to="/falseps">False Position</NavLink></li>
                        <li><NavLink to="/onepoint">One-Point Iteration</NavLink></li>
                        <li><NavLink to="/newton">Newton-Raphson</NavLink></li>
                        <li><NavLink to="/secant">Secant-Method</NavLink></li>
                      </ul>
                      
                    ):
                    (null)
                
                  }
                </DropdownButton>
                <DropdownButton id="dropdown-button" title="Linear Algebra" onClick={this.showDropdownMenu2} >

                { this.state.displayMenu2?(
                    <ul>
                      <li><NavLink to="/cramer">Cramer's Rule</NavLink></li>
                      <li><NavLink to="/eliminate">Gauss's Elimination</NavLink></li>
                      <li><NavLink to="/jordan">Gauss Jordan Method</NavLink></li>
                      <li><NavLink to="/ludecomp">LU decomposition</NavLink></li>
                      <li><NavLink to="/jacobb">Jacobi Iteration Method</NavLink></li>
                      <li><NavLink to="/gausssd">Gauss Seidel Iteration</NavLink></li>
                      <li><NavLink to="/conjug">Conjugate Gradient Method</NavLink></li>
                    </ul>
                  ):
                  (null)

                }
                </DropdownButton>
                <DropdownButton id="dropdown-button" title="Interpolation" onClick={this.showDropdownMenu3} >
                  { this.state.displayMenu3?(
                    <ul>
                      <li><NavLink to="/ndd">Newton devide difference/</NavLink></li>
                      <li><NavLink to="/lagran">Lagrange</NavLink></li>
                      <li><NavLink to="/spilne">Spline</NavLink></li>
                    </ul>

                    ):
                    (null)
                   
                  }
                  
               </DropdownButton>
               <DropdownButton id="dropdown-button" title="Least Square Regression" onClick={this.showDropdownMenu4}>
                 { this.state.displayMenu4?(
                    <ul>
                      <li><NavLink to="/linear">Linear Regression</NavLink></li>
                      <li><NavLink to="/polynomial">Polynomial Regression</NavLink></li>
                      <li><NavLink to="/muliple">Multiple Linear Regression</NavLink></li>
                    </ul>
                    ):(null)

                 }
                  
               </DropdownButton>
               <DropdownButton id="dropdown-button" title="Integration" onClick={this.showDropdownMenu5}>
                 { this.state.displayMenu5?(
                   <ul>
                      <li><NavLink to="/trap">Trapezoidal rule</NavLink></li>
                      <li><NavLink to="/simpson">Simpson's rule</NavLink></li>
                      <li><NavLink to="/comptt">Composite Trapezoidal rule</NavLink></li>
                      <li><NavLink to="/comps">Composite Simpson's rule</NavLink></li>
                  
                   </ul>
                 ):(null)
                   
                 }
               </DropdownButton>
               <DropdownButton id="dropdown-button" title="Numerical Diffential" onClick={this.showDropdownMenu6}>
                 { this.state.displayMenu6?(
                   <ul>
                      <li><NavLink to="/fwd">Forward devided-difference</NavLink></li>
                      <li><NavLink to="/bwd">Backward devided-difference</NavLink></li>
                      <li><NavLink to="/central">Central devided-difference</NavLink></li>
                      
                  
                   </ul>
                 ):(null)
                   
                 }
               </DropdownButton>
              
                

            </navbar>
                <div className="page">
                    
                     <Route path="/bisec" component={bisec}/>
                     <Route path="/falseps" component={falsep}/>
                     <Route path="/onepoint" component={onepointt}/>
                     <Route path="/newton" component={newton}/>
      
                     <Route path="/secant" component={secant}/>
                      <Route path="/cramer" component={cramer}/>
                     <Route path="/eliminate" component={elim}/>
                     <Route path="/jordan" component={gauessjd}/>
                     <Route path="/ludecomp" component={ludecom}/>
                     <Route path="/jacobb" component={jacobi}/>
                     <Route path="/ndd" component={newtondv}/>
                     <Route path="/lagran" component={lagrange}/>
                     <Route path="/spline" component={spilne}/>
                     <Route path="/gausssd" component={gausssd}/>
                     <Route path="/conjug" component={conjugate}/>
                     <Route path="/trap" component={trapezoidal}/>
                     <Route path="/simpson" component={simpson}/>
                       <Route path="/comptt" component={compt}/>
                       <Route path="/comps" component={compS}/>
                     <Route path="/linear" component={linearR}/>
                     <Route path="/fwd" component={forward}/>
                     <Route path="/bwd" component={backward}/>
                     <Route path="/central" component={central}/>

                   
                   

                     
                     <br/><h5><left>Juthamas Posith 6004062630035</left></h5>
                     
      
                 
                

                 
                
                
                </div>

                

                
                 

                
        </div>
          
        
    );
  }
}

export default App;





