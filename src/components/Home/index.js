import React from 'react'
import { Container } from 'react-bootstrap'
import homesvg from '../images/home.png'
import { Link } from 'react-router-dom'

import './Home.css'

function Home() {
    return(
        <section className="home-page">
            <Container className="section-home">
                <div className="text-home">
                    <h2>Título de um texto explicativo</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue ex a lacus consequat blandit. Cras eros sapien.</p>
                    <a className="button" as={Link} href="/quem-somos" to="quem-somos">Saiba Mais</a>
                </div>

                <div className="img-container">
                    <img className="home-img" src={homesvg} alt="Imagem"/>
                </div>
            </Container>
        </section>
    )
}

export default Home;