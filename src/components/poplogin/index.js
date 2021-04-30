
import React, { useRef, useState, useContext } from 'react'
import { Overlay, Popover, Button, Form } from 'react-bootstrap'
import AuthContext from '../contexts'
import './poplogin.css'



export default function Poplogin() {


  //trazendo os States do context
    const {nome, setNome, signed, setSigned} = useContext(AuthContext)
    

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
  
    //função para abrir o Popover
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };


  //Dados do usuário
      var [userData, setUser] = useState({
        username:'',
        password: ''
      });
 
  //função para fazer o login na API
      const handleLogin = async () => {

  //separando e preparando dados para enviar login
      var username = userData.username;
      var password = userData.password;

      const enviandoDados = {username, password}
        

       await fetch('http://localhost:4000/api/login', {
              method: 'POST',
              body:JSON.stringify(enviandoDados),
              headers:{
                  "Content-Type":"application/json"
              }})
              .then(response => response.json())
              .then(async (resJson) =>  {                   
                  if(resJson.success){
                      localStorage.setItem('bvz-identifyByJsonWebTokenOnAPIserver', resJson.token)
                      localStorage.setItem('nomeUsuario', resJson.nome)
                      setNome(resJson.nome)
                      await setSigned(resJson.success)
                      await setNome(resJson.nome)
                      
                  }
                })
          }    

      const handleChange = (e) => {
        let campo = e.target.name
        let valor = e.target.value
        userData[campo] = valor
        setUser(userData);
        console.log(userData);
      }
        
  
    return (
      <div ref={ref}>
        <Button className="d-inline-flex align-items-center" size="sm" variant="link" onClick={handleClick}>
        <ion-icon className="sign-in" size name="person-circle-outline" id="sign-in" /> 
        {nome} 
        </Button>
  
        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref.current}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Title as="h3">Seja Bem-Vindo(a).</Popover.Title>
            <Popover.Content>
                
            <Form onSubmit={handleLogin}>
                    <div className="inputs-container">
                        <Form.Group>
                            <Form.Label htmlFor="email">E-mail</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu e-mail" id="username" name="username" onChange={handleChange} required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="senha">Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" id="senha" name="password" onChange={handleChange} required/>
                            <br></br><p>Se você já é um mediador faça login, ou então </p>
                            <p><a href="/cadastro-mediador" to="/cadastro-mediador">Cadastre-se</a></p>
                        </Form.Group>
                    </div>
                    <Button className="button-enviar" type="submit">
                        Entrar
                    </Button>
            </Form>
            </Popover.Content>
          </Popover>
        </Overlay>
      </div>
    );
  }
  