import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import SavedCard from './SavedCard'
import { useDispatch } from 'react-redux'
import { gameId } from '../components/store/detailProvider'
import { useNavigate } from 'react-router-dom'

const Saved = () => {

  const [profile,setProfile] = useState(null)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const userDetail = () => {
  
  
      try {
          
      const urls = '/api/v1/users/current-user'
      axios.get(urls)
      .then((res)=>(setProfile(res.data.data.saved),
      console.log(res.data.data.saved[0]),
      console.log(profile[0])
      
      
      )
      )
  
  
      } catch (error) {
          
          console.log(error);
          
      }
  }

  const removeGameId = (id) => {
  
  
    try {
        
    const urls = '/api/v1/users/removegameid'
    axios.post(urls,{gameid:id})
    .then(res=>console.log(res.data.message)).catch(err=>error1(err.message))
    
    
    location.reload()


    } catch (error) {
        
        console.log(error);
        
    }
}
  const forward = (id)=>{

    navigate('/gameDetail')
    dispatch(gameId({status:true,gameid:id}))
    
  }
  
  
  useEffect(()=>{
    
      userDetail()
  },[])
  

  return profile ? (
    

<>

{profile.length>0?profile.map((item,index) => {
        return (
          <div className='grid grid-flow-col my-4 '>
          <div onClick={()=>forward(item)}>
 <SavedCard id={item} key={index} />
          </div>
          <div className='flex items-center  justify-center'> 
          <button className=' text-white border p-4 rounded-lg hover:font-black font-new font-semimbold ' onClick={(()=>removeGameId(item))}>Remove</button>
        </div>
        </div>
       
         ) 
      }):<div className='text-white m-8 font-bold text-xl flex justify-center'>Cart is empty</div>
    }
      </>
      
  
  ) : <div className='text-white m-8 font-bold text-xl flex justify-center'>Cart is empty</div>
    
}

export default Saved