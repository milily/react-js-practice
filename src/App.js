import './App.css';
import HookForm from './components/HookForm';
import Comentario from './components/SaludoProps';
import Saludo from './components/SaludoProps'

function App() {

  const sujeto = {
    nombre: 'Emmita',
    urlImagen: 'https://via.placeholder.com/64',
    texto: 'Me gusta jugar a cualquier hora y por eso despiertos a mis humanos a cualquier hora'
  }
  
  return (
    <div className="container mt-2">
        <HookForm />
        <Comentario sujeto={sujeto}/>
    </div>
  );
}

export default App;
