import * as React from 'react';
import {Link, Navigate} from 'react-router-dom';
import { caes } from '../../data/caes';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './style.css';

function AgendarPasseio() {
  const [dataPasseio, setDataPasseio] = React.useState('');

  const [cao, setCao] = React.useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() =>{
      setCao(caes.find(cao => cao.id === Number(id)));
  }, [caes])

  
  const handleAgendarPasseio = () => {
    if(dataPasseio){
        alert('Passeio confirmado. Todo o processo será notificado através do email');
        navigate('/');
    }else{
        alert('Escolha um dia.');
    }
  };


  return (
    
    <div className="back-animals">
        <div className="card-passeio">
            <div className="container-animal">
                <div className="left-section">
                    <div >
                        <img className="image" src={cao.img}/>
                    </div>

                </div>
                <div className="info-card">
                    <h2 className='animal-name-title'>{cao.nome}</h2><br/>
                <ul className='list'>
                    <li><strong>Tipo:</strong> {cao.tipo}</li>
                    <li><strong>Idade:</strong> {cao.idade}</li>
                    <li><strong>Porte:</strong> {cao.porte}</li>
                    <li><strong>Castrado:</strong> {cao.castrado ? "Sim" : "Não"}</li>
                </ul>
                </div>
            </div>
        <div className="date-input">
            <label htmlFor="date">Data do passeio:</label>
            <input
            type="date"
            id="date"
            value={dataPasseio}
            onChange={(e) => setDataPasseio(e.target.value)}
            />
        </div>
        <button className="agendar-button" onClick={handleAgendarPasseio}>
            Agendar
        </button>
        </div>

    </div>
  );
}

export default AgendarPasseio;
