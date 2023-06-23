import './App.css';
import Card from './components/Card';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Header from './components/header/index.jsx';
import Form from './components/Formulario';

function App() {
  return (
    <div className="App">
        <Header />
        <Card image={'/imagens/f0035.jpg'} name={'MAX'} />
        <Contato />
        <Footer />
    </div>
  );
}

export default App;