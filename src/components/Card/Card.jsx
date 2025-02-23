import React from 'react'
import'./Card.css'
import { Link } from 'react-router-dom'

function Card({card}) {
  return (
    <div className='tamaktar2'>
           <div className='cards2'>
           <Link to={`/meal/${card.idMeal}`}>
             <div className='card'>
             <img src={card.strMealThumb} alt="" />
             <p>{card.strMeal}</p>
             </div>
             </Link>
           </div>
         </div>
  )
}

export default Card
