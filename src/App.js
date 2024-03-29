import './App.css?55496874'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Routes from './Routes.js'
import Menu from './components/Menu'
import Copyright from './components/copyright'
import Footer from './components/Footer'
import BtnFlutuante from './components/btnDoe'
import Menumidias from './components/MenuMidias'
import { AuthProvider } from './contexts/auth'

function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
