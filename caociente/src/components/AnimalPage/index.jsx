import * as React from 'react';
import {Link} from 'react-router-dom';
import { caes } from '../../data/caes';
import { useParams } from 'react-router-dom';
import './style.css';
import Card from '../Card';

const AnimalPage = () => {

    const [cao, setCao] = React.useState([]);
    const { id } = useParams();

    React.useEffect(() =>{

        console.log(id);
        setCao(caes.find(cao => cao.id === Number(id)));
    }, [caes])
    
    
    return (
        <div className='back-animals'>
            <div className='animal-list'>
                {
                    cao ? (
                        <div className='back-card-animals'> 
                           <div className="container-animal">
                            <div className="left-section">
                                <div >
                                    <img className="image" src={cao.img}/>
                                </div>
                                <Link to='/'>
                                    <button className="adotar-button">Adotar</button>
                                </Link>
                                <Link to='/'>
                                <button className="agendar-button">Agendar Passeio</button>
                                </Link>

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
                    </div>
                    )
                    :
                    <p>
                        Não foi possível processar a pesquisa.
                    </p>
                }
            </div>
        </div>
    );
};

export default AnimalPage;