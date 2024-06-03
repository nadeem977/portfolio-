import React from 'react'
import { InfiniteMovingCards } from './Cards'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-10 mb-5 flex flex-col gap-5 2xl:gap-20' id='testimonials'>
      <h1 className='font-bold text-2xl md:text-5xl text-center '>Kind words from  {" "} <span className='text-purple'>  satisfied Companys</span>  </h1>
      <div className='flex flex-col items-center '>
      <InfiniteMovingCards
        items={testimonials}
        direction='right'
        speed='slow'
        />
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10'>
          {companies.map((item)=>(
            <div key={item?.id} className='flex md:max-w-60 max-w-32 gap-2'>
               <img src={item?.img} alt="icons" className='md:w-10 w-5'/>
               <img src={item?.nameImg} alt="name"  className='md:w-24 w-20'/>
            </div>
          ))}
        </div>
    </div>
    </div>
  )
}

export default Clients
