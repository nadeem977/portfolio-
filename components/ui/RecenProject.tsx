import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecenProject = () => {
  return (
    <div className='py-10 mb-5 flex flex-col gap-5 2xl:gap-20' id='projects'>
      <h1 className='heading'>A small selction of {" "} <span className='text-purple'>recent projects</span>  </h1>
      <div className='flex flex-wrap items-center justify-center p-5 gap-16 gap-y-0 h-full'>
        {projects.map((item)=>(
            <div key={item?.id} className='flex items-center justify-center h-[27rem]  xl:min-h-[28.5rem] sm:w-[470px] lg:w-96 w-[80vw]'>
                <PinContainer title={item.title} href={item?.link}>
                <div className="relative flex items-center rounded-3xl justify-center sm:w-96 w-[80vw] overflow-hidden lg:h-[30vh] mb-10"
                style={{ backgroundColor: "#13162D" }}>
                <div
                  className="relative w-full h-full overflow-hidden ">
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img src={item.img}  alt="cover" className="z-10 top-4 absolute bottom-0"/>
              </div>
                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{item?.title}</h1>
                    <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">{item.des}</p>
                    <div className='flex items-center justify-between mt-7 mb-3 '>
                      <div className='flex items-center'>
                           {item?.iconLists.map((icon,i)=>(
                            <div key={i} className='border border-white/[0.2] bg-black flex items-center justify-center rounded-full lg:w-10 lg:h-10 w-8 h-8' style={{transform:`translateX(-${5*i*2}px)`}}>
                                <img src={icon} alt="icons" className='p-2'/>
                            </div>
                           ))}
                      </div>
                      <div className='flex items-center'>
                        <p className='lg:text-xl md:text-xs text-sm flex text-purple'>Check Live Site</p>
                        <FaLocationArrow className='ms-3' color='#CBACF9'/>
                      </div>
                    </div>
                </PinContainer>
            </div>
        ))}
      </div>
    </div>
  )
}

export default RecenProject
