import React from 'react'
import App from '../App';
import profile from  '../images/img11.jpg'
import {FaGithub ,FaLinkedin, FaTwitter, FaEnvelope} from 'react-icons/fa';
function Card () 
    {
    return(
        <div className='w-full'>
        <div className='flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5'>
        <div className=''>
        <img className='w-32 mx-auto shadow-xl rounded-full drop-shadow-sm' src={profile} alt ='profile photo' />
        </div>

        <div className='text-center mt-5'>
        <p className='text-xl sm:text-2xl text-gray-900 font-semibold'>
        Rahul Sharma</p>
        <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
        UX Designer / Front End Developer</p>
        <div className='flex align-center justify-center mt-4'>
        
        
        <a className='text-xl m-1 p-2 sm:m-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300' href='https://githubs.com'>
        <FaGithub />
        <span class='sr-only'>Github</span>
        </a>
        <a className='text-xl m-1 p-2 sm:m-2 text-blue-800 hover:bg-blue-800 rounded-full hover:text-white transition-colors duration-300' href='https://githubs.com'>
        <FaLinkedin />
        <span class='sr-only'>Linkedin</span>
        </a>
        <a className='text-xl m-1 p-2 sm:m-2 text-blue-600 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300' href='https://githubs.com'>
        <FaTwitter />
        <span class='sr-only'>Twitter</span>
        </a>
        <a className='text-xl m-1 p-2 sm:m-2 text-green-800 hover:bg-green-800 rounded-full hover:text-white transition-colors duration-300' href='https://githubs.com'>
        <FaEnvelope />
        <span class='sr-only'>Email</span>
        </a>
        </div>
        </div>
        </div>
        
        </div>
    )

    }

    export default Card;