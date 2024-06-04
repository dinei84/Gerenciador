import "./App.css";
import HelloWord from './components/HelloWord'
import Evento from './components/Evento'
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <HelloWord/>

      <Evento numero='1'/>
      <Evento numero='2'/>

      <Form />
    </div>
  );
}

export default App;
