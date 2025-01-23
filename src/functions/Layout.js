import '../App.css';
import logo from '../img/PcGaming.webp';

const Layout = function layout() {
    return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Montaje PC Gaming Javier Martín ASIX2
          </h1>
          <div className="menu">
            <div><a className="App-link" href="/Pcgaming" rel="noopener noreferrer">PC Gaming</a></div>
            <div><a className="App-link" href="/Components" rel="noopener noreferrer">Componentes</a></div>
            <div><a className="App-link" href="/Details" rel="noopener noreferrer">Detalles Componentes</a></div>
            <div><a className="App-link" href="/Assembly" rel="noopener noreferrer">Montaje</a></div>
            <div><a className="App-link" href="/Testing" rel="noopener noreferrer">Testeo</a></div>
          </div>
      </header>
      </div>)
}

export default Layout;