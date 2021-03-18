import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import api from "../../components/services/api";
import { login } from "../../components/services/auth";
import { useHistory } from 'react-router-dom'




class FormLogin extends Component{
    constructor(props){
        super();

        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        

        this.state = {
            username: undefined,
            email: undefined,
            senha: undefined,
            error: undefined,
            logged: false,
            signUp:{
              success:undefined
                   }        
           }
           
    }
 

       handleLogin = e => {

        e.preventDefault();

        var username = this.state.email;
        var password = this.state.senha;

        const enviandoDados = {username, password}
        // var dadosJson =JSON.stringify(enviandoDados)
        //console.log(dadosJson);

        if (!username || !password) {
          this.setState({ error: "Preencha e-mail e senha para continuar!" });
        } 
        else {
            fetch('http://localhost:4000/api/login', {
                method: 'POST',
                body:JSON.stringify(enviandoDados),
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(response => response.json()).then(resJson =>  {
                    if(resJson.success){
                        localStorage.setItem('bvz-identifyByJsonWebTokenOnAPIserver', resJson.token)
                        
                    }
                    console.log(resJson)
                })
        //   try {
        //     const response = await api.post("/login", { username, senha });
        //     login(response.token);
        //     this.props.history.push("/gerenciar");
        //   } catch (err) {
        //     this.setState({
        //       error:
        //         "Houve um problema com o login, verifique suas credenciais. T.T"
        //     });
          }
        }

        handleEmailChange(e) {
            this.setState({
                email: e.target.value
            })
      
        }

      handlePasswordChange(e) {
          this.setState({
              senha: e.target.value
          })
    
      }


    render(){
    return (
        <Form onSubmit={this.handleLogin}>
        <div className="inputs-container">
            <Form.Group>
                <Form.Label htmlFor="email">E-mail</Form.Label>
                <Form.Control type="text" placeholder="Digite seu e-mail" id="email" onChange={this.handleEmailChange} required/>
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor="senha">Senha</Form.Label>
                <Form.Control type="password" placeholder="Senha" id="senha" onChange={this.handlePasswordChange} autoComplete="current-password" required/>
                <br></br><p>Se você já é um mediador faça login, ou então </p>
                <p><a href="/cadastro-mediador" to="/cadastro-mediador">Cadastre-se</a></p>
            </Form.Group>
        </div>
        <Button className="button-enviar" type="submit">
            Entrar
        </Button>
    </Form>
    )
}}

export default FormLogin;