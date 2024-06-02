import "./App.css";
import HelloWord from './components/HelloWord'
import TestoGigante from './components/TestoGigante'
import OutroComponent from './components/OutroComponent'

function App() {
  return (
    <div className="App">
      <h1>Ola Mundo</h1>
      <HelloWord/>
      <TestoGigante/>
      <div>
      <OutroComponent/>
    </div>
    <TestoGigante/>
    </div>
    
  );
}

export default App;
