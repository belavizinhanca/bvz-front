import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'

import api from "../../components/services/api";
import { TOKEN_KEY, getToken } from "../../components/services/auth";

import './menumidias.css'
import Poplogin from '../poplogin'

 class BaseMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          username: undefined,
          email: undefined,
          senha: undefined,
          error: undefined,
          logged: undefined    
         }
    
      }
   
   
   
       componentDidMount(){
         this.verToken();
        
         
         
    
       }
   
      async verToken(){
        
         var token = localStorage.getItem(TOKEN_KEY);
        
         if(!token){
          await this.setState({logged:false})
   
         }
         else {
           await fetch("http://localhost:4000/api/vertoken" ,{
             method: "GET",
             body:undefined,
             headers:{
               "Content-Type": "application/json",
               "auth":`Bearer ${token}`
             }
           }).then(response => response.json())
           
             .then(async (responseJson) =>  {
                await this.setState({logged:responseJson.success} )        
                }
                )
         }
         console.log(this.state.logged);
      }
   


render(){
    return(
        <Navbar fixed="top" variant="light" expand="lg">
            <div className="btn-login">
            <Nav className="ml-auto">
              <Poplogin /> 
            </Nav>
            </div> 
        </Navbar>
    )
}
}
const Menumidias = withRouter(BaseMenu)

export default Menumidias;