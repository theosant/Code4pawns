import * as React from 'react';
import './style.css'
import {Link} from 'react-router-dom';

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
            <div className='card-blue'>
                <h2>Descubra já qual animal combina com seu perfil!</h2>
                <Link to='/Quizz' className='button teste'>Faça o teste</Link>
            </div>

        </div>

        <div className='gallery'>
        <div className='image'>
            <img src='/imagens/f0035.jpg' alt='Imagem 1'/>
        </div>
        <div className='image'>
            <img src='/imagens/f0078.jpg' alt='Imagem 2'/>
        </div>
        <div className='image'>
            <img src='/imagens/f0077.jpg' alt='Imagem 3'/>
        </div>
        </div>
        <div className='button-back'>
            <Link to='/Fotos'>
                <button className='button mais'>Mais fotos</button>
            </Link>
        </div>
        <div id='contato'>
            <h2>Nosso endereço</h2> <br />
            <p>Estr. Mun. Washington José Pêra, 2840-2986 - Bela Vista São-Carlense, São Carlos - SP, 13575-675</p>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29587.32201423128!2d-47.97596704172447!3d-22.03370546128406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b879ec3e6b1ad9%3A0xf72423676b800dbe!2sCanil%20e%20Gatil%20Municipal!5e0!3m2!1spt-BR!2sbr!4v1689107029532!5m2!1spt-BR!2sbr"
                width={700}
                height={300}
                style={{ border: 0, margin: '2em 0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <h3>Entre em contato</h3><br />
                <p>Email: defesa.animal@saocarlos.sp.gov.br</p>
                <p>Tel: (016) 3374-3239</p>
        </div>

         </div>
    );
};

export default Home;