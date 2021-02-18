import React from 'react'
import { Container, Card } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaUser } from 'react-icons/fa'

import './QuemSomos.css'
import goal from '../images/goal.png'

function QuemSomos() {
    return(
        <section className="section-quemsomos">
            <Container className="container-quemsomos">
                <div className="container-goal">
                    <div className="container-flex text">
                        <h2>Nosso Objetivo</h2>
                        <p>Usar a Plataforma Bela vizinhança para ajudar moradores de rua situado na Bela vista. Incentivando moradores residenciais a criar uma conexão com moradores de rua, para entender quais suas necessidades real. Assim minimizando suas dores. A Plataforma é de fácil acesso e simples funcionalidade, para facilitar quem quer ajudar o próximo.</p>
                    </div>

                    <div className="container-flex">
                        <img src={goal} alt="Imagem Objetivo" />
                    </div>
                </div>

                <div className="container-team">
                    <h2>Nossa Equipe</h2>

                    <div className="container-cards">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <div className="foto">
                                {/* Esse icon sera substituido por uma img */}
                                <FaUser />
                            </div>
                            <Card.Title>Nome</Card.Title>
                            <div className="line"></div>
                            <Card.Subtitle className="mb-2 text-muted">Função</Card.Subtitle>
                            <Card.Link href="#"><FaGithub /></Card.Link>
                            <Card.Link href="#"><FaLinkedin /></Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <div className="foto">
                                {/* Esse icon sera substituido por uma img */}
                                <FaUser />
                            </div>
                            <Card.Title>Nome</Card.Title>
                            <div className="line"></div>
                            <Card.Subtitle className="mb-2 text-muted">Função</Card.Subtitle>
                            <Card.Link href="#"><FaGithub /></Card.Link>
                            <Card.Link href="#"><FaLinkedin /></Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <div className="foto">
                                {/* Esse icon sera substituido por uma img */}
                                <FaUser />
                            </div>
                            <Card.Title>Nome</Card.Title>
                            <div className="line"></div>
                            <Card.Subtitle className="mb-2 text-muted">Função</Card.Subtitle>
                            <Card.Link href="#"><FaGithub /></Card.Link>
                            <Card.Link href="#"><FaLinkedin /></Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <div className="foto">
                                {/* Esse icon sera substituido por uma img */}
                                <FaUser />
                            </div>
                            <Card.Title>Nome</Card.Title>
                            <div className="line"></div>
                            <Card.Subtitle className="mb-2 text-muted">Função</Card.Subtitle>
                            <Card.Link href="#"><FaGithub /></Card.Link>
                            <Card.Link href="#"><FaLinkedin /></Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <div className="foto">
                                {/* Esse icon sera substituido por uma img */}
                                <FaUser />
                            </div>
                            <Card.Title>Nome</Card.Title>
                            <div className="line"></div>
                            <Card.Subtitle className="mb-2 text-muted">Função</Card.Subtitle>
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