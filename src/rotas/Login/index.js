import React, { Component } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'

import api from "../../components/services/api";
import { login } from "../../components/services/auth";

import './Login.css'

class Login extends Component {
    state = {
      username: "",
      senha: "",
      error: ""
    };
  
    handleLogin = async e => {

      e.preventDefault();

      const { username, senha } = this.state;
      if (!username || !senha) {
        this.setState({ error: "Preencha e-mail e senha para continuar!" });
      } 
      else {
        try {
          const response = await api.post("/login", { username, senha });
          login(response.token);
          this.props.history.push("/gerenciar");
        } catch (err) {
          this.setState({
            error:
              "Houve um problema com o login, verifique suas credenciais. T.T"
          });
        }
      }
    };

    render(){
    return(
        <section className="form-section login">
            <Container className="form-container">
                
                <Form onSubmit={this.handleLogin}>
                    <div className="inputs-container">
                        <Form.Group>
                            <Form.Label htmlFor="email">E-mail</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu e-mail" id="username"   onChange={e => this.setState({ username: e.target.value })}required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="senha">Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" id="senha"  onChange={e => this.setState({ senha: e.target.value })} required/>
                            <br></br><p>Se você já é um mediador faça login, ou então </p>
                            <p><a href="/cadastro-mediador" to="/cadastro-mediador">Cadastre-se</a></p>
                        </Form.Group>
                    </div>
                    <Button className="button-enviar" type="submit">
                        Entrar
                    </Button>
                </Form>
            </Container>
        
            {/* {result && result.ok && <p>Login efetuado!</p>} */}
        </section>
    )}
}

export default Login;