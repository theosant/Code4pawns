import * as React from 'react';
import {Link} from 'react-router-dom';
import { caes } from '../../data/caes';
import './style.css';
import Card from '../Card';

const AnimalList = () => {

    const [caes_data, setCaes] = React.useState([]);

    React.useEffect(() =>{
        setCaes(caes);
    }, [])

    return (
        <div className='back-animals'>
            <div className='animal-list'>
                {
                    caes_data ? caes_data.map((cao)=>(
                        <div className='back-card-animals'> 
                        <a href={'/animal/' + cao.id}>
                            <Card image={cao.img} name={cao.nome}/>
                        </a>
                        </div>
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

export default AnimalList;