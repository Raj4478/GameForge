import React from 'react'
import { useState,useEffect } from 'react'
import SwipeCarousel from './Carousal/Carousal'
import Sidebar from './Sidebar/Sidebar.jsx'
import Card from './Card.jsx'
import Slider from "react-slick"
import Action from './Genre/Action.jsx'
import Adventure from './Genre/Adventure.jsx'
import Sports from './Genre/Sports.jsx'
import Fighting from './Genre/Fighting.jsx'
import { color, motion,useScroll } from 'framer-motion'



const Home = () => {

    const [apiData,setApiData] = useState(null)
    
    
const url = "https://api.rawg.io/api/games?key=cebccbc149c146ba9f034b6e6fda3dcd";

const genre = `https://api.rawg.io/api/genres?key=cebccbc149c146ba9f034b6e6fda3dcd`



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

const styleContainer = {
  position: "relative",
  width: 50,
  height: 50
};


const spinTransition = {
  repeat: Infinity,
  ease: "easeInOut",
  // width: ['100%', '50%'],
  duration: 1
};


const genreData = async() => {

  const fields = await fetch(genre)
  const data = await fields.json()
  
  
}



const gameData = async() => {

    const games = await fetch(url);
    const data = await games.json();
   // console.log(data);
    
    
    setApiData(data.results)

    
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,  display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

const settings = {
  
  
  infinite:true,
  speed:500,
  slidesToShow : 4,
  slidesToScroll : 3,
  nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
}

useEffect(()=>{



  
  gameData(),
  genreData()
  },[])

  return apiData? (
    <div className='  '>
      
      

<div className=' text-white'>
 


<div className='mx-12 flex  '>
<SwipeCarousel/>
</div>


</div>

<div className='  m-20 my-10 '>
<h2 className='text-white ml-2 mb-4 text-2xl font-new '>
    Action
   </h2>
  <Action/>
</div>

<div className='m-20 my-10'>
<h2 className='text-white ml-2 mb-4 text-2xl font-new '>
    Adventure
   </h2>
  <Adventure/>
</div>
<div className='m-20 my-10'>
<h2 className='text-white ml-2 mb-4 text-2xl font-new '>
    Sports
   </h2>
  <Sports/>
</div>
<div className='m-20 my-10'>
<h2 className='text-white ml-2 mb-4 text-2xl font-new '>
    Fighting
   </h2>
  <Fighting/>
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


export default Home