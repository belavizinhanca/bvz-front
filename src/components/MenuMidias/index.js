import React, { useState, useEffect, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import AuthContext from '../contexts'

import { TOKEN_KEY, getToken } from "../../components/services/auth";

import './menumidias.css'
import Poplogin from '../poplogin'



 const BaseMenu = () => {
    
        var {nome, setNome, signed, setSigned} = useContext(AuthContext);

         


      useEffect( () => {

        var token = localStorage.getItem(TOKEN_KEY);
        
         if(!token){
            setSigned(false)
   
         }else {
            fetch("http://localhost:4000/api/vertoken" ,{
             method: "GET",
             body:undefined,
             headers:{
               "Content-Type": "application/json",
               "auth":`Bearer ${token}`
             }
           }).then(response => response.json())
             .then( async (responseJson) =>  {
                await setSigned(responseJson.success)
                if(signed){
                  return {nome}
                }

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