import React from 'react'
import { Container, Image } from 'react-bootstrap'
import logo from '../images/logobvznovoLinha.png'

import './Footer.css'

function Footer() {
    return(
        <div className="footer-container">
            <Container>
                <div className="footer-items">
                    <div className="footer-logo">
                        <a href="/" to="/"><Image src={logo} alt="Logo Bela Vizinhança" /></a>
                    </div>

                    <div className="footer-links">
                        <ul>
                            <li><a href="/" to="/">Home</a></li>
                            <li><a href="/quem-somos" to="/quem-somos">Quem Somos</a></li>
                            <li><a href="/mediador" to="/mediador">Mediador</a></li>
                            <li><a href="/doacao" to="/doacao">Doação</a></li>
                            <li><a href="/contato" to="/contato">Contato</a></li>
                            <li><a href="/entrar" to="/entrar">Entrar</a></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer;