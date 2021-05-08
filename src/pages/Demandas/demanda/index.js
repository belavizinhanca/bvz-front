import React, { useState } from 'react'
import { Card, Modal, Button, Form } from 'react-bootstrap'

import './Demanda.css'

function Demanda(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
        <Modal show={show} onHide={handleClose} id={props.id}>
          <Modal.Header closeButton>
            <Modal.Title>Concluir doação</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form className="form-modal">
              <div className="inputs-container-modal">
                <Form.Group>
                    <Form.Label htmlFor="nome">Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu nome" id="nome"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="mensagem">Mensagem</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Mande uma mensagem ao mediador" id="mensagem" />
                </Form.Group>
              </div>
                    <Button className="button-modal atualiza" type="submit">
                      Enviar
                    </Button>

                    <Button className="button-modal cancela" onClick={handleClose}>
                      Cancelar
                    </Button>
                </Form>
          </Modal.Body>
        </Modal>

            <Card style={{ width: '15rem' }} className="card-demanda">
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
                        <a className="button" href="#" to="#" onClick={handleShow}>Doar</a>
                    </Card.Body>
                </Card>
        </div>
    )
}

export default Demanda;