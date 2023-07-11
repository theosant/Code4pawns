import './App.css';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Header from './components/header/index.jsx';
import Home from './components/Home';
import MeuFormulario from './components/Formulario/QuizzCliente';
import CadastroCliente from './components/Formulario/CadastroCliente';
import Resultado from './components/Resultado'
import {Route, Routes} from 'react-router-dom'
import AnimalList from './components/AnimalList';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/Quizz" element={<MeuFormulario/>}></Route>
            <Route exact path="/AnimalList" element={<AnimalList/>}></Route>
            {/* <Route exact path="/Animal/?id" element={}></Route> */}
            <Route exact path="/Resultado" element={<Resultado/>}></Route>
        </Routes>
        {/* <Home /> */}
        <Contato />
        <Footer />
    </div>
  );
}

export default App;