import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Container } from 'react-bootstrap'

import './Gerenciar.css'
import Demanda from './Demanda'
import NovaDemanda from './Cadastro_Demanda/novaDemandaModal'

import AuthContext from '../components/contexts'


function Gerenciar() {
    const [demanda, setDemanda] = useState()

    var {nome, setNome, signed, setSigned} = useContext(AuthContext);


    useEffect( () =>{
        vertoken()
        
        }, [])
    
        const vertoken = function verificarToken() {
          var token = localStorage.getItem('bvz-identifyByJsonWebTokenOnAPIserver');
        
         if(!token){
            setSigned(false)
   
         }else {

          
            fetch("http://localhost:4000/api/vertoken" ,{
             method: "GET",
             body:undefined,
             headers:{
               "Content-Type": "application/json",
               "auth":`Bearer ${token}`
             }
           }).then(response => response.json())
             .then( async (responseJson) =>  {
                await setSigned(responseJson.success)
                if(signed){
                  console.log(signed);
                }else {
                    var removeNome = localStorage.removeItem('nomeUsuario');
                    var removeToken  = localStorage.removeItem('bvz-identifyByJsonWebTokenOnAPIserver');
                  console.log(signed);

                }

                }
                )

              }
        }
    

    useEffect(() => {
        async function fetchData() {
            const demanda = await fetch('https://bvz-back.herokuapp.com/moradores')
            const demandaJson = await demanda.json()

            setDemanda(demandaJson)
        }
        fetchData()
    })

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