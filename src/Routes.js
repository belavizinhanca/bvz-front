import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import QuemSomos from './components/Quem_Somos'
import Mediador from './components/Mediador'
import CadastroMediador from './components/Cadastro_Mediador'
import Demandas from './components/Demandas'
import CadDemanda from './components/Cadastro_Demanda'
import Contato from './components/Contato'
import Gerenciar from './components/Gerenciar'
import Login from './components/Login'
import Cadastro from './components/Cadastro'

function Routes() {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/quem-somos" component={QuemSomos} />
            <Route exact path="/contato" component={Contato} />
            <Route exact path="/mediador" component={Mediador} />
            <Route exact path="/cadastro-mediador" component={CadastroMediador} />
            <Route exact path="/doacao" component={Demandas} />
            <Route exact path="/cadastrar-demanda" component={CadDemanda} />
            <Route exact path="/entrar" component={Login} />
            <Route exact path="/cadastro" component={Cadastro} />
            <Route exact path="/gerenciar" component={Gerenciar} />
        </Switch>
    )
}

export default Routes;