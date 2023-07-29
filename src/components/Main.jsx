import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter , FaGithub , FaLinkedin, FaFacebook} from 'react-icons/fa'
const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1] ' src="src/assets/bg_portfolio.jpeg" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-grey-800'>
                    I'm Utkarsh Kumar
                </h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-grey-800'>
                    I'm a 
                    <TypeAnimation
                        sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Developer',
                         1000, // wait 1s before replacing "Mice" with "Hamsters"
                         'Coder',
                         1000,
                        'Tech Enthusiast',
                         1000,
                       
                        ]}
                        wrapper="div"
                        speed={50}
                        style={{ fontSize: '1em', display: 'inline-block',paddingLeft:'5px' }}
                        repeat={Infinity}
                         />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaTwitter size={20} className='cursor-pointer'/>
                    <FaGithub size={20} className='cursor-pointer'/>
                    <FaLinkedin size={20} className='cursor-pointer'/>
                    <FaFacebook size={20} className='cursor-pointer'/>
                    
                </div>
            </div>
        </div>

    </div>
  )
}

export default Main