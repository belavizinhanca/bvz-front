import React from 'react'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { BsFillPlusCircleFill } from "react-icons/bs";

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
                <h2>Veja abaixo a lista de demandas</h2>
            </div>
            <Container>
                <div className="container-demandas-d">
                    <div className="icon-demanda">
                        <a href="/cadastrar-demanda" to="/cadastrar-demanda" title="Cadastar demanda">    
                            <BsFillPlusCircleFill />
                        </a>
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