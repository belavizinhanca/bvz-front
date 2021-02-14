import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import QuemSomos from './components/Quem_Somos'
import Mediador from './components/Mediador'
import CadastroMediador from './components/Cadastro_Mediador'
import Demandas from './components/Demandas'
import Contato from './components/Contato'

function Routes() {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/quem-somos" component={QuemSomos} />
            <Route exact path="/contato" component={Contato} />
            <Route exact path="/mediador" component={Mediador} />
            <Route exact path="/cadastro-mediador" component={CadastroMediador} />
            <Route exact path="/doacao" component={Demandas} />
        </Switch>
    )
}

export default Routes;