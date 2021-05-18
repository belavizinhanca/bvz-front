
import React, { useRef, useState, useContext } from 'react'
import { Overlay, Popover, Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import './poplogin.css'



export default function Poplogin() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    const { user, signIn, signOut } = useContext(AuthContext);
    const [form, setForm] = useState({
        username: '',
        password: ''
    });
    const history = useHistory();
  
    //função para abrir o Popover
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };

    const handleChange = ({target}) => {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        signIn(form);
        setShow(false);
        history.push('/doacao');
    }

    const handleSignOut = () => {
      signOut();
      setShow(false);
      history.push('/');
    }

    console.log(user);
  
    return (
      <div>
        <Button className="d-inline-flex align-items-center" size="sm" variant="link" onClick={handleClick}>
        <ion-icon className="sign-in" size name="person-circle-outline" id="sign-in" />{!user ? "Entrar" : user}</Button>
  
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
                {!user ? 
                  <Form onSubmit={handleSubmit}>
                    <div className="inputs-container">
                      <Form.Group>
                          <Form.Label htmlFor="email">E-mail</Form.Label>
                          <Form.Control type="text" value={form.username} placeholder="Digite seu e-mail" id="username" name="username" onChange={handleChange} required/>
                      </Form.Group>
      
                      <Form.Group>
                          <Form.Label htmlFor="senha">Senha</Form.Label>
                          <Form.Control type="password" value={form.password} placeholder="Senha" id="password" name="password" onChange={handleChange} required/>
                          <br></br><p>Se você já é um mediador faça login, ou então </p>
                          <p><a href="/cadastro-mediador" to="/cadastro-mediador">Cadastre-se</a></p>
                      </Form.Group>
                    </div>
                    <Button className="button-enviar" type="submit">
                        Entrar
                    </Button>
                  </Form>
                : <Button className="button-enviar" type="button" onClick={handleSignOut}>Sair</Button>}
            </Popover.Content>
          </Popover>
        </Overlay>
      </div>
    );
  }
  