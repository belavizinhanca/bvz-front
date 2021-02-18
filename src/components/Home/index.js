import React from 'react'
import { Container } from 'react-bootstrap'
import home from '../images/home.png'

import './Home.css'

function Home() {
    return(
        <section className="section-home">
            <Container className="container-home">
                <div className="container-flex text">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis massa lorem, sit amet sollicitudin lorem vulputate non. Nulla facilisi.</p>
                    <a href="/quem-somos" to="/quem-somos">Saiba Mais</a>
                </div>

                <div className="container-flex">
                    <img src={home} alt="Imagem Contribuição" />
                </div>
            </Container>
        </section>
    )
}

export default Home;