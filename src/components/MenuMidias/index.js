import React from 'react'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'

import './menumidias.css'
import Poplogin from '../poplogin'

function BaseMenu() {

   

    return(
        <Navbar fixed="top" variant="light" expand="lg">
            <div className="btn-login">
            <Nav className="ml-auto"><Poplogin /> </Nav>
            </div> 
        </Navbar>
    )
}

const Menumidias = withRouter(BaseMenu)

export default Menumidias;