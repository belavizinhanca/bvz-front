import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Mediador.css'

function Mediador() {
    return(
        <section className="section-mediador">
            <div className="container-flex">
                <Container>
                    <h2>O que é um Mediador?</h2>
                    <p>Os mediadores são aqueles que irão oferecer ajuda as pessoas que moram na rua, acompanhando a situação delas e comunicando as suas necessidades.</p>
                </Container>
            </div>

            <div className="container-flex sejamediador">
                <Container>
                    <h2>Como se tornar um Mediador?</h2>
                    <p>Tornar-se um Mediador é bem simples basta você clicar no botão ao lado para fazer o cadastro e depois disso você já estará apto a começar a fazer o bem!</p>
                    <a className="button" href="/seja-mediador" to="/seja-mediador">Seja Mediador!</a>
                </Container>
            </div>
        </section>
    )
}

export default Mediador;