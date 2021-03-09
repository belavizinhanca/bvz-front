import React from 'react'
import { Container, Card, Image,Jumbotron } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaUser } from 'react-icons/fa'

import carla from '../../components/images/time/Carla.jpg';
import roney from '../../components/images/time/Roney.jpg';
import guilherme from '../../components/images/time/Guilherme.jpg';
import vitor from '../../components/images/time/Vitor.jpeg';
import rilvan from '../../components/images/time/Rilvan.jpeg';

import './QuemSomos.css'
import missao from '../../components/images/missao.jpeg'

function QuemSomos() {
    return(
        <section className="section-quemsomos">
            <Jumbotron className="titulo" fluid>
                    <h1>Nossa Missão</h1>                
            </Jumbotron>
            <Jumbotron className="fluid text-mission" fluid>
                <Container>
                    <p>Através da Plataforma Bela vizinhança ajudar moradores de rua situados na região da Bela vista. Incentivando moradores residenciais a criar uma conexão com moradores de rua, para entender quais suas necessidades reais. Assim minimizando suas dores. A Plataforma é de fácil acesso e simples funcionalidade, para facilitar quem quer ajudar o próximo.</p>

                </Container>
            </Jumbotron>
                <Jumbotron className="vision-text" fluid>
                    <Container>
                    <h2>Somos a Ponte de Ligação entre Voluntários e Moradores de Rua</h2>
                            <p>Os interessados em ajudar efetuam o cadastro em nossa plataforma se tornando Mediadores, que por sua vez fica responsável em cadastrar moradores de rua, necessidades dos moradores de rua registrados na plataforma.</p>
                            <p>Moradores da região e interessados em ajudar podem efetuar as doações de forma direta, através de um mediador ou através de instituições parceiras com o projeto, dependendo da preferência do doador ou da melhor forma de receber a doação do morador de rua.</p>
                            <p>Através de um meio tecnológico buscamos dar mais visibilidade e ajudar moradores de rua a suprir suas necessidades, alêm de expandir parcerias, incentivar pessoas a ajudarem o próximo e facilitar como meio aqueles que gostariam de ajudar, mas não sabiam como.</p>
                   </Container>
            </Jumbotron>
            <Container className="container-quemsomos">
                            

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