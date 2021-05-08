import React, { useState, useEffect, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import AuthContext from './contexts'

import { TOKEN_KEY, getToken } from "../services/auth";

import './menumidias.css'
import Poplogin from './Poplogin'
import { keyframes } from 'styled-components';



 const BaseMenu = () => {
    
        var {nome, setNome, signed, setSigned} = useContext(AuthContext);

   
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