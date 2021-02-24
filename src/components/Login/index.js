import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

import './Login.css'

function Login() {
    return(
        <section className="form-section login">
            <Container className="form-container">
                
                <Form>
                    <div className="inputs-container">
                        <Form.Group>
                            <Form.Label htmlFor="email">E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Email" id="email" required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="senha">Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" id="senha" required/>
                            <br></br><p>Se você já é um mediador faça login, ou então </p>
                            <p><a href="/cadastro-mediador" to="/cadastro-mediador">Cadastre-se</a></p>
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