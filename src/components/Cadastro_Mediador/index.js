import React from 'react'
import { Container, Form, Button} from 'react-bootstrap'

function CadastroMediador() {
    return(
        <section className="form-section">
        <Container className="form-container">
            <h2>Torne-se Um Mediador!</h2>
            <Form>
                <Form.Group>
                    <Form.Label htmlFor="nome">Nome</Form.Label>
                    <Form.Control type="text" placeholder="Nome" id="nome"/>
                </Form.Group>

                <Form.Group >
                    <Form.Label htmlFor="email">E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Email" id="email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="senha">Senha</Form.Label>
                    <Form.Control type="password" placeholder="Senha" id="senha"/>
                </Form.Group>
                <Button className="button-enviar" type="submit">
                    Enviar
                </Button>
            </Form>
        </Container>
    </section>
    )
}

export default CadastroMediador;