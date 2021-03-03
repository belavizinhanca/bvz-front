import React from 'react'
import { Container, Image, Form, Col, InputGroup, FormControl, Button, Row } from 'react-bootstrap'
import logo from '../images/logobvznovoLinha.png'

import './Footer.css'

function Footer() {
    return(
        <div className="footer-container">
            
                <div className="footer-items">

                    <div className="footer-news">
                        <Form>
                            <Form.Row className="align-items-center">
                                <Col sm={6} className="my-1">
                                <Form.Label htmlFor="inlineFormInputName" srOnly>
                                    Name
                                </Form.Label>
                                <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
                                </Col>
                                <Col sm={6} className="my-1">
                                <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly>
                                    Username
                                </Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                    <InputGroup.Text>@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl id="inlineFormInputGroupUsername" placeholder="Username" />
                                </InputGroup>
                                </Col>        
                                <Col xs="auto" className="my-1">
                                <Button type="submit">Submit</Button>
                                </Col>
                            </Form.Row>
                        </Form>
                    </div>

                    <div className="footer-links">
                        <ul><li><strong>Mapa do Site</strong></li>
                            <li><a href="/" to="/">Home</a></li>
                            <li><a href="/quem-somos" to="/quem-somos">Quem Somos</a></li>
                            <li><a href="/mediador" to="/mediador">Mediador</a></li>
                            <li><a href="/doacao" to="/doacao">Doação</a></li>
                            <li><a href="/contato" to="/contato">Contato</a></li>
                        </ul>
                    </div>

                </div>
            
        </div>
    )
}

export default Footer;