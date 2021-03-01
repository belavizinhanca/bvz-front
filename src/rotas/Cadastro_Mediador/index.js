import React, { Component } from 'react'
import { Container, Form, Button} from 'react-bootstrap'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from "../../components/services/api";

import './Cad_Mediador.css'



class CadastroMediador extends Component {
    state = {
                nome: "",
                contato: "",
                endereco: "",
                email: "",
                senha: ""
            };
  
    handleCadastro = async e => {
        e.preventDefault();

      const { nome, contato, endereco, email, senha } = this.state;

  if (!nome || !email || !senha) {
    this.setState({ error: "Preencha todos os dados para se cadastrar" });
  } else {
    try {
      await api.post("/register", { nome, contato, endereco, email, senha });
      this.props.history.push("/");
    } catch (err) {
      console.log(err);
      this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
    }
  }
};
    render(){
    return(    
        
        <section className="form-section cadmediador">
        <Container className="form-container">
            <h2>Torne-se Um Mediador!</h2>
                <Form onSubmit={this.handleCadastro}>
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
        </Container>
        {/* {result && result.ok && <p>Cadastro Concluido!</p>} */}
    </section>
    )}
}

export default CadastroMediador;