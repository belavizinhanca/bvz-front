import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import logo from '../images/logobvznovoLinha.png'

import './Menu.css'
import Poplogin from '../poplogin';

const BaseMenu = () => {
  
    return(
        <Navbar className="menu-major" fixed="top" variant="dark" expand="lg">
        <Container>

            <Navbar.Brand href="/" to="/"><Image src={logo} alt="Logo Bela Vizinhança" width="320" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="/" to="/">Home</Nav.Link>
                <Nav.Link href="/quem-somos" to="/quem-somos">Quem Somos</Nav.Link>
                <Nav.Link href="/doacao" to="/doacao">Doação</Nav.Link>
                <Nav.Link href="/servicos-uteis" to="/servicos-uteis">Serviços</Nav.Link>             
                <Nav.Link href="/contato" to="/contato">Contato</Nav.Link>
                <Nav.Link show="false" href="/gerenciar" to="/gerenciar">Gerenciar</Nav.Link>
                <Nav.Link href="/app" to="/app">App</Nav.Link>
             
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

const Menuex = withRouter(BaseMenu)

export default Menuex;