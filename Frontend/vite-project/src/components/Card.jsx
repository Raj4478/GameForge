import React from 'react'
import RatingReview from './starRating'
import { useState } from 'react'

const Card = ({img,rating,name,updated}) => {
  

  return (
    
  

   
    <div className='p-2 text-white h-full' >
      
      <div className='object-contain  ' >
      <img src={img} alt="" className='rounded-2xl object-contain' />

      </div>
      <div className='flex justify-center'>
        <RatingReview rating={rating}/> 
      </div>
    
      

  <div className='text-center'>
    <h3>{name}</h3>
  </div>

<div className='text-center tracking-wider '>
  Latest Update : {updated}
</div>
    
    
</div>
    
  )
}

export default Card