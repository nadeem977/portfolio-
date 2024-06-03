import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10 overflow-hidden ' id='contact'>
      <div className='w-full absolute left-0 bottom-0 min-h-96'>
        <img src="/footer-grid.svg" alt="icons" className='w-full h-full opacity-50'/>
      </div>
      <div className="flex flex-col items-center "></div>
      <h1 className='heading lg:max-w-[45vw] mx-auto'>Ready to take <span className='text-purple'>your</span> digital presence to the next level?</h1>
      <p className='text-white-200 md:mt-10 my-5 text-center text-[18px]'>Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
      <div className='w-fit mx-auto'>
      <a href="mailto:nadeemjaveid67@gmail.com">
        <MagicButton title="Let's get in touch"
         icon={<FaLocationArrow/>}
         position='right'
         />
      </a>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between gap-5 items-center w-full mx-auto md:w-[80vw]'> 
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright © Nadeem</p>
        <div className='flex items-center md:gap-3 gap-6'>
           {socialMedia.map((item)=>(
             <div className='w-10 h-10 cursor-pointer flex items-center justify-center backdrop-filter backdrop-blur-lg saturate-80 bg-opacity-75 bg-black-200 rounded-lg border-black-300'>
            <img src={item.img} alt="icons"  width={20} height={20}/>
             </div>
           ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
