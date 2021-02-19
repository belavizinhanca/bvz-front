import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useState } from 'react'
import Axios from "axios"

import './Demanda.css'

function Demanda(props) {
/*     const [employeeList, setEmployeeList] = useState([]);

    const deleteEmployee = (id) => {
        Axios.delete(`http://localhost:3001/moradores/${id}`).then((response) => {
          setEmployeeList(
            employeeList.filter((val) => {
              return val.id != id;
            })
          );
        });
      };

    {employeeList.map((val, key) => {
        
    })}   */
    const [id, setId] = useState({
        id: ''
    })
    
    function getId() {
      
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
                    <Button className="button-delete">
                  Delete
                </Button>
                    <Button className="button-update">Atualizar</Button>
                </Card.Body>
            </Card>
    )
}

export default Demanda;