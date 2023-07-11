import './App.css';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Header from './components/header/index.jsx';
import Home from './components/Home';
import MeuFormulario from './components/Formulario/QuizzCliente';
import CadastroCliente from './components/Formulario/CadastroCliente';
import CadastroAdmin from './components/Formulario/CadastroAdmin';
import CadastroAnimal from './components/Formulario/CadastroAnimal';
import Resultado from './components/Resultado'
import {Route, Routes} from 'react-router-dom'
import AnimalList from './components/AnimalList';
import AnimalPage from './components/AnimalPage';
import AgendarPasseio from './components/AgendarPasseio';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/Quizz" element={<MeuFormulario/>}></Route>
            <Route exact path="/AnimalList" element={<AnimalList/>}></Route>
            <Route exact path="/Resultado" element={<Resultado/>}></Route>
            <Route exact path="/Animal/:id" element={<AnimalPage/>}></Route>
            <Route exact path="/AgendarPasseio/:id" element={<AgendarPasseio/>}></Route>
            <Route exact path="/admin/cadastroCliente" element={<CadastroCliente/>}></Route>
            <Route exact path="/admin/cadastroAnimal" element={<CadastroAnimal/>}></Route>
            <Route exact path="/admin/cadastroAdmin" element={<CadastroAdmin/>}></Route>
        </Routes>
        <Contato />
        <Footer />
    </div>
  );
}

export default App;