import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

import './Cadastro.css'

function Cadastro() {
    return(
        <section className="form-section">
            <Container className="form-container">
                <h2>Cadastre-se</h2>
                <Form>
                    <div className="inputs-container">
                        <Form.Group>
                            <Form.Label htmlFor="nome">Nome</Form.Label>
                            <Form.Control type="text" placeholder="nome" id="nome" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Email" id="email" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="senha">Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" id="senha" />
                            <br></br>
                            <a href="/entrar" to="/entrar">Login</a>
                        </Form.Group>
                    </div>
                    <Button className="button-enviar" type="submit">
                        Cadastrar
                    </Button>
                </Form>
            </Container>
        </section>
    )
}

export default Cadastro;