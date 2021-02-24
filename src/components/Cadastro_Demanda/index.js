import React from 'react'
import { Container, Form, Button} from 'react-bootstrap'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './CadDemanda.css'

function CadDemanda() {
    const [form, setForm] = useState({
        nome: '',
        perfil: '',
        demanda: ''
    })

    const history = useHistory()

    function handleChange({target}) {
        const {id, value} = target

        setForm({  ...form, [id]:value })
        console.log({ [id]:value  })
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch('https://bvz-back.herokuapp.com/moradores', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })

        history.push("/doacao")
    }

    return(
        <section className="form-section">
            <Container className="form-container">
                <h2>Cadastrar demanda</h2>
                <Form onSubmit={handleSubmit}>
                    <div className="inputs-container">
                        <Form.Group>
                            <Form.Label htmlFor="nome">Nome</Form.Label>
                            <Form.Control type="text" value={form.nome} placeholder="Nome" id="nome" onChange={handleChange} required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="perfil">Perfil</Form.Label>
                            <Form.Control type="text" value={form.perfil} placeholder="Conte a história dessa pessoa" id="perfil" onChange={handleChange} required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="demanda">Demandas</Form.Label>
                            <Form.Control as="textarea" value={form.demanda} rows={4} placeholder="Diga o que essa pessoa precisa" id="demanda" onChange={handleChange} required/>
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

export default CadDemanda;