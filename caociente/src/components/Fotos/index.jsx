import * as React from 'react';
import { fotos } from '../../data/caes';
import './style.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Fotos = () => {

    const [fotos_data, setFotos] = React.useState([]);

    React.useEffect(() =>{
        setFotos(fotos);
    }, [])

    return (
        <div className='back-carroussel'>
                <Splide aria-label="Fotos Canil">
                {
                    fotos_data ? fotos_data.map((foto)=>(
                        <SplideSlide>
                            <img src={foto.img} alt="" />
                        </SplideSlide>
                        ))
                        :
                        <p>
                        Não foi possível processar a pesquisa.
                    </p>
                }
                </Splide>
        </div>
    );
};

export default Fotos;