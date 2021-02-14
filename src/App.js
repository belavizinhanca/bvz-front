import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Routes from './Routes.js'
import Menu from './components/Menu'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <Menu />
      </header>
      <main>
        <Routes />
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
