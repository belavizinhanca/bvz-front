import React from 'react'
import { Container } from 'react-bootstrap'

import './QuemSomos.css'
import goal from '../images/goal.png'
import team from '../images/equipe.png'

function QuemSomos() {
    return(
        <div className="main-section">
            <section className="goal">
                <Container className="flex-container">
                    <div className="text-container">    
                        <h2>Nosso Objetivo</h2>
                        <p>Usar a Plataforma Bela vizinhança para ajudar moradores de rua situado na Bela vista. Incentivando moradores residenciais a criar uma conexão com moradores de rua, para entender quais suas necessidades real. Assim minimizando suas dores. A Plataforma é de fácil acesso e simples funcionalidade, para facilitar quem quer ajudar o próximo.</p>
                    </div>

                    <div className="img-container">
                        <img className="img-goal" src={goal} alt="Imagem Nosso Objetivo" />
                    </div>
                </Container>
            </section>

            <section className="team">
                <Container className="flex-container">
                    <div className="img-container">
                        <img src={team} alt="Imagem Nossa Equipe" />
                    </div>

                    <div className="text-container">
                        <h2>Nossa Equipe</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue ex a lacus consequat blandit. Cras eros sapien, volutpat eu diam et, lobortis aliquet massa. Duis congue et odio non varius. Curabitur mattis consequat massa fermentum lacinia.</p>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default QuemSomos;