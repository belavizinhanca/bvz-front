import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

import './Menu.css'

function BaseMenu() {
    return(
        <Navbar variant="dark" expand="lg" fixed="top">
            <Container>
            <Navbar.Brand className="logo" as={Link} href="/" to="/">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-0 ml-auto">
                    <Nav.Link className="text-white nav-links" href="/" to="/" closeButton>Home</Nav.Link>
                    <Nav.Link className="text-white nav-links" href="/quem-somos" to="/quem-somos">Quem Somos</Nav.Link>
                    <NavDropdown title="Como Ajudar?" className="nav-links-dropdown">
                        <NavDropdown.Item href="/mediador" to="/mediador">Mediador</NavDropdown.Item>
                        <NavDropdown.Item href="/doacao" to="/doacao">Doação</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="text-white nav-links" href="/contato" to="/contato">Contato</Nav.Link>
                    {/* Botão que irá fazer o login */}
                    <Nav.Link className="text-white nav-links" href="/entrar" to="/entrar"><ion-icon className="sign-in" size="large" name="person-circle-outline" id="sign-in" /></Nav.Link>
                </Nav>
            
                
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const Menu = withRouter(BaseMenu)

export default Menu;