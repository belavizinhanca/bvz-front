import React from 'react'
import { Container, Form, Button} from 'react-bootstrap'
import { useState } from 'react'

function CadastroMediador() {
    const [form, setForm] = useState({
        nome: '',
        contato: '',
        endereco: '',
        email: '',
        senha: ''
    })

    const [result, setResult] = useState('')

    function handleChange({target}) {
        const {id, value} = target

        setForm({ ...form, [id]:value })
        console.log({ [id]:value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch('https://bvz-back.herokuapp.com/mediadores', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        }).then(res => {
            setResult(res)
        })
    }

    return(
        <section className="form-section">
        <Container className="form-container">
            <h2>Torne-se Um Mediador!</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor="nome">Nome</Form.Label>
                    <Form.Control type="text" value={form.nome} placeholder="Nome" id="nome" onChange={handleChange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="contato">Contato</Form.Label>
                    <Form.Control type="text" value={form.contato} placeholder="Contato" id="contato" onChange={handleChange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="endereco">Endereço</Form.Label>
                    <Form.Control type="text" value={form.endereco} placeholder="Endereço" id="endereco" onChange={handleChange}/>
                </Form.Group>

                <Form.Group >
                    <Form.Label htmlFor="email">E-mail</Form.Label>
                    <Form.Control type="email" value={form.email} placeholder="Email" id="email" onChange={handleChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="senha">Senha</Form.Label>
                    <Form.Control type="password" value={form.senha} placeholder="Senha" id="senha" onChange={handleChange}/>
                </Form.Group>
                <Button className="button-enviar" type="submit">
                    Enviar
                </Button>
            </Form>
        </Container>
        {result && result.ok && <p>Cadastro Concluido!</p>}
    </section>
    )
}

export default CadastroMediador;