import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import "./btnDoe.css?489829";


export default function BtnFlutuante() {    
    
    const renderTooltip = (props) => (
        <Tooltip id="icon-demanda" {...props}>
          Encontre uma causa para ajudar!
        </Tooltip>
      );
  
  const history = useHistory();

  const menuItens = [
    {
      label: "Doar",
      path: "doacao"
    },
  ];

  return (


  
    <OverlayTrigger
    placement="left"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}>

    <div id="botao_flutuante">
      {menuItens.map((item, key) => (
        <p key={key} onClick={() => history.push(`/${item.path}`)}>DOAR<i className="fas fa-mouse" /></p>
      ))}
    </div>
    </OverlayTrigger>

  );
};


