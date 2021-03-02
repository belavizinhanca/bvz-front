import React from 'react'
import { Container, Carousel } from 'react-bootstrap'
import { useState } from 'react'

import home from '../../components/images/home.png'
import imgHome from '../../components/images/contatobg.jpg'

import './Home.css'

function Home() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return(
        <>
        <section className="section-home">
            <Container className="container-home">
                <div className="container-flex-home text">
                    <h2>Projeto Bela Vizinhança, faça o bem sem olhar a quem.</h2>
                    <p>A empatia é certamente um dos mais nobres sentimentos humanos. Para entender e ajudar o próximo e necessário se imaginar na condição dele
                    Acreditamos que existe sempre uma saída, até mesmo para os problemas quem parecem impossível de superar
                    Que o desejo de ajudar o próximo consiga sempre superar a falta de esperança no ser humano.</p>
                    <a className="button-saibamais" href="/quem-somos" to="/quem-somos">Saiba Mais</a>
                </div>
            </Container>
        </section>

        <section className="section-projetos">
            <Container className="container-projetos">
                <div className="title-projetos">
                    <h2>Conheça Os Projetos Da Região</h2>
                </div>

                <div className="container-flex">
                    <div className="text-container">
                        <h2>Nome do projeto</h2>
                        <p>Conteudo do projeto...</p>
                    </div>

                    <div className="img-container">
                        <img src={imgHome} />
                    </div>
                </div>

                <div className="container-flex row-reverse">
                    <div className="text-container">
                        <h2>Nome do projeto</h2>
                        <p>Conteudo do projeto...</p>
                    </div>

                    <div className="img-container">
                        <img src={imgHome} />
                    </div>
                </div>
            </Container>
        </section>

        </>
    )
}

export default Home;