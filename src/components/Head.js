import React from 'react'
import hamburger_icon from "../assets/hamburger_icon.png";
import youtube_logo from "../assets/youttube_logo.png";
import user_icon from "../assets/user_icon.png";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

  const dispatch = useDispatch();  
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }  
  return (
      <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
        <div className='flex col-span-1 '>
            <img 
                onClick={()=>toggleMenuHandler()}
                className='h-8 pt-3 cursor-pointer'
                alt="haburger" 
                src={hamburger_icon}
            />
            <a href='/'>
                <img 
                    className='h-12 mx-2'
                    alt="logo" 
                    src={youtube_logo}
                />
            </a>
        </div>
        <div className='col-span-10 px-10'>
            <input 
                className='w-1/2 border border-gray-400 p-2 rounded-l-full'
                type='text'
            />
            <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>Search</button>
        </div>
        <div className='col-span-1'>
              <img 
                className='h-8'
                alt="user_logo" 
                src={user_icon}
            />
        </div>
    </div>
  )
}

export default Head