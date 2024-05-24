
import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/TextGenrateEffct'

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            <div className="flex justify-center relative my-20 z-10">
                <div className='max-w-[800px]  flex flex-col justify-center items-center' >
                    <h1 className='uppercase tracking-widest text-xs text-center text-blue-100  max-w-80'>Dynamic web magic with next.js</h1>
                    <TextGenerateEffect className='text-center text-[40px] md:text-4xl lg:text-5xl' words='Tranforming Concepts into Seamless User Experiences' />
                    <p className='md:tracking-wider text-center mb-4 text-sm md:text-lg lg:text-2xl'>Hi i'm Nadeem a Mern-stack Developer Based In Pakistan</p>
                   <a href="#about">
                     <MagicButton title="Show my Work"
                     icon={<FaLocationArrow/>}
                     position='right'
                     /></a>
                </div>
            </div>
        </div>
    )
}

export default Hero
