import React from 'react'
import RatingReview from '../starRating'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from "react-redux"
import { gameId } from '../store/detailProvider'

const carousalCard = ({id,img,name,rating,updated}) => {

  const navigate = useNavigate()
  const dispatch  = useDispatch()

  
  
  const forward = ()=>{

    navigate('/gameDetail')
    dispatch(gameId({status:true,gameid:id}))
    
  }
  return (
    <div className='flex  mt-4  mx-8 border  '>
<div className=' flex max-h-96  '>
    <img src={img} alt="" className=' max-h-lvh' />
</div>
<div className=' grid font-merri  justify-center  w-full grid-flow-row '>
    <div className='flex items-center font-new text-3xl  '>
        {name}
    </div>
    <div className='flex font-new text-3xl tracking-widest '>
    {updated}
    </div>
    <div className=' '>
    <button className='border flex items-start border-white px-10 rounded-md tracking-wider font-new font-bold text-xl p-6' onClick={()=>forward()}>Read More</button> 
    </div>
</div>

    </div>
  )
}

export default carousalCard