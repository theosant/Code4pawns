import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/header/index.jsx';

function App() {
  return (
    <div className="App">
        <Card image={'/imagens/f0035.jpg'} name={'MAX'} />
        <Footer />
      <Header />
    </div>
  );
}

export default App;
