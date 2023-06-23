import React from 'react'
import './style.css'

function Card({ image, name }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h2 className="card-name">{name}</h2>
    </div>
  )
}

export default Card