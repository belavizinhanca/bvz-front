import React from 'react'
import { Container, Image } from 'react-bootstrap'
import logo from '../images/logobvznovoLinha.png'

import './copyright.css'

function Copyright() {
    return(
        <div className="copy-container">
            <Container>
                <div className="footer-items">
                   <p><small>&copy; Copyright 2020-2021, Bela Vizinhança</small></p>
                </div>
            </Container>
        </div>
    )
}

export default Copyright;