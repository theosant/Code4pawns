import React, { useState } from 'react';
import './form.css'
import { Link } from 'react-router-dom';

const MeuFormulario = () => {
  const [formulario, setFormulario] = useState({
    residencia: 'Casa',
    criancas: false,
    ficarCasa: 0,
    viajar: 0,
    renda: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com o envio do formulário
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <h1 className='titulo'>Qual animal você prefere?</h1>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor='residencia'>
            Que tipo de residência você possui:
          </label>
          <select name="residencia" id="" value={formulario.residencia} onChange={handleChange}>
            <option value="casaVaranda">Casa com espaço livre</option>           
            <option value="casaFechada">Casa com pouco espaço</option>           
            <option value="apartamento">Apartamento</option>           
            <option value="sitioFazenda">Sítio/Fazenda</option>           
          </select>
        </div>
        <div className="campo">
          <label htmlFor='criancas'>
            Você possui crianças?
          </label>
          <select name="criancas" id="" value={formulario.criancas} onChange={handleChange}>
            <option value="sim">Sim</option>           
            <option value="nao">Não</option>                  
          </select>
        </div>
        <div className="campo">
          <label htmlFor='ficarCasa'>
            Gosta de ficar em casa?
          </label>
          <select name="ficarCasa" id="" value={formulario.ficarCasa} onChange={handleChange}>
            <option value="sim">Sim</option>           
            <option value="nao">Não</option>     
          </select>
        </div>
        <div className="campo">
          <label htmlFor='viajar'>
            Gosta de viajar?
          </label>
          <select name="viajar" id="" value={formulario.viajar} onChange={handleChange}>
            <option value="sim">Sim</option>           
            <option value="nao">Não</option>            
          </select>
        </div>
        <div className="campo">
          <label htmlFor='renda'>
            Qual sua renda?
          </label>
          <select name="renda" id="" value={formulario.renda} onChange={handleChange}>
            <option value="1000-">R$ 1000.00-</option>           
            <option value="1000/2000">R$ 1000.00 - 2000.00</option>           
            <option value="2000/3000">R$ 2000.00 - 3000.00</option>           
            <option value="3000/4000">R$ 3000.00 - 4000.00</option>           
            <option value="4000+">R$ 4000.00+</option>           
          </select>
        </div>
        <div className="campo">
          <Link to='/Resultado'>
            <button className='link-resultado' type="submit">
              Ver resultado
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default MeuFormulario;
