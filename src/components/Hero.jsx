import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../style';
import { ComputersCanvas }   from './canvas';
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]">Parithi</span>
            </h1>
            <p className={`${styles.heroSubText} mt-1 text-white-100`}>
              I'm a Graphic designer and front-end developer. I create visually stunning designs and bring them to life with clean, efficient code to build seamless user experiences.
            </p>
          </div>
      </div>
      <div className="absolute w-full flex justify-center items-center bottom-0 left-0 h-[500px]">
        <ComputersCanvas />
        
        <div className='absolute xs:bottom-3.5 bottom-4 w-full flex justify-center items-center'>
          <a href="#about">
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y:[0,24,0]
                }}
                transition={{
                  duration:1.5,
                  repeat:Infinity,
                  repeatType:'loop'
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero