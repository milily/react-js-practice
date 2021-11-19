import './App.css';
import HookForm from './components/HookForm';
import Comentario from './components/SaludoProps';
import Saludo from './components/SaludoProps'
import UsandoUseEffect from './components/UseEffect';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'



function App() {

  const sujeto = {
    nombre: 'Emmita',
    urlImagen: 'https://via.placeholder.com/64',
    texto: 'Me gusta jugar a cualquier hora y por eso despiertos a mis humanos a cualquier hora'
  }

  return (
    <Router>
       <div className="container mt-2">
         <h1>Aquí va el Navbar</h1>
         <Routes>
          <Route path="/" element={<HookForm />}> 
          </Route>
          <Route path="/comentario" element={<Comentario sujeto={sujeto} nombre={['Julio']}/> }>
          </Route>
          <Route path="/gifs" element={<UsandoUseEffect />}> 
          </Route>
         </Routes>
      </div>
    </Router>
   
  );
}

export default App;
