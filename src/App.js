import React, { useState } from 'react'
import './App.css?55496874'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Routes from './Routes.js'
import Menu from './components/Menu'
import Copyright from './components/copyright'
import Footer from './components/Footer'
import BtnFlutuante from './components/btnDoe'
import Menumidias from './components/MenuMidias'

//importar contexto de autenticação
import AuthContext from './components/contexts'

function App() {
  const pegaNome = localStorage.getItem('nomeUsuario')

const [nome, setNome] = useState('Entrar');
const [signed, setSigned] = useState(undefined);



  return (
    <AuthContext.Provider value={{nome, setNome, signed, setSigned}}>
      <BrowserRouter>
        <div className="App">
            <header>
              <div>       
              <Menu />
              <Menumidias />
              </div>
            </header>
            <main>
              <Routes />
            </main>
        </div>
            <BtnFlutuante />
          <footer>
            <Footer />
            <Copyright />

          </footer>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
