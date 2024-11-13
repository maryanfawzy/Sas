

import React from 'react'
import { details, features } from '../constance/index.jsx'
import { Element } from 'react-scroll'

export default function Features() {
  return (
    <section>
        <Element name= 'features'>
            <div className='container'> 
                <div className='relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3 '>
                    {
                        features.map((feature)=>(
                            <div key={feature.id} className='relative z-2 md:px-10 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md :flex-320'>
                                <div className='max-md: p-4 max-sm:p-4'>
                                <div className='w-full flex justify-start items-start '>
                                    <div className='-ml-3 mb-12 flex items-center justify-center flex-col '>
                                    <div className='w-0.5 h-16 bg-s3'/>
                                        <img src={feature.icon} className='size-28 ' alt="" />
                                       

                                    </div>

                                </div>
                             <p className='caption mb-5 max-md:mb-6 '>{feature.caption}

                             </p>
                             <h2 className='max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5  '>{feature.title}

                             </h2>
                             <p className='mb-11 body-1 max-md:mb-8  max-md:body-3'>{feature.text}

                             </p>
                             <button  type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 glow-after" icon={feature.button.icon}>
                             {feature.button.title}

                             </button>
                             </div>


                            </div>

                        ))

                    }
                 <ul className='relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-md:hidden    '>
              <div className='absoulte bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10 '></div>
              {details.map((detail) => (
                <li key={detail.id} className='relative pt-16 px-4 pb-14  '>
                  <div className='absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10 '/>
                  <div className='flex items-center justify-center mx-auto mb-3 bordr-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20 '>
                    <img
                      src={detail.icon}
                      alt={detail.title}
                      className="size-17/20 object-contain z-20"
                    />
                  </div>
                  <h3 className="relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase">
                    {detail.title}
                  </h3>
                </li>
              ))}
            </ul>



                </div>

            </div>

        </Element>

    </section>
  )
}






















