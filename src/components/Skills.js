import react from "react";
import {SiFlutter, SiTailwindcss, SiJavascript} from 'react-icons/si';
import {FaArrowRight, FaHtml5, FaReact} from 'react-icons/fa';
import {CgFigma} from 'react-icons/cg';
function Skills()
{
    return(

        <div className='max-w-4xl mx-auto justify-center py-12' id='tech'>
        <p className='text-2xl text-black sm:text-4xl font-bold text-center'>
    Tech I Use
        </p>
        <div className="flex flex-wrap justify-center pt-2"> 
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
        <FaHtml5 color="#2196f3" className="mx-auto text-2xl sm:text-4xl" />
        <p className="text-xl text-black-500 sm:text-2xl font-semibold mt-4 text-center">HTML</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
        <SiTailwindcss color="#7BAE7F" className="mx-auto text-2xl sm:text-4xl" />
        <p className="text-xl text-black-500 sm:text-2xl font-semibold mt-4 text-center">Tailwindcss</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
        <FaReact color="#2196f3" className="mx-auto text-2xl sm:text-4xl" />
        <p className="text-xl text-black-500 sm:text-2xl font-semibold mt-4 text-center">React</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
        <SiJavascript color="#FFD447" className="mx-auto text-2xl sm:text-4xl" />
        <p className="text-xl text-black-500 sm:text-2xl font-semibold mt-4 text-center">JavaScript</p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
        <CgFigma color="#175676" className="mx-auto text-2xl sm:text-4xl" />
        <p className="text-xl text-black-500 sm:text-2xl font-semibold mt-4 text-center">Figma</p>
        </div>
        </div>

       
       
        </div>
        
        
       
       

    )
}
export default Skills;