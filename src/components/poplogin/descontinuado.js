
import React, { useRef, useState } from 'react'
import { Overlay, Popover, Button } from 'react-bootstrap'
import FormLogin from '../loginForm';
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
        <Button className="d-inline-flex align-items-center" size="32" variant="link" onClick={handleClick}><ion-icon className="sign-in" size name="person-circle-outline" id="sign-in" /> Entrar</Button>
  
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
                
              <FormLogin />
            </Popover.Content>
          </Popover>
        </Overlay>
      </div>
    );
  }
  