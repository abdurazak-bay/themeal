import React from 'react'
import './List.css'
import Card from '../Card/Card'

function ProductList({data}) {
  return (
    <div className='glava'>
      <h5>Latest Meals</h5>
      <div className='product-list'>
        {
            data.map((item) => (
                <Card key={item.idMeal} card={item}/>
            ))
        }
      </div>
    </div>
  )
}

export default ProductList
