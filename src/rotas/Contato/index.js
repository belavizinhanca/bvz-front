import React from 'react'
import { Container, Form,  Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import './Contato.css'

function Contato() {
    const history = useHistory()

    function redirect() {
        history.push("/")
    }

    return(
        <section className="form-section contato">
            <Container className="form-container">
                <h2>Envie-nos um feedback</h2>
                <Form className="form">
                    <div className="inputs-container">
                        <Form.Group>
                            <Form.Label htmlFor="nome">Nome</Form.Label>
                            <Form.Control type="text" placeholder="Nome" id="nome" required/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label htmlFor="email">E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Email" id="email" required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="mensagem">Mensagem</Form.Label>
                            <Form.Control as="textarea" rows={4} id="mensagem" required/>
                        </Form.Group>
                    </div>
                    <Button className="button-enviar" type="submit" onClick={redirect}>
                        Enviar
                    </Button>
                </Form>
            </Container>
        </section>
    )
}

export default Contato;