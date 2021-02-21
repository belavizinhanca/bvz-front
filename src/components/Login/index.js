import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

import './Login.css'

function Login() {
    return(
        <section className="form-section login">
            <Container className="form-container">
                <h2>Login</h2>
                <Form>
                    <div className="inputs-container">
                        <Form.Group>
                            <Form.Label htmlFor="email">E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Email" id="email" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="senha">Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" id="senha" />
                            <br></br>
                            <a href="/cadastro" to="/cadastro">Cadastre-se</a>
                        </Form.Group>
                    </div>
                    <Button className="button-enviar" type="submit">
                        Entrar
                    </Button>
                </Form>
            </Container>
        </section>
    )
}

export default Login;