import React from 'react'
import { Container, Card, Image } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaUser } from 'react-icons/fa'

import carla from '../../components/images/time/Carla.jpg';
import roney from '../../components/images/time/Roney2.jpg';
import guilherme from '../../components/images/time/Guilherme.jpg';
import vitor from '../../components/images/time/Vitor.jpeg';
import rilvan from '../../components/images/time/Rilvan.jpeg';

import './QuemSomos.css'
import goal from '../../components/images/goal.png'

function QuemSomos() {
    return(
        <section className="section-quemsomos">
            <Container className="container-quemsomos">
                <div className="container-goal">
                    <div className="container-flex-qs text">
                        <h2>Nosso Objetivo</h2>
                        <p>Usar a Plataforma Bela vizinhança para ajudar moradores de rua situado na Bela vista. Incentivando moradores residenciais a criar uma conexão com moradores de rua, para entender quais suas necessidades real. Assim minimizando suas dores. A Plataforma é de fácil acesso e simples funcionalidade, para facilitar quem quer ajudar o próximo.</p>
                    </div>

                    <div className="container-flex-qs">
                        <img src={goal} alt="Imagem Objetivo" />
                    </div>
                </div>

                <div className="container-team">
                    <h2>Nossa Equipe</h2>
 
                    <div className="container-cards">
                    <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <div className="foto">
                                <Image className="foto-perfil" src={carla} rounded />
                                
                                </div>
                                <Card.Title>Carla</Card.Title>
                                <div className="line"></div>
                                <Card.Subtitle className="mb-2 text-muted">Marketing, empreendedorismo, desenvolvimento back-end e estratégia.</Card.Subtitle>
                                <Card.Link target="_blank" href="https://github.com/carlajb"><FaGithub /></Card.Link>
                                <Card.Link target="_blank" href="http://linkedin.com/in/carla-janaína-braga-bb62b1196"><FaLinkedin /></Card.Link>
                            </Card.Body>
                        </Card>

                        <Card className="card" style={{ width: '18rem' }}>
                            <Card.Body>
                                <div className="foto">
                                    <Image className="foto-perfil" src={guilherme} rounded />
                                </div>
                                <Card.Title>Guilherme</Card.Title>
                                <div className="line"></div>
                                <Card.Subtitle className="mb-2 text-muted">Designer, especialista em Front-end e layoutista. </Card.Subtitle>
                                <Card.Link target="_blank" href="https://github.com/GuilhermeAlvarez-00"><FaGithub /></Card.Link>
                                <Card.Link target="_blank" href="https://www.linkedin.com/in/guilherme-alvarez-barboza-44388318b/"><FaLinkedin /></Card.Link>
                            </Card.Body>
                        </Card>
                        <Card className="card" style={{ width: '18rem' }}>
                            <Card.Body>
                                <div className="foto">
                                    <Image className="foto-perfil" src={rilvan} rounded />
                                </div>
                                <Card.Title>Rilvan</Card.Title>
                                <div className="line"></div>
                                <Card.Subtitle className="mb-2 text-muted">Marketing e apresentação do produto.</Card.Subtitle>
                                <Card.Link target="_blank" href="#"><FaGithub /></Card.Link>
                                <Card.Link target="_blank" href="#"><FaLinkedin /></Card.Link>
                            </Card.Body>
                        </Card>
                        <Card className="card" style={{ width: '18rem' }}>
                            <Card.Body>
                                <div className="foto">
                                    <Image className="foto-perfil" src={roney} rounded />

                                </div>
                                <Card.Title>Roney</Card.Title>
                                <div className="line"></div>
                                <Card.Subtitle className="mb-2 text-muted">Líder, controle do projeto, front-end e back-end, identidade visual.</Card.Subtitle>
                                <Card.Link target="_blank" href="https://github.com/RoneyLima"><FaGithub /></Card.Link>
                                <Card.Link target="_blank" href="https://www.linkedin.com/in/roneyclima/ "><FaLinkedin /></Card.Link>
                            </Card.Body>
                        </Card>
                        <Card className="card" style={{ width: '18rem' }}>
                            <Card.Body>
                                <div className="foto">
                                    <Image className="foto-perfil" src={vitor} rounded />
                                </div>
                                <Card.Title>Vitor</Card.Title>
                                <div className="line"></div>
                                <Card.Subtitle className="mb-2 text-muted">Especialista Back-end, integração de APIs.</Card.Subtitle>
                                <Card.Link target="_blank" href="https://github.com/Arickado"><FaGithub /></Card.Link>
                                <Card.Link target="_blank" href="https://www.linkedin.com/in/Vitor-Gabriel-LA"><FaLinkedin /></Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default QuemSomos;