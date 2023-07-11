import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <div className='footer'>
        <b> Feito por:</b><br /><br />
      <div className='div-logo'>
        <img src='/imagens/paw.png' className='logo'/>
      </div>
      <div className='div-names'> 
        Ketlen Victoria Martins de Souza <br />
        Rebeca Viera Carvalho <br />
        Reynaldo Coronatto Neto <br />
        Théo da Mota dos Santos <br />
        Thierry de Souza Araujo <br />
      </div>
    </div>
  )
}

export default Footer