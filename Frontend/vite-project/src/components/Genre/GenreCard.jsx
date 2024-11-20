import React from 'react'
import { useState,useEffect } from 'react'
import RatingReview from '../starRating'
import { motion } from 'framer-motion'
const   GenreCard = ({id}) => {
  
const genre = `https://api.rawg.io/api/games/${id}?key=cebccbc149c146ba9f034b6e6fda3dcd`

const styleContainer = {
  position: "relative",
  width: 50,
  height: 50
};

const styleSpan = {
  display: "block",
  width: 50,
  height: 50,

  border: "7px solid #eee",
  borderTop: "7px solid #2D3134",
  borderRadius: "50%",
  boxSizing: "border-box",
  position: "absolute",
  top: "",
  left: "50vw",
  justifyContent:"center"
};

const spinTransition = {
  repeat: Infinity,
  ease: "easeInOut",
  // width: ['100%', '50%'],
  duration: 1
};



const[apiData,setApiData] = useState(null)

const genreData = async() => {


    try {
        const fields = await fetch(genre)
        const data = await fields.json()
        
        setApiData(data)
    } catch (error) {
        console.log("Api Error",error);
        
    }
    
  }

  useEffect(() => {

    genreData()
  },[])

  return apiData? (
    
  

   
    <div className='p-2 text-white  h-full hover:scale-110 duration-300 ' >
      
      <div className='    h-40 flex justify-center' >
      <img src={apiData.background_image?apiData.background_image:"#"} alt="" className='rounded-2x object-cover h-40 w-80' />

      </div>
      <div className='flex justify-center'>
        <RatingReview key={apiData.id} rating={apiData.rating}/> 
      </div>
    
      

  <div className='text-center'>
    <h3>{apiData.name}</h3>
  </div>

<div className='text-center tracking-wider '>
  Latest Update : {apiData.updated}
</div>
    
    
</div>
    
  ):<div className='flex justify-center my-40  items-center' style={styleContainer}>
  <motion.span className='flex  justify-center items-center' 
    style={styleSpan}
    animate={{ rotate: 360 }}
    transition={spinTransition}
  />
</div>

}

export default GenreCard