import React, { useState } from 'react';
import './form.css';

const CadastroCachorro = () => {
  const [formulario, setFormulario] = useState({
    nome: '',
    microchip: '',
    castrado: '',
    idade: '',
    tipo: '',
    porte: '',
    necessidades: '',
    imagem: '',
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
      <h1>Formulário de cadastro de animal</h1>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            name="nome"
            value={formulario.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="microchip">ID do Microchip:</label>
          <input
            type="text"
            name="microchip"
            value={formulario.microchip}
            onChange={handleChange}
          />
        </div>
        <div className="campo">
          <label htmlFor="castrado">Castrado:</label>
          <select
            name="castrado"
            value={formulario.castrado}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </select>
        </div>
        <div className="campo">
          <label htmlFor="idade">Idade:</label>
          <input
            type="text"
            name="idade"
            value={formulario.idade}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="tipo">Tipo:</label>
          <input
            type="text"
            name="tipo"
            value={formulario.tipo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="porte">Porte:</label>
          <select
            name="porte"
            value={formulario.porte}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="Mini">Mini</option>
            <option value="Pequeno">Pequeno</option>
            <option value="Médio">Médio</option>
            <option value="Grande">Grande</option>
            <option value="Gigante">Gigante</option>
          </select>
        </div>
        <div className="campo">
          <label htmlFor="necessidades">Necessidades:</label>
          <input
            type="text"
            name="necessidades"
            value={formulario.necessidades}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="imagem">Imagem:</label>
          <input
            type="file"
            name="imagem"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
            <div className='div-dividida botoes-duplos'>
                <button 
                    className='atributos'
                    type='button'
                    onClick={() => {
                        // handleVacina(id_cachorro)        
                    }}
                >
                    Vacinas
                </button>
                <button 
                    className='atributos'
                    type='button'
                    onClick={() => {
                        // handleHistorico(id_cachorro)        
                    }}
                >
                    Histórico <br/> de Saúde
                </button>
            </div>
            
            <button className='link-resultado' type="submit">Criar</button>
        </div>
      </form>
    </div>
  );
};

export default CadastroCachorro;
