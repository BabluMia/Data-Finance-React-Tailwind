import React from 'react'
import laptop from '../assets/laptop.jpg'

const Analayticts = () => {
  return (
    <div className='bg-white py-16 px-4 w-full'>
        <div className='grid md:grid-cols-2 max-w=[1240px] mx-auto'>
         <img src={laptop} alt="" />
         <div className='flex flex-col justify-center my-6 mx-2 md:my-0'>
            <p className='text-xl font-bold text-[#00df9a]'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='my-4 text-2xl md:text-4xl font-bold'>Manage Data Analytics Centrally</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?</p>
            <button className="bg-[#000300]  my-6 text-white rounded-md w-[200px] p-4 font-bold">Get Started</button>
         </div>
        </div>
    </div>
  )
}

export default Analayticts