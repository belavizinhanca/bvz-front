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
                <Nav className="ml-auto">
                    <Nav.Link className="text-white nav-links" as={Link} href="/" to="/" closeButton>Home</Nav.Link>
                    <Nav.Link className="text-white nav-links" as={Link} href="/quem-somos" to="/quem-somos">Quem Somos</Nav.Link>
                    <NavDropdown title="Como Ajudar?" className="nav-links-dropdown">
                        <NavDropdown.Item href="/mediador" to="/mediador">Mediador</NavDropdown.Item>
                        <NavDropdown.Item href="/doacao" to="/doacao">Doação</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="text-white nav-links" as={Link} href="/contato" to="/contato">Contato</Nav.Link>
                    <Nav.Link className="text-white button-login" as={Link} href="/entrar" to="/entrar">Entrar</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const Menu = withRouter(BaseMenu)

export default Menu;