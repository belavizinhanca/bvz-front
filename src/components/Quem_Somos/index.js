import React from 'react'
import { Container, Card, Image } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaUser } from 'react-icons/fa'

import carla from '../images/time/Carla.jpg';
import roney from '../images/time/Roney2.jpg';
// import guilherme from '../images/time/Carla.jpg';
// import vitor from '../images/time/Carla.jpg';
// import rilvan from '../images/time/Carla.jpg';

import './QuemSomos.css'
import goal from '../images/goal.png'

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
                        <Card className="card" style={{ width: '18rem' }}>
                            <Card.Body>
                                <div className="foto">
                                    {/* <Image className="foto-perfil" src={guilherme} rounded /> */}
                                    <FaUser  className="nopic" />

                                </div>
                                <Card.Title>Guilherme</Card.Title>
                                <div className="line"></div>
                                <Card.Subtitle className="mb-2 text-muted">gui06barboza@gmail.com</Card.Subtitle>
                                <Card.Link href="#"><FaGithub /></Card.Link>
                                <Card.Link href="#"><FaLinkedin /></Card.Link>
                            </Card.Body>
                        </Card>
                        <Card className="card" style={{ width: '18rem' }}>
                            <Card.Body>
                                <div className="foto">
                                    <Image className="foto-perfil" src={roney} rounded />

                                </div>
                                <Card.Title>Roney</Card.Title>
                                <div className="line"></div>
                                <Card.Subtitle className="mb-2 text-muted">roney.c.lima@gmail.com</Card.Subtitle>
                                <Card.Link href="https://github.com/RoneyLima"><FaGithub /></Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/roneyclima/ "><FaLinkedin /></Card.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <div className="foto">
                                <Image className="foto-perfil" src={carla} rounded />
                                
                                </div>
                                <Card.Title>Carla</Card.Title>
                                <div className="line"></div>
                                <Card.Subtitle className="mb-2 text-muted">carla_agencia@hotmail.com</Card.Subtitle>
                                <Card.Link href="https://github.com/carlajb"><FaGithub /></Card.Link>
                                <Card.Link href="http://linkedin.com/in/carla-janaína-braga-bb62b1196"><FaLinkedin /></Card.Link>
                            </Card.Body>
                        </Card>
                        <Card className="card" style={{ width: '18rem' }}>
                            <Card.Body>
                                <div className="foto">
                                {/* <Image className="foto-perfil" src={vitor} rounded /> */}
                                    <FaUser className="nopic" />
                                </div>
                                <Card.Title>Vitor</Card.Title>
                                <div className="line"></div>
                                <Card.Subtitle className="mb-2 text-muted">v.gabriel.artes@gmail.com</Card.Subtitle>
                                <Card.Link href="#"><FaGithub /></Card.Link>
                                <Card.Link href="#"><FaLinkedin /></Card.Link>
                            </Card.Body>
                        </Card>
                        <Card className="card" style={{ width: '18rem' }}>
                            <Card.Body>
                                <div className="foto">
                                {/* <Image className="foto-perfil" src={rilvan} rounded /> */}
                                <FaUser className="nopic" />
                                
                                </div>
                                <Card.Title>Rilvan</Card.Title>
                                <div className="line"></div>
                                <Card.Subtitle className="mb-2 text-muted">felixrilvan@gmail.com</Card.Subtitle>
                                <Card.Link href="#"><FaGithub /></Card.Link>
                                <Card.Link href="#"><FaLinkedin /></Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default QuemSomos;