import react from "react";
import {FaGithub ,FaLinkedin, FaTwitter, FaEnvelope} from 'react-icons/fa';

function Footer()
{
return(
    <div className='py-5 border-t-3/2'>
    <div className='flex justify-center mt-4'>
    
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
        <a className='text-xl m-1 p-2 sm:m-2 text-black-800 hover:bg-black-800 rounded-full hover:text-white transition-colors duration-300' href='https://githubs.com'>
        <FaEnvelope />
        <span class='sr-only'>Email</span>
        </a>
        </div>

        <div className="flex justify-center mt-4">
        <p className="text-black mb-4">
        Made with <span className='mr-2' role="link" aria-lable='heart'> ❤️ </span> by <a className="text-blue-500 hover:underline" href="mailto:raxx089@gmail.com">Rahul Sharma</a>
         
        </p>
        </div>
    </div>
    


)

}
export default Footer;
    
