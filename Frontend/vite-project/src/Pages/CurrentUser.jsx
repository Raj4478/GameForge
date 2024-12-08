import React, { useEffect,useState } from 'react'
import axios from 'axios'


const CurrentUser = () => {

    const [profile,setProfile] = useState(null)

const userDetail = () => {


    try {
        
    const urls = 'https://game-forge-kdny.vercel.app/api/v1/users/current-user'
    axios.get(urls)
    .then((res)=>(setProfile(res.data.data)
    )
    )


    } catch (error) {
        
        console.log(error);
        
    }
}


useEffect(()=>{
  
    userDetail()
},[])


  return  profile?(
    <div className='  bg-cover bg-no-repeat bg-opacity-40'>
        
        
<div className='flex justify-center my-4'>
    <img src={profile.coverImage} alt="" className='h-72 w-72 border ' />
</div>

<div className='flex justify-center my-4'>
    <h2 className='text-white'>
       Name :  {profile.fullName}
    </h2>
</div>

<div className='flex justify-center my-4 '>
<h2 className='text-white'>
      UserName :  {profile.username}
    </h2>
</div>

<div className='flex justify-center my-4'>
<h2 className='text-white'>
      Created On :  {profile.createdAt}
    </h2>
</div>
    </div>
  ):"processing"
}

export default CurrentUser
