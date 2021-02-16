import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Routes from './Routes.js'
import Menu from './components/Menu'
import Footer from './components/Footer'

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

    <footer>
      <Footer />
    </footer>
    </BrowserRouter>
  );
}

export default App;
