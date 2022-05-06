import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [fact, setFact] = useState()
  const handleClick = () => {
    axios.get(`https://api.meta-api.io/api/spells/${process.env.REACT_APP_META_API_SPELL}/runSync?apikey=${process.env.REACT_APP_META_API}`)
      .then(data => setFact(data.data))
      .catch(err => console.error(err))
  }

  return (
    <div className="App">
      <h1> Meta Api connexion</h1>
      <button onClick={handleClick} >Charger une blague</button>
      {/** Afficher le résultat du spell */}
      {fact && <p>{fact.yodish}</p>}
    </div>
  );
}

export default App;
