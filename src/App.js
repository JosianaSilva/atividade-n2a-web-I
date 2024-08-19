import './App.css';
import React, { useState } from 'react';
import fetchDrivers from './services/api';
import DriverCard from './components/DriverCard/DriverCard';
import logo from './assets/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [drivers, setDrivers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    const result = await fetchDrivers(searchTerm);
    setDrivers(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="banner">
          <div className="slogan">
            <h1>
              Encontre o Seu <br/>
              Piloto Favorito!
            </h1>
          </div>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Botão de atalho para o campo de pesquisa */}
        <button 
          className="search-button" 
          onClick={() => document.getElementById('search-input').scrollIntoView({ behavior: 'smooth' })}
        >
          <i className="fas fa-search"></i> {/* Ícone de pesquisa */}
        </button>

        {/* Container para o campo de input e o botão de pesquisa */}
        <div className="search-container">
          <input
            id="search-input"
            type="text"
            placeholder="Digite o nome do piloto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button 
            id="search-action" 
            onClick={handleSearch} 
            className="arrow-container"
          >
            <div className="arrow"></div>
            <div className="arrow"></div>
            <div className="arrow"></div>  
          </button>
        </div>
        
        {drivers.length > 0 && <DriverCard driver={drivers[0]} />}
      </header>
    </div>
  );
}

export default App;



