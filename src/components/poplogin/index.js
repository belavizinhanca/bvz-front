
import React, { useRef, useState } from 'react'
import { Overlay, Popover, Button, Form } from 'react-bootstrap'
import './poplogin.css'



export default function Poplogin() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
  
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };
  
    return (
      <div ref={ref}>
        <Button className="d-inline-flex align-items-center" size="sm" variant="link" onClick={handleClick}><ion-icon className="sign-in" size name="person-circle-outline" id="sign-in" /> Entrar</Button>
  
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
                
            <Form >
                    <div className="inputs-container">
                        <Form.Group>
                            <Form.Label htmlFor="email">E-mail</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu e-mail" id="username"  required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="senha">Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" id="senha"  required/>
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
  