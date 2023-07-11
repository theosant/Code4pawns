import './App.css';
import Card from './components/Card';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Header from './components/header/index.jsx';
import Form from './components/Formulario/QuizzCliente';
import Home from './components/Home';
import MeuFormulario from './components/Formulario/QuizzCliente';
import CadastroCliente from './components/Formulario/CadastroCliente';
import {Route, Routes} from 'react-router-dom'
import AnimalList from './components/AnimalList';
import AnimalPage from './components/AnimalPage';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/Quizz" element={<MeuFormulario/>}></Route>
            <Route exact path="/AnimalList" element={<AnimalList/>}></Route>
            <Route exact path="/animal/:id" element={<AnimalPage/>}></Route>
        </Routes>
        {/* <Home /> */}
        {/* <Card image={'/imagens/f0035.jpg'} name={'MAX'} /> */}
        <Contato />
        <Footer />
    </div>
  );
}

export default App;