import React, { Component } from 'react'
import { Container, Form, Button, Jumbotron} from 'react-bootstrap'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from "../../services/api";

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
        
        <section className="section-mediador">
            <Container fluid>
                <Jumbotron className="top-titulo" fluid>
                    <Container>
                    <h1>Seja um Mediador!</h1>
                    <p>Os mediadores são aqueles que irão oferecer ajuda as pessoas que moram na rua, acompanhando a situação delas e comunicando as suas necessidades.</p>
                    </Container>
                </Jumbotron>
                <div className="titulo-cadastro"><h1>Faça seu Cadastro</h1></div>
                
                <Form onSubmit={this.handleCadastro} className="f-mediador">
                    {this.state.error && <p>{this.state.error}</p>}
                        <div className="inputs-container">
                        <Form.Group>
                            
                            <Form.Control type="text" placeholder="Nome" id="nome" onChange={e => this.setState({ nome: e.target.value })} required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="text" placeholder="Contato" id="contato" onChange={e => this.setState({ contato: e.target.value })} required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="text" placeholder="Endereço" id="endereco" onChange={e => this.setState({ endereco: e.target.value })} required/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Control type="email" placeholder="Email" id="email" onChange={e => this.setState({ email: e.target.value })} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="password" placeholder="Senha" id="senha" onChange={e => this.setState({ senha: e.target.value })} required/>
                        </Form.Group>
                    </div>
                    <Button className="button-enviar" type="submit">
                        Enviar
                    </Button>
                </Form>
            {/* <div className="container-flex-med sejamediador">
                
            
            </div> */}
      </Container>
    </section>
    )}
}

export default CadastroMediador;