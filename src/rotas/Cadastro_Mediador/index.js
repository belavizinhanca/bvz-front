import React from 'react'
import { Container, Form, Button, Jumbotron} from 'react-bootstrap'
import { useState } from 'react'

import './Cad_Mediador.css'
import axios from 'axios';

function CadastroMediador() {
    const [form, setForm] = useState({
        nome: '',
        email: '',
        contato: '',
        endereco: '',
        senha: ''
    });

    const handleChange = ({target}) => {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post('https://bvz-back.herokuapp.com/api/register', form);
        console.log(response.data);
    }

    return(
        <section className="section-mediador">
            <Container fluid>
                <Jumbotron className="top-titulo" fluid>
                    <Container>
                    <h1>Seja um Mediador!</h1>
                    <p>Os mediadores são aqueles que irão oferecer ajuda as pessoas que moram na rua, acompanhando a situação delas e comunicando as suas necessidades.</p>
                    </Container>
                </Jumbotron>
                <div className="titulo-cadastro"><h1>Faça seu Cadastro</h1></div>
                
                <Form onSubmit={handleSubmit} className="f-mediador">
                    <div className="inputs-container">
                        <Form.Group>
                            
                            <Form.Control type="text" placeholder="Nome" id="nome" value={form.nome} onChange={handleChange} required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="text" placeholder="Contato" id="contato" value={form.contato} onChange={handleChange} required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="text" placeholder="Endereço" id="endereco" value={form.endereco} onChange={handleChange} required/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Control type="email" placeholder="Email" id="email" value={form.email} onChange={handleChange} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="password" placeholder="Senha" id="senha" value={form.senha} onChange={handleChange} required/>
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

export default CadastroMediador;