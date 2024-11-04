import React from 'react'
import { Element, Link as LinkScroll } from 'react-scroll'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section className='relative border-2 border-amber-400 pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32'>  
    <Element name='hero'>
        <div className='container'>
            <div className='relative z-2 max-w-512 max-lg:max-w-388'>
                <div className='caption small-2 uppercase text-p3'>
                    Video Editting
                </div>
                <h1 className='mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12'>
                    Amazingly Simple
                </h1>
                <p className='max-w-440 mb-14 body-1 max-md:mb-10'>
                    We design XORA AI Video Editor to be an easy to use, quick to learen and surprisily powerful
                </p>
                <LinkScroll to="features" offset={-100} spy smooth>

              <button  type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 glow-after" icon="/images/zap.svg">Try it now
              </button>
            </LinkScroll>

            </div>
            <div className='absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res'>
            <img src="./images/hero.png" className='size-1230 max-lg:h-auto' alt="" />

            </div>
        </div>

    </Element>

    </section>
  )
}

export default Hero
