import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { loginStatus } from '../components/store/detailProvider'
import { Link } from 'react-router-dom'
import myimg from "../assets/logo1.webp"

const Header = () => {

  const [ profile,setProfile] = useState(null)
  
const dispatch = useDispatch()

  const userDetail = () => {


    try {
        
    const urls = '/api/v1/users/current-user'
    axios.get(urls)
    .then((res)=>{
      
      return (
        <>
     { setProfile(res.data.data)}
    {profile?dispatch(loginStatus({login :true})):null
      }
    
      </>
      )
    }
    )
  
  
    } catch (error) {
        
        console.log(error);
        
    }
  }

  const logout = async () => {


    try {
        
    const urls = '/api/v1/users/logout'
    await axios.post(urls)
    .then(
      console.log("user Successfully logged out"),
      
      
    )
    .catch(console.log("There was an error in logging out")
  )
  
  
    } catch (error) {
        
        console.log(error);
        
    }

    location.reload()
  }

  useEffect(()=>{
     userDetail()
      
      
  },[setProfile])
  

  return (
    <div className='flex w-full border-gray-800 border-b items-center  justify-around'>
        <div className='ml-6 flex mr-8'>
<img className='h-10' src={myimg} alt="" />
<h2 className='flex ml-4 font-kalam font-bold text-white  text-2xl'>Game <span className='text-white'>Forge</span></h2>
        </div>

        <div className=' my-4  flex w-full text-white justify-evenly '>
            <ul className='flex w-full font-new  text-2xl font-medium justify-evenly'>
             {!profile?<li className='hover:font-black'><Link to="/login">Login</Link></li>:null}
             {!profile?<li className='hover:font-black'><Link to="/signup">Sign Up</Link></li>:null}
             {profile?<Link className='hover:font-black' to="/currentuser">Profile</Link>:null}
             {profile?<Link className='hover:font-black' to="/saved">Saved</Link>:null}
             {profile?<li className='hover:font-black' onClick={()=>logout()}>Logout</li>:null}

            </ul>
        </div>
    </div>
  )
}

export default Header
