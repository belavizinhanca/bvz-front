import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'

import { TOKEN_KEY, getToken } from "../../components/services/auth";

import './menumidias.css'
import Poplogin from '../poplogin'



 const BaseMenu = () => {
    

        var [username, setUser] = useState()
        var [logged, setLogged] = useState()    


      useEffect( () => {

        var token = localStorage.getItem(TOKEN_KEY);
        
         if(!token){
            setLogged(false)
   
         }else {
            fetch("http://localhost:4000/api/vertoken" ,{
             method: "GET",
             body:undefined,
             headers:{
               "Content-Type": "application/json",
               "auth":`Bearer ${token}`
             }
           }).then(response => response.json())
             .then( (responseJson) =>  {
               
                setLogged(responseJson.success)
                console.log(logged);    
                }
                )

              }
        }, [])
    
        
         
   
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


const Menumidias = withRouter(BaseMenu)

export default Menumidias;