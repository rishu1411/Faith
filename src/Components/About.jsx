import React from 'react'
import data from '../data.json'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import ForumIcon from '@mui/icons-material/Forum';
import DoneIcon from '@mui/icons-material/Done';


function Card() {
    return (
        <div className='max-h-[17rem] max-w-[21rem]  bg-violet-100 p-3 md:p-6 space-y-4 rounded-lg'>
            <div className=''>
                <h3 className='font-semibold  '>Course fees</h3>
                <p className=' text-2xl font-bold'><span><CurrencyRupeeIcon/></span>5,000</p>
            </div>

            <div className='space-y-1'>
                <h4 className='font-semibold'>What's included:</h4>
                <div className='flex items-center gap-x-2 '>
                    <SmartDisplayIcon className='text-base' />
                    <p className='text-xs'>5 on-demand videos</p>
                </div>
                <div className='flex items-center gap-x-2 '>
                    <SmartDisplayIcon className='text-base' />
                    <p className='text-xs'>2 livestream sessions</p>
                </div>
                <div className='flex items-center gap-x-2 '>
                    <ForumIcon className='text-base' />
                    <p className='text-xs'>Live Q&A sessions with Nityanand Charan Das</p>
                </div>
                <div className='flex items-center gap-x-2 '>
                    <ForumIcon className='text-base' />
                    <p className='text-xs'>5 on-demand videos</p>
                </div>
            </div>

            <button className='bg-violet-600 hover:bg-violet-700 text-white px-2 py-1 rounded-2xl min-w-full'>Register today</button>

        </div>
    )
}




export default function About() {

  return (
      <div className='mt-8 mb-14 mx-8 flex flex-col justify-end ' id='About'>
          <div className=' space-y-3 flex-col lg:flex-row flex justify-between'>
              <div className='lg:w-[50vw]'>
          <h3 className='font-bold text-lg my-3'>About The Course</h3>
              <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae mollitia at impedit soluta quas, quis id laboriosam nemo quam maxime, quidem nihil saepe porro quia eveniet unde voluptatem iure, consequatur rerum enim architecto sit exercitationem illo! At ex quasi unde, ullam quisquam eius amet esse pariatur. Vitae, repellat sequi! Cumque sunt atque, debitis possimus voluptas impedit alias quae.</p>
              <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae mollitia at impedit soluta quas, quis id laboriosam nemo quam maxime, quidem nihil saepe porro quia eveniet unde voluptatem iure, consequatur rerum enim architecto sit exercitationem illo!.</p>
                  <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae mollitia at impedit soluta quas, quis id laboriosam nemo quam maxime, quidem nihil saepe porro quia eveniet unde voluptatem iure, consequatur rerum enim architecto sit exercitationem illo!.</p>
              </div>
              <div className=''>
                  <Card/>
              </div>

          </div>
          <div>
          <h4 className='my-3 font-bold '>What to expect from the course</h4>
              <div>
                {
                      data.course.what_to_expect.map((expect, key) => {
                          return (
                              <ul key={key} >
                                  <li className='text-sm my-2'><DoneIcon className='text-base font-bold'/>   {expect}</li>
                            </ul>
                        )
                    })    
                }
             </div>
          </div>
          <div className='lg::w-[50vw]'>
          <h4 className='my-3 font-bold '>Key Topics covered</h4>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt expedita tenetur praesentium nam error molestias, eligendi blanditiis deserunt cumque beatae reiciendis maiores, totam assumenda. Sapiente, dolore? Asperiores recusandae iusto eos quos, tempora consectetur suscipit perferendis, quidem ut minus eligendi neque quas ab consequatur commodi voluptates. Eos similique distinctio architecto!</p>

              <div>
              {
                      data.course.key_topics.map((topics, key) => {
                          return (
                              <ul key={key} >
                                  <li className='text-sm my-2'><DoneIcon className='text-base font-bold mx-1' />  <span className='font-bold'>{ topics.bold}</span> {topics.normal}</li>
                            </ul>
                        )
                    })    
                }
                  
              </div>
              </div>
    </div>
  )
}
