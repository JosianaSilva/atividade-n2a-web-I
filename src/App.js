import './App.css';
import React from 'react';
import { useState } from 'react';
import getMockAthletes from './services/api';
import AthleteCard from './components/AthleteCard/AthleteCard';

function App() {
  const [athletes, setAthletes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    const result = await getMockAthletes(searchTerm);
    setAthletes(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Pesquise por um atleta</p>
        <input 
          type="text" 
          placeholder="Digite o nome do atleta" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Pesquisar</button>
        
        {athletes.length > 0 && (
          <AthleteCard athlete={athletes[0]} />
        )}
      </header>
    </div>
  );
}

export default App;
