import React, { useState } from 'react';
import './form.css';

const CadastroAdmin = () => {
  const [formulario, setFormulario] = useState({
    nome: '',
    cpf: '',
    senha: '',
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
      <h1>Formulário de Cadastro</h1>
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
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            name="cpf"
            value={formulario.cpf}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            name="senha"
            value={formulario.senha}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <button className='link-resultado' type="submit">Criar</button>
        </div>
      </form>
    </div>
  );
};

export default CadastroAdmin;
