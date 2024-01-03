'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import data from '../data.json'
import { Keyboard, Pagination,Mousewheel } from 'swiper/modules'
import reviewer1 from '../Images/avatar-1.png'
import reviewer2 from '../Images/avatar-2.png'
import reviewer3 from '../Images/avatar-3.png'
import reviewer4 from '../Images/avatar-4.png'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'

// import './styles.css'

export default function Reviews() {
    let lis = [reviewer1,reviewer2,reviewer3,reviewer4]
  return (
      <div className='glass h-52 my-10 mx-2 md:mx-6 flex justify-center' id='Reviews'>
          <Swiper keyboard={true}
              pagination={true}
              mousewheel={true}
              modules={[Keyboard,Pagination,Mousewheel]} 
              className='productSlider'
          >
              <div>
                  {
                    data.testimonial.map((person, key) => {
                return (
                <SwiperSlide key={key}>
                    <div className='flex flex-col md:flex-row h-64  md:h-52 gap-x-4 justify-start md:justify-center items-center px-4 gap-y-2 py-4'>
                        <div className='flex flex-row justify-center items-center gap-x-4 '>
                            <Image src={lis[key]} />
                                <div className='space-y-1'>
                                    <h6 className='font-semibold md:text-xl text-base'>{person.reviewer_name}</h6>
                                        <p className='text-sm text-gray-400'>{ person.reviewer_designation}</p>
                                </div>
                            </div>
                            <p className='text-xs md:text-sm text-gray-600 max-w-72 overflow-hidden '>{ person.text}</p>
                                </div>
                              </SwiperSlide>
                          )
                        
                    })
                }
            </div>
            
    </Swiper>
         
          
    </div>
  )
}
