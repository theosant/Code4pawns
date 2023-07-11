import * as React from 'react';
import {Link} from 'react-router-dom';
import { fotos } from '../../data/caes';
import './style.css';
import Card from '../Card';

const Fotos = () => {

    const [fotos_data, setFotos] = React.useState([]);

    React.useEffect(() =>{
        setFotos(fotos);
    }, [])

    return (
        <div className='back-animals'>
            <div className='animal-list'>
                {
                    fotos_data ? fotos_data.map((foto)=>(
                        <img src={foto.img} alt="" />
                        ))
                    :
                    <p>
                        Não foi possível processar a pesquisa.
                    </p>
                }
            </div>
        </div>
    );
};

export default Fotos;