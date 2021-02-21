import React from 'react'
import { Container, Form,  Button } from 'react-bootstrap'

import './Contato.css'

function Contato() {
    return(
        <section className="form-section contato">
            <Container className="form-container">
                <h2>Entre em contato!</h2>
                <Form>
                    <div className="inputs-container">
                        <Form.Group>
                            <Form.Label htmlFor="nome">Nome</Form.Label>
                            <Form.Control type="text" placeholder="Nome" id="nome"/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label htmlFor="email">E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Email" id="email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="mensagem">Mensagem</Form.Label>
                            <Form.Control as="textarea" rows={4} id="mensagem"/>
                        </Form.Group>
                    </div>
                    <Button className="button-enviar" type="submit">
                        Enviar
                    </Button>
                </Form>
            </Container>
        </section>
    )
}

export default Contato;