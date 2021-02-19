import React from 'react'
import { Container } from 'react-bootstrap'
import home from '../images/home.png'

import './Home.css'

function Home() {
    return(
        <section className="section-home">
            <Container className="container-home">
                <div className="container-flex-home text">
                    <h2>Projeto Bela Vizinhança, faça o bem sem olhar a quem.</h2>
                    <p>A empatia é certamente um dos mais nobres sentimentos humanos. Para entender e ajudar o próximo e necessário se imaginar na condição dele
    Acreditamos que existe sempre uma saída, até mesmo para os problemas quem parecem impossível de superar
    Que o desejo de ajudar o próximo consiga sempre superar a falta de esperança no ser humano.</p>
    <a href="/quem-somos" to="/quem-somos">Saiba Mais</a>
                </div>
                <div className="container-flex-home">
                    <img src={home} alt="Imagem home" />
                </div>
            </Container>
        </section>
    )
}

export default Home;