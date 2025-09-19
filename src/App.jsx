// App.jsx
import './App.css';
import Condicional from './components/Condicional';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  return (
    <div className='App'>
      <h1>Tela de Cadastro</h1>

      <div className="section">
        <Condicional />
      </div>

      <div className="section">
        <Evento />
      </div>

      <div className="section">
        <Form />
      </div>
    </div>
  )
}

export default App;
