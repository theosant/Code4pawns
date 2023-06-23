import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Card image={'/imagens/f0035.jpg'} name={'MAX'} />
        <Footer />
    </div>
  );
}

export default App;
