import React from 'react'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

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
            <Container>
                <h2>Veja abaixo a lista de demandas</h2>

                <div className="container-cad-demandas">
                    <h2>Clique no botão para fazer uma nova demanda</h2>
                    <a as={Link} href="/cadastrar-demanda" to="/cadastrar-demanda" className="button">Cadastrar Demanda</a>
                </div>

                <div className="container-demandas">
                    <h2>Demandas</h2>
                    <hr />
                    <div className="demandas">
                        {demanda && demanda.map(item => <Demanda nome={item.nome} perfil={item.perfil} demanda={item.demanda} onClick={doacao}/>)}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Demandas;