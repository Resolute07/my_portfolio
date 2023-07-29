import React from 'react'
import ProjectItem from './ProjectItem'
import propertyImg from '../assets/pic1.jpeg'
import propertyImg2 from '../assets/pic2.jpeg'
import propertyImg3 from '../assets/pic3.jpeg'
import propertyImg4 from '../assets/pic4.jpeg'
const Project = () => {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='my-4 text-center font-normal text-stone-500'>I have worked on a wide range of projects in different domains. Here are a few of them.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={propertyImg} title={'Crypto App'}/>
            <ProjectItem img={propertyImg2} title={'Chat-Gpt voice'}/>
            <ProjectItem img={propertyImg3} title={'E-Commerce App'}/>
            <ProjectItem img={propertyImg3} title={'Trading Website'}/>
        </div>

    </div>
  )
}

export default Project