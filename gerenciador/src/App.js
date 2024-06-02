import "./App.css";
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {
  return (
    <div className="App">
      <SayMyName name='Dinei'/>
      <Pessoa nome='Dinei' idade='40' profissao='Programador' img='https://via.placeholder.com/150'/>
    </div>
    
  );
}

export default App;
