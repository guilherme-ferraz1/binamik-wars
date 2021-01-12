import './App.css';
import logo from './assets/logo.png'

import {CharactersScreen} from './components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CharactersScreen/>
      </header>

    </div>
  );
}

export default App;
