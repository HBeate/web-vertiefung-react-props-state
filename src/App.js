import logo from './logo.svg';
import './App.css';
import Vote from './components/vote';

function App() {
  return (
    <div className="App">
      <h1>Votes</h1>
      <div className="container">
      <Vote candidate="Lara" age="18"/>
     <Vote candidate="Marvin"  age="16" />
     <Vote candidate="Alina"  age="14" />


      </div>

    </div>
  );
}

export default App;
