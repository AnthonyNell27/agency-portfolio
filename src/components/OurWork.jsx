import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "motion/react"

const OurWork = () => {

    const workData = [
        {
            title: 'Champion Second Year!',
            description: 'Muntik pa maluto',
            image: assets.champion_1
        },
        {
            title: 'Champion Third Year!',
            description: 'Easy Basic',
            image: assets.champion_2
        },
        {
            title: 'Champion Fourth Year!',
            description: 'Antots retirement',
            image: assets.champion_3
        },
    ]

  return (
    <motion.div 
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.2 }}
    id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='LFT : MASIPAG KAME DI KAME TAMAD' desc='From strategy to execution, we craft digital solutions that move your business forward.' />

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
            {
                workData.map((work, index)=> (
                    <motion.div 
                    initial={{ opacity: 0, y: 30}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    key={index} className='hover: scale-102 duration-500 transition-all cursor-pointer'>
                        <img src={work.image} className='w-full rounded-xl' alt="" />
                        <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                        <p>{work.description}</p>
                    </motion.div>
                ))
            }

        </div>
    </motion.div>
  )
}

export default OurWork