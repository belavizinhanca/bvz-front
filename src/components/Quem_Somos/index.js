import React from 'react'
import { Container } from 'react-bootstrap'

import './QuemSomos.css'
import goal from '../images/goal.png'
import team from '../images/equipe.png'

function QuemSomos() {
    return(
        <div className="main-section">
            <section className="main-section goal">
                <Container className="flex-container">
                    <div className="text-container">    
                        <h2>Nosso Objetivo</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue ex a lacus consequat blandit. Cras eros sapien, volutpat eu diam et, lobortis aliquet massa. Duis congue et odio non varius. Curabitur mattis consequat massa fermentum lacinia.</p>
                    </div>

                    <div className="img-container">
                        <img src={goal} alt="Imagem Nosso Objetivo" />
                    </div>
                </Container>
            </section>

            <section className="main-section team">
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