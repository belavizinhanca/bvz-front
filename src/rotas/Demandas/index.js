import React from 'react'
import { useState, useEffect } from 'react'
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { BsFillPlusCircleFill } from "react-icons/bs";

import titulo from '../../components/images/hall.png';

import './Demandas.css'
import Demanda from './demanda'



function Demandas() {
    const [demanda, setDemanda] = useState()

    useEffect(() => {
        async function fetchData() {
            const demanda = await fetch('https://bvz-back.herokuapp.com/moradores')
            const demandaJson = await demanda.json()

            setDemanda(demandaJson)
        }
        fetchData()
    })

    function doacao() {
        alert('Doação concluida!')
    }

    return(
        <section className="section-demandas">
            <div className="banner">
                <h2>Encontre uma causa para ajudar</h2>
            </div>
            <Container>
                <div className="container-demandas-d">
                    <div className="icon-demanda">
                        <OverlayTrigger
                                placement="left"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}>
                        <a href="/cadastrar-demanda" to="/cadastrar-demanda" title="Cadastar demanda">    
                            <BsFillPlusCircleFill />
                        </a>
                        </OverlayTrigger>
                    </div>
                    <div className="demandas">
                        {demanda && demanda.map(item => <Demanda nome={item.nome} perfil={item.perfil} demanda={item.demanda} onClick={doacao}/>)}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Demandas;


const renderTooltip = (props) => (
    <Tooltip id="icon-demanda" {...props}>
      Cadatre uma nova demanda
    </Tooltip>
  );
  