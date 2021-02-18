import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap'
import logo from './logo.jpg'

import './Menu.css'

function BaseMenu() {
    return(
        <Navbar bg="white" variant="light" fixed="top" expand="lg">
        <Container>
            <Navbar.Brand href="/" to="/"><Image src={logo} alt="Logo Bela Vizinhança" width="60" height="60"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="/" to="/">Home</Nav.Link>
                <Nav.Link href="/quem-somos" to="/quem-somos">Quem Somos</Nav.Link>
                <NavDropdown title="Como Ajudar?" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/mediador" to="/mediador">Mediador</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/doacao" to="/doacao">Doação</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/contato" to="/contato">Contato</Nav.Link>
                <Nav.Link href="/app" to="/app">App</Nav.Link>
                <Nav.Link href="/entrar" to="/entrar" className="link-login">
                    Entrar <ion-icon className="sign-in" size="large" name="person-circle-outline" id="sign-in" />
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

const Menu = withRouter(BaseMenu)

export default Menu;