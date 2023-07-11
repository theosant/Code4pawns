import React from 'react'
import './style.css'
import {Link} from 'react-router-dom';

function Resultado() {
  return (
    <>
    <div className="resultado">
        <h2 className='resultado-titulo'>Seu Perfil é</h2>
        <h3 className='resultado-subtitulo'>Viajante</h3>
        <p className='resultado-texto'>
        Uma pessoa com perfil viajante é alguém que adora explorar o mundo, conhecer novos lugares e culturas. Essas pessoas geralmente têm uma sede constante por aventura e desejam experimentar tudo o que o mundo tem a oferecer. No entanto, ao adotar um animal de estimação, é importante considerar a compatibilidade entre o estilo de vida do viajante e as necessidades do animal.
        </p>
        <Link to="/AnimalList" className='resultado-link'>Ver animais</Link>
    </div>
    </>
  )
}

export default Resultado