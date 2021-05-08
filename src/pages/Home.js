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
                    <h2>Entendendo a Realidade</h2>
                </div>

                <div className="container-flex">
                    <div className="text-container">
                    <h2>'É horrível dormir com sede': moradores de rua de SP sofrem em cidade sem bebedouros</h2>
                        <p>A reportagem da BBC News Brasil entrevistou dezenas de moradores de rua para saber o que eles fazem para conseguir água em São Paulo.
                        Com poucas opções para conseguir água por conta própria - como nascentes e torneiras externas de alguns prédios públicos -, muitos dependem da sorte e da ajuda de voluntários para ter acesso a água limpa.</p>
                    </div>

                    <div className="img-container">
                    <iframe width="327" height="209" src="https://www.youtube.com/embed/EsPpfCZPBhQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>

                <div className="container-flex row-reverse">
                    <div className="text-container">
                        <h2>MORAR NA RUA</h2>
                        <p>Conversamos com diversas pessoas que moram na rua para entender como é a vida delas. Alguns estão ali por escolha. A maioria, por falta de opção. Histórias que merecem a nossa atenção.</p>
                        
                    </div>

                    <div className="img-container">
                    <iframe width="327" height="209" src="https://www.youtube.com/embed/8XRm7pXI9z8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </Container>
        </section>

        </>
    )
}

export default Home;