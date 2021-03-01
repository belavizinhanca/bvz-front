import React from 'react'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'

import './menumidias.css'

function BaseMenu() {

   

    return(
        <Navbar  variant="light" expand="lg">
        <Container>
            
                    <ion-icon className="sign-in" size="large" name="person-circle-outline" id="sign-in" /> 
        </Container>
        </Navbar>
    )
}

const Menumidias = withRouter(BaseMenu)

export default Menumidias;