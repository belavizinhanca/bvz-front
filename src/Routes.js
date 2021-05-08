import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from "./services/auth";




import Home                 from './routes/Home'
import QuemSomos            from './routes/QuemSomos'
import Mediador             from './routes/Mediador'
import CadastroMediador     from './routes/Cadastro_Mediador'
import Demandas             from './routes/Demandas'
// import CadDemanda           from './rotas/Cadastro_Demanda'
import Contato              from './routes/contato'
import Gerenciar            from './routes/Gerenciar'
import Login                from './routes/Login'
// import Cadastro             from './rotas/Cadastro'
import Uteis                from './routes/uteis'
import Equipe               from './routes/Equipe'


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />) : (<Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

function Routes() {
    return(
        <Switch>
            <Route exact path="/"                       component={Home} />
            <Route exact path="/quem-somos"             component={QuemSomos} />
            <Route exact path="/contato"                component={Contato} />
            <Route exact path="/mediador"               component={Mediador} />
            <Route exact path="/cadastro-mediador"      component={CadastroMediador} />
            <Route exact path="/doacao"                 component={Demandas} />
            <Route exact path="/servicos-uteis"         component={Uteis} />
            {/* <Route exact path="/cadastrar-demanda"  component={CadDemanda} /> */}
            <Route exact path="/entrar"                 component={Login} />
            {/* <Route exact path="/cadastro"           component={Cadastro} /> /> */}
            {/* depois mudar para PrivateRoute */}
            <Route exact path="/gerenciar"              component={Gerenciar} />
            <Route exact path="/equipe"              component={Equipe} />
            <Route path="*"                             component={() => <h1>Page not found</h1>} />
        </Switch>
    )
}

export default Routes;


