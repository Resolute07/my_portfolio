import React from 'react'
import WorkItems from './WorkItems'

const data = [
    {
        year: '2021',
        title: 'Web Developer',
        company: 'Google',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        duration: '2021-2021'
    },
    {
        year: '2021',
        title: 'Web Developer',
        company: 'Google',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        duration: '2021-2021'
    },
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1024px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] '>
            Work
        </h1>
        {data.map((item,index) => (
            <WorkItems key={index} item={item} year ={item.year} title= {item.title} details={item.description} duration={item.duration}/>
        ))}

    </div>
  )
}

export default Work