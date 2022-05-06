import './App.css';

function App() {
  const handleClick = () => {
    console.log('OK')
  }
  
  return (
    <div className="App">
      <h1> Meta Api connexion</h1>
      <button onClick={handleClick} >Charger une blague</button>
      {/** Afficher le résultat du spell */}
    </div>
  );
}

export default App;
