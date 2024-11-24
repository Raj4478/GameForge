import React, { useEffect,useState } from 'react'
import Slider from "react-slick"
import GenreCard from './GenreCard'
import {Swiper, SwiperSlide} from 'swiper/react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {Autoplay, FreeMode,Pagination} from 'swiper/modules'
import RatingReview from '../starRating'
import { useDispatch } from 'react-redux'
import { gameId } from '../store/detailProvider'
import { useNavigate } from 'react-router-dom'

const Action = () => {

    const genre = `https://api.rawg.io/api/genres?key=${import.meta.env.VITE_API_KEY}`

    
    

    const[apiData,setApiData] = useState(null)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    var settings = {
      
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
    
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
      
    };

    const genreData = async() => {
    

        try {
            const fields = await fetch(genre)
            const data = await fields.json()
          
          console.log("action",data);
          
            setApiData(data.results[0].games)
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

export default Action