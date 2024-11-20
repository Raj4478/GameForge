import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarousalCard from './CarousalCard';
import { useState,useEffect } from 'react';

const SwipeCarousel = () => {
  const url = "https://api.rawg.io/api/games?key=cebccbc149c146ba9f034b6e6fda3dcd"


  const [apiData,setApiData] = useState()
  
  const gameData = async() => {
  
      const games = await fetch(url);
      const data = await games.json();
     
      
    
      setApiData(data.results)
  
      
  }
  useEffect(()=>{

    gameData()
    },[])

  return apiData? (
    <div className="flex  h-full w-full">
      <Carousel>
        {apiData.map((image, index) => (
          <Carousel.Item key={image.id} className='pb-10'>
        
   <CarousalCard id = {image.id} key={image.id} img = {image.background_image} name = {image.name} rating = {image.rating} updated = {image.released}/>

           
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  ):"processing";
}







 


export default SwipeCarousel