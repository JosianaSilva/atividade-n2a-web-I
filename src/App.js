import './App.css';
import React, { useState, useEffect } from 'react';
import fetchDrivers from './services/api';
import DriverCard from './components/DriverCard/DriverCard';
import FavoriteCard from './components/FavoriteCard/FavoriteCard';
import { getFavorites } from './services/favorite';
import logo from './assets/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [drivers, setDrivers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleSearch = async () => {
    const result = await fetchDrivers(searchTerm);
    setDrivers(result);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Rolando para baixo, esconder navbar
        setIsNavbarVisible(false);
      } else {
        // Rolando para cima, mostrar navbar
        setIsNavbarVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="App">
      {/* Barra superior */}
      <nav className={`navbar ${isNavbarVisible ? 'visible' : 'hidden'}`}>
        <img src={logo} className="navbar-logo" alt="logo" />
        
        <div className="navbar-buttons">
          
          <button
            className="navbar-favorites-button"
            onClick={() => document.getElementById('search-favorites').scrollIntoView({ behavior: 'smooth' })}
          >
            <i className="fas fa-star"></i>
          </button>

          <button
            className="navbar-search-button"
            onClick={() => document.getElementById('search-input').scrollIntoView({ behavior: 'smooth' })}
          >
            <i className="fas fa-search"></i>
          </button>

        </div>
      </nav>

      <header className="App-header">
        <div className="banner">
        </div>
      </header>

      <div className="main">
        {/* Container para o campo de input e o botão de pesquisa */}
        <div className="search-container">
          <input
            id="search-input"
            type="text"
            placeholder="Digite o nome do piloto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}   
            onKeyDown={handleKeyDown} 
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

        <div className="search-results">
          {drivers.length > 0 && <DriverCard driver={drivers[0]} />}
        </div>

      </div>
      <footer>
        <div className='favorites-container'>
          <h2 id="search-favorites">Favoritos</h2>
          <div className="favorites-cards">
                {getFavorites().map((favorite, index) => (
                  <FavoriteCard key={index} favorite={favorite} />
                ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;




