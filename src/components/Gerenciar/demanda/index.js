import React from 'react'
import { Card, Button } from 'react-bootstrap'

import './Demanda.css'

function Demanda(props) {
    async function handleDelete(id) {
      const confirm = window.confirm("Tem certeza que deseja excluir essa demanda?");
      if (confirm) {
        await fetch(`https://bvz-back.herokuapp.com/moradores/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    }

    return(
        <Card style={{ width: '15rem' }} id={props.id}>
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
                    <Button
                      className="button-delete"
                      onClick={() => handleDelete(props.id)}
                    >
                      Delete
                    </Button>
                    <Button className="button-update">Atualizar</Button>
                </Card.Body>
            </Card>
    )
}

export default Demanda;