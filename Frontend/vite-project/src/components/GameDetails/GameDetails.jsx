import React, { useEffect,useState } from 'react'
import {useSelector} from "react-redux"
import PicCarousal from './PicCarousal'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'
import { motion } from 'framer-motion'


const GameDetails = () => {

  const select = useSelector((state)=> state.data.gameid)
  console.log(select);
  
const game = `https://api.rawg.io/api/games/${select}?key=${import.meta.env.VITE_API_KEY}`
const gameTrailer =  `https://api.rawg.io/api/games/${select}/screenshots?key=${import.meta.env.VITE_API_KEY}`


const loggedin = () => toast('🦄 Game is successfully fetched', {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme:"dark",
  progress: undefined,
  
  
  });

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
  

const savedId = async()=> {

  let jsons = {gameid : select}
  console.log("inside try",select);
  

  try {
    
  const urls = `/api/v1/users/gameid`

  axios({method:'post',
    url: urls,
    data:jsons,
  })
  .then(res=>{
    return  loggedin()}).catch(err=>console.log((err))
  )




  } catch (error) {
    console.log(error);
    
  }
}



const [apiData,setApiData] = useState(null)

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,


  
};






const [screenShots,setScreenshots] = useState(null)

const shotsData = async() => {
  try {
    const fields = await fetch(gameTrailer)
      const data = await fields.json()
      
      setScreenshots(data.results)
    
    
    
  } catch (error) {
   console.log("moviesApi", error);
    
  }
}


const gameData = async() => {
    

    try {
        const fields = await fetch(game)
        const data = await fields.json()
      console.log(data);
      
    
      
        setApiData(data)
    } catch (error) {
        console.log("Api Error",error);
        
    }
    
  }



  useEffect(()=>{

    gameData(),
    shotsData()
  },[])

  useEffect(()=>{

    gameData(),
    savedId
  
  },[])
  return (apiData && screenShots) ? (

    <>
    <div className='text-center flex justify-center text-white font-bold text-xl my-4 '>
      <h1>
        {apiData.name}
      </h1>
    </div>
  
    <div className='   '>
<div className='m-4 justify-center flex items-center'>
    <motion.img initial={{y:-100}} animate={{y:0}} transition={{type:"spring",stiffness:100,duration:2}}src={apiData.background_image?apiData.background_image:"#"} alt="" className=' object-cover' />
</div>
<motion.div initial={{opacity:[0,0,0,0]}} animate={{opacity:[0,0.2,0.6,1]}} transition={{duration:3}} className='p-4 '>
<Slider {...settings}>
{screenShots.map((pic) => {
 return <PicCarousal img = {pic.image} />

})}
</Slider>

   </motion.div>

   <div className='my-6 flex justify-center'>
    <motion.button initial={{opacity:[0,0,0,0]}} animate={{opacity:[0,0.2,0.6,1]}} transition={{duration:3}}   className='border p-3 rounded-xl text-white hover:font-black duration-300  ' onClick={()=>savedId()} >
      Add To Cart
    </motion.button>
   </div>

   <div>
  <motion.h1 initial={{opacity:[0,0,0,0]}} animate={{opacity:[0,0.2,0.6,1]}} transition={{duration:3}}    className='text-white text-2xl font-new pb-6 ml-10'>
    PlatForms
  </motion.h1>
</div>
<motion.div initial={{opacity:[0,0,0,0]}} animate={{opacity:[0,0.2,0.6,1]}} transition={{duration:3}}   className='flex justify-evenly'>


  {apiData.platforms.map((info)=>{
    return (
      <>
      <div className='text-white text-lg '>
      <h4>
        {info.platform.name}
      </h4>
      </div>
    
      </>
    )
  })}
</motion.div>
   <div>
   <motion.h1 initial={{opacity:[0,0,0,0]}} animate={{opacity:[0,0.2,0.6,1]}} transition={{duration:3}}  className='text-white text-2xl font-new pt-6 pb-2 ml-10'>
    About
  </motion.h1>
</div>
   <motion.div initial={{opacity:[0,0,0,0]}} animate={{opacity:[0,0.2,0.6,1]}} transition={{duration:3}} className=' tracking-wider  flex text-md items-center text-center m-4 text-white'>
  <p>{apiData.description_raw}</p>
</motion.div>


<div className='text-white font-new text-2xl  mt-8 ml-10 mb-4'>
  Requirements
</div>
<motion.div initial={{opacity:[0,0,0,0]}} animate={{opacity:[0,0.2,0.6,1]}} transition={{duration:3}}  className='text-white tracking-widest m-6'>
  {apiData.platforms[0].requirements.minimum?apiData.platforms[0].requirements.minimum:apiData.platforms[1].requirements.minimum}
</motion.div>
    </div>
    <motion.div initial={{opacity:[0,0,0,0]}} animate={{opacity:[0,0.2,0.6,1]}} transition={{duration:3}}  className='text-white font-new text-2xl  mt-8 ml-10 mb-4'>
  Publishers
</motion.div>
  <motion.div initial={{opacity:[0,0,0,0]}} animate={{opacity:[0,0.2,0.6,1]}} transition={{duration:3}}  className='text-white font-semibold text-xl ml-10'>
    {apiData.publishers[0].name?apiData.publishers[0].name:""}
  </motion.div>
  <motion.div initial={{opacity:[0,0,0,0]}} animate={{opacity:[0,0.2,0.6,1]}} transition={{duration:3}}  className='text-white font-new text-2xl  mt-8 ml-10 mb-4'>
  Tags
</motion.div>
<motion.div initial={{opacity:[0,0,0,0]}} animate={{opacity:[0,0.2,0.6,1]}} transition={{duration:3}}  className='text-white grid grid-cols-2 mb-16  justify-center items-center text-lg  '>
  {apiData.tags.map((tags)=>{
    return (
      <h4 className='  ml-10'>{tags.name}</h4>
    )
  })}
</motion.div>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
theme="dark"
draggable
pauseOnHover


/>
    </>
  ):<div className='flex justify-center my-40  items-center' style={styleContainer}>
  <motion.span className='flex  justify-center items-center' 
    style={styleSpan}
    animate={{ rotate: 360 }}
    transition={spinTransition}
  />
</div>

}

export default GameDetails