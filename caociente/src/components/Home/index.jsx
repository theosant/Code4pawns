import * as React from 'react';
import './style.css'

const Home = () => {
    return (
        <div className='back'>
            <div className='welcome-section'>
            <div className='overlay'>
            <h1>Bem-vindo à Defesa Animal Municipal de São Carlos.</h1>
            <p>
                Nosso compromisso é com o bem-estar e a proteção dos animais em nossa cidade. Somos uma instituição dedicada a promover a conscientização, a adoção responsável e a defesa dos direitos dos animais.
            </p>
            </div>

        </div>
        <div className='card-back'>
            <div className='card'>
                <h2>Descubra já qual animal combina com seu perfil!</h2>
                <a href='#' className='button teste'>Faça o teste</a>
            </div>

        </div>

        <div className='gallery'>
        <div className='image'>
            <img src='/imagens/f0035.jpg' alt='Imagem 1'/>
        </div>
        <div className='image'>
            <img src='/imagens/f0035.jpg' alt='Imagem 2'/>
        </div>
        <div className='image'>
            <img src='/imagens/f0035.jpg' alt='Imagem 3'/>
        </div>
        </div>
        <div className='button-back'>
            <button className='button mais'>Mais fotos</button>
        </div>
        </div>
    );
};

export default Home;