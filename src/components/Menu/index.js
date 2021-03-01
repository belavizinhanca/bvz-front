import React from 'react'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap'
import logo from '../images/logobvznovoLinha.png'

import './Menu.css'
import Poplogin from '../poplogin';

function BaseMenu() {

    const [anchorEl, setAnchorEl] = React.useState('');

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    

    return(
        <Navbar fixed="top" variant="dark" expand="lg">
        <Container>

            <Navbar.Brand href="/" to="/"><Image src={logo} alt="Logo Bela Vizinhança" width="320" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="/" to="/">Home</Nav.Link>
                <Nav.Link href="/quem-somos" to="/quem-somos">Quem Somos</Nav.Link>
    
                <NavDropdown anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} title="Como Ajudar?" id="basic-nav-dropdown" onMouseOut={handleClose} onMouseOver={handleClick}>
                    <NavDropdown.Item href="/mediador" to="/mediador">Mediador</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/doacao" to="/doacao">Doação</NavDropdown.Item>
                </NavDropdown>
                
                <Nav.Link href="/contato" to="/contato">Contato</Nav.Link>
                <Nav.Link href="/gerenciar" to="/gerenciar">Gerenciar</Nav.Link>
                <Nav.Link href="/app" to="/app">App</Nav.Link>
                <Poplogin /> 
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

const Menuex = withRouter(BaseMenu)

export default Menuex;