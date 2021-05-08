import React from 'react';
import { Form, Button } from 'react-bootstrap';

import'../Cad_Mediador.css';

export default function Formulario(params) {
    

  return (

    <Form onSubmit={this.handleCadastro} className="f-mediador">
                {this.state.error && <p>{this.state.error}</p>}
                    <div className="inputs-container">
                    <Form.Group>
                        <Form.Label htmlFor="nome">Nome</Form.Label>
                        <Form.Control type="text" placeholder="Nome" id="nome" onChange={e => this.setState({ nome: e.target.value })} required/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="contato">Contato</Form.Label>
                        <Form.Control type="text" placeholder="Contato" id="contato" onChange={e => this.setState({ contato: e.target.value })} required/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="endereco">Endereço</Form.Label>
                        <Form.Control type="text" placeholder="Endereço" id="endereco" onChange={e => this.setState({ endereco: e.target.value })} required/>
                    </Form.Group>

                    <Form.Group >
                        <Form.Label htmlFor="email">E-mail</Form.Label>
                        <Form.Control type="email" placeholder="Email" id="email" onChange={e => this.setState({ email: e.target.value })} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="senha">Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha" id="senha" onChange={e => this.setState({ senha: e.target.value })} required/>
                    </Form.Group>
                </div>
                <Button className="button-enviar" type="submit">
                    Enviar
                </Button>
            </Form>


  )
}

