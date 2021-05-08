import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import "./btnDoe.css";
import logo from '../../images/logobvznovoLinha.png';

export default function LogoFlutuante() {    
    


  return (

    <div id="botao_flutuante">
        <img src={logo} />
    </div>

  );
};


