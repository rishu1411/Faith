import React from 'react'
import data from '../data.json'

export default function Hero() {
    console.log('Instrucotr', data.instructor)
  return (
      <div className='bg-hero h-[26rem] bg-cover bg-top '>
         
          <div className='h-[26rem] flex items-center text-white bg-gradient-to-r from-zinc-900 to-transparent'>
              <div className='m-6'>
                  
                  <span className='uppercase text-sm'>{ data.instructor.name}</span>
                  <p className='font-semibold max-w-[22rem] text-lg md:text-xl'>{ data.course.title}</p>
              </div>
          </div>
          
  </div>
  )
}
