import React from 'react'
import { Container, Accordion, Card, Button } from 'react-bootstrap'

import './uteis.css'

function Uteis() {
    return(
        <section className="section-uteis">
            <div className="container-flex-uteis">
                <Container className="uteis">
                    <h1>Conheça serviços úteis para moradores de rua na região da Bela Vista.</h1>
                <Accordion>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <h3> Casa Dom Orione</h3>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>Todos os dias são atendidos cerca de 200 pessoas em situação de rua. onde têm acesso a banho, lavagem de roupas, aulas de computação, curso para garçom, oficinas artesanais e de marchetaria, atendimento psicológico, passeios culturais, encaminhamento para emprego, além de momentos de lazer
                            <p>Doacao de marmitex</p>
                            <p>Segunda feira a sexta feira das 11:00 ate as 13:00</p>
                            <p>sábado 10:45 as 12:30</p>
                            <p>Domingo 10:45 as 12:00</p>
                            <p><a href="https://www.achiropita.org.br/projetos-sociais/casa-dom-orione" target="_black"> Visite a página e conheça mais sobre os serviços de assistência social da Achiropita</a></p>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            <h3>Centro POP</h3>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <p>Centro de Referência Especializado para População em Situação de Rua. Um projeto da prefeitura</p>
                                <p>O bairro da bela vista conta com os serviços dos agentes de saúde da UBS Nossa Senhora do brasil , agentes que fazem o serviço pop rua.
                                Atendem 600 moradores de rua que contem cadastro, e  aproximadamente 700 moradores sem cadastro por serem de outros bairros.
                                Fazem visitas em seus respectivos cadastros constantemente e os encaminham para consultas e tratamentos médicos, tem o programa de encaminhamento diário para passar pernoite nos abrigos.</p>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                <h3>AVB- Arena Bela Vista</h3>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body>
                            <p>A decisão de criar o espaço surgiu no ano de 2016, através da necessidade do treinador Antônio Carlos encontrar um lugar para treinar com o seu filho.</p>
                            <p>Antônio, conhecendo as dificuldades da população em conseguir esportes gratuito na região, resolveu com seu colega Gilson, abrir uma quadra de baixo do viadulto Julio de Mesquita Filho, conhecido como minhocão, entre Major Diogo e Manuel Dultra. Antes de iniciar o projeto social o local era evitado por pedestres por ser muito perigoso, haviam roubos constantes, conforme foram ocupando o espaco foi dando vida de lá para cá, a comunidade aderiu à ideia e montarar juntos aos dois treinadores, o time Arena Bela Vista.</p>
                            <p>O projeto se sustenta, hoje, através de doações de redes, travas, cones e pedaços de grama sintéticos dos habitantes do bairro. E, recentemente, recebeu apoio da Prefeitura de São Paulo para realizar as reformas necessárias no local.</p>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                </Container>

            </div>
        </section>
    )
}

export default Uteis;