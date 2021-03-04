import React from 'react'
import { Card, Image } from 'react-bootstrap'
import './Equipe.css'
import { FaGithub, FaLinkedin, FaUser } from 'react-icons/fa'
import carla from '../../components/images/time/Carla.jpg';
import roney from '../../components/images/time/Roney.jpg';
import guilherme from '../../components/images/time/Guilherme.jpg';
import vitor from '../../components/images/time/Vitor.jpeg';
import rilvan from '../../components/images/time/Rilvan.jpeg';

function Equipe() {
    return(
        <div className="container-equipe">
             <div className="container-team">
                    <div className="container-cards-equipe">
                    <Card style={{ width: '14rem' }}>
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

                        <Card className="card" style={{ width: '14rem' }}>
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
                        <Card className="card" style={{ width: '14rem' }}>
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
                        <Card className="card" style={{ width: '14rem' }}>
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
                        <Card className="card" style={{ width: '14rem' }}>
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
        </div>
    )
}

export default Equipe;