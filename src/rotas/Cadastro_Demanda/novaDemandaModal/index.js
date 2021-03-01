import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import CadDemanda from '../form';
import './novademanda.css'

export default function NovaDemanda() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className="btn-nova-demanda" variant="primary" onClick={handleShow}>
          Cadastrar Nova Demanda
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cadastre uma Nova Demanda</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <CadDemanda />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  