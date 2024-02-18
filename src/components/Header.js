import { signOut } from 'firebase/auth'
import React from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'


const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store=>store.user)
  const handleSignOut=()=>{
    signOut(auth).then(()=>{
      navigate('/');
    }).catch((error)=>{
  navigate('/error');
    })
  }
  return (
    <div className=' z-10 absolute flex justify-between w-full  bg-gradient-to-b from-black'>
    <div className=' px-8 py-2 '>
      <img className="w-44 " src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="logo" />
    </div>
    {user?<div className='flex'>
   <img className='w-10  my-6 h-10 ' src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg" alt="" />
   <button onClick={handleSignOut} className='font-bold m-6 py-2 h-8 bg-red-400 items-center  text-white text-center'>Sign Out</button>
    </div>:null}
    </div>
  )
}

export default Header
