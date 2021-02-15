import React from 'react'
import { Container, Form, Button} from 'react-bootstrap'

import './CadDemanda.css'

function CadDemanda() {
    return(
        <section className="form-section">
            <Container className="form-container">
                <h2>Cadastre-se</h2>
                <Form>
                    <Form.Group>
                        <Form.Label htmlFor="foto">Foto</Form.Label>
                        <Form.Control type="file" placeholder="Foto" id="foto" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="nome">Nome</Form.Label>
                        <Form.Control type="text" placeholder="Nome" id="nome" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="demandas">Demandas</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Demandas" id="demandas" />
                    </Form.Group>

                    <Button className="button-enviar" type="submit">
                        Cadastrar
                    </Button>
                </Form>
            </Container>
        </section>
    )
}

export default CadDemanda;