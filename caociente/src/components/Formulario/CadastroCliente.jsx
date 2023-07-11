import React, { useState } from 'react';
import './form.css';

const CadastroFormulario = () => {
  const [formulario, setFormulario] = useState({
  nome: '',
  cpf: '',
  rg: '',
  cep: '',
  rua: '',
  numero: '',
  estado: '',
  comprovanteResidencia: '',
  telefone: '',
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
    <h1 className='titulo'>Formulário de Cadastro</h1>
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
      <div className='div-dividida'>  
        <div className="campo metade esquerda">
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            name="cpf"
            value={formulario.cpf}
            onChange={handleChange}
            required
            />
        </div>
        <div className="campo metade direita">
          <label htmlFor="rg">RG:</label>
          <input
            type="text"
            name="rg"
            value={formulario.rg}
            onChange={handleChange}
            required
            />
        </div>
      </div>
      <div className="campo">
        <label htmlFor="telefone">Telefone:</label>
        <input
          type="text"
          name="telefone"
          value={formulario.telefone}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="campo">
        <label htmlFor="cep">CEP:</label>
        <input
          type="text"
          name="cep"
          value={formulario.cep}
          onChange={handleChange}
          required
        />
      </div>
      <div className="campo">
        <label htmlFor="rua">Rua:</label>
        <input
          type="text"
          name="rua"
          value={formulario.rua}
          onChange={handleChange}
          required
        />
      </div>
      <div className="campo div-dividida">
        <div className="campo metade align-direita">
          <label htmlFor="numero">Número:</label>
          <input
            type="text"
            name="numero"
            value={formulario.numero}
            onChange={handleChange}
            required
            />
        </div>
        <div className="campo metade align-esquerda">
          <label htmlFor="estado">Estado:</label>
          <input
            type="text"
            name="estado"
            value={formulario.estado}
            onChange={handleChange}
            required
            />
        </div>
      </div>
      <div className="campo">
        <label htmlFor="comprovanteResidencia">Comprovante de Residência:</label>
        <input
          type="file"
          name="comprovanteResidencia"
          accept="image/*, .pdf"
          onChange={handleChange}
          required
        />
      </div>
    
      <div className="campo">
        <button className='link-resultado'  type="submit">Enviar</button>
      </div>
    </form>
  </div>
  );
};

export default CadastroFormulario;
