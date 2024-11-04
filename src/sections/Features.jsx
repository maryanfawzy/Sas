import React from 'react'
import { features } from '../constance/index.js'

export default function Features() {
  return (
    <section>
        <Element name= 'features'>
            <div className='container'> 
                <div className='relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3 '>
                    {
                        features.map((feature)=>(
                            <div key={feature.id} className='relative z-2 md:px-10 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md :flex-320'>
                                <div className='w-full flex justify-start items-start '>
                                    <div className=''>
                                        <img src={feature.icon} className='size-28 ' alt="" />

                                    </div>

                                </div>
                                {
                                    feature.title
                                }

                            </div>

                        ))

                    }



                </div>

            </div>

        </Element>

    </section>
  )
}
