import React from 'react'
import { Card } from 'react-bootstrap'

import './Demanda.css'

function Demanda(props) {
    return(
        <Card style={{ width: '15rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{props.nome}</Card.Title>
                    <Card.Text>
                    {props.perfil}
                    </Card.Text>
                    
                    <hr></hr>

                    <Card.Title>Demandas</Card.Title>

                    <Card.Text>
                        {props.demanda}
                    </Card.Text>
                    <a className="button" href="#" to="#">Doar</a>
                </Card.Body>
            </Card>
    )
}

export default Demanda;