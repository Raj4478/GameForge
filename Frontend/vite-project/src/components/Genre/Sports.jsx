import React, { useEffect,useState } from 'react'
import Slider from "react-slick"
import GenreCard from './GenreCard'
import {Swiper, SwiperSlide} from 'swiper/react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {Autoplay, FreeMode,Pagination} from 'swiper/modules'
import RatingReview from '../starRating'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { gameId } from '../store/detailProvider'

const   Sports = () => {

    const genre = `https://api.rawg.io/api/genres?key=${import.meta.env.VITE_API_KEY}`

    const[apiData,setApiData] = useState(null)

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
    
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
      
    };

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const genreData = async() => {
    

        try {
            const fields = await fetch(genre)
            const data = await fields.json()
          
          
            setApiData(data.results[15].games)
        } catch (error) {
            console.log("Api Error",error);
            
        }
        
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


      useEffect(()=>{

     genreData()
      },[])

      const forward = (id)=>{

        navigate('/gameDetail')
        dispatch(gameId({status:true,gameid:id}))
        
      }
      
      
      
  return apiData? (

    <>
 <Slider {...settings} className=' h-full w-full ' >
{apiData.map((apiData) => {
  
 return (
  <div onClick={()=>{forward(apiData.id)}}>
 <GenreCard key={apiData.id} id={apiData.id} />
 </div>
 )
})}

    </Slider>
    </>
):"processing"


  
}

export default Sports
