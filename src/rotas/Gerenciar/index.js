import React from 'react'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'

import './Gerenciar.css'
import Demanda from './demanda'
import NovaDemanda from '../Cadastro_Demanda/novaDemandaModal'

function Gerenciar() {
    const [demanda, setDemanda] = useState()

    useEffect(() => {
        async function fetchData() {
            const demanda = await fetch('https://bvz-back.herokuapp.com/moradores')
            const demandaJson = await demanda.json()
            setDemanda(demandaJson)
        }
        fetchData()
    });

    return(
        <section className="section-gerenciar">
            <Container>
                <NovaDemanda />
                <h2>Gerenciar Demandas</h2>

                <div className="container-demandas">
                    <div className="demandas">
                        {demanda && demanda.map(item => <Demanda id={item._id} nome={item.nome} perfil={item.perfil} demanda={item.demanda} />)}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Gerenciar;