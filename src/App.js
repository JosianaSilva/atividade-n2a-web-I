import './App.css';
import React from 'react';
import { useState } from 'react';
import fetchDrivers from './services/api';
import DriverCard from './components/DriverCard/DriverCard';

function App() {
  const [drivers, setDrivers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearch = async () => {
    const result = await fetchDrivers(searchTerm);

    console.log('result', result);
    
    setDrivers(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Pesquise por um piloto</p>
        <input 
          type="text" 
          placeholder="Digite o nome do piloto" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Pesquisar</button>
        
        {drivers.length > 0 && (
          <DriverCard driver={drivers[0]} />
        )}
      </header>
    </div>
  );
}

export default App;
