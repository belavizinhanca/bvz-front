import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap'
import logo from './logo.jpg'

import './Menu.css'

function BaseMenu() {
    return(
        <Navbar variant="dark" expand="lg" fixed="top">
            <Container>
            <Navbar.Brand className="logo" as={Link} href="/" to="/">
                <Image src={logo} width="60" height="60" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse  id="basic-navbar-nav">
                <Nav className="mr-0 ml-auto">
                    <Nav.Link className="nav-links" href="/" to="/" closeButton>Home</Nav.Link>
                    <Nav.Link className="nav-links" href="/quem-somos" to="/quem-somos">Quem Somos</Nav.Link>
                    <NavDropdown title="Como Ajudar?" className="text-dark nav-links-dropdown">
                        <NavDropdown.Item href="/mediador" to="/mediador">Mediador</NavDropdown.Item>
                        <NavDropdown.Item href="/doacao" to="/doacao">Doação</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="nav-links" href="/contato" to="/contato">Contato</Nav.Link>
                    {/* Botão que irá fazer o login */}
                    <Nav.Link className="nav-links-icon" href="/entrar" to="/entrar">
                        <ion-icon className="sign-in" size="large" name="person-circle-outline" id="sign-in" />
                        Entrar
                    </Nav.Link>
                </Nav>
            
                
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const Menu = withRouter(BaseMenu)

export default Menu;