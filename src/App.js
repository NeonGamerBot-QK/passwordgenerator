import logo from './logo.svg';
import './App.css';
import Result from './componets/Result';

function App() {
  return (
    <div className="App">
      <header className="App-header ">
      <div className="generator">
      <img src={logo} className="App-logo" alt="logo" />
     <Result />
      </div>
      
      </header>
    </div>
  );
}

export default App;
