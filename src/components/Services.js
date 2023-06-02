import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const skils = [
  { name: 'NodeJs', description: 'Designing and implementing low-latency, high-availability, and performant applications...'},
  { name: 'ExpressJs', description: 'Integrating user-facing elements developed by front-end developers with server-side logic...'},
  { name: 'Mysql', description: 'Researched upcoming database methodologies and technologies. Ensured data integrity and detected data errors and misuse'}
];

const Services = () => {
  return (
  <section className='section' id='services' >   
    <div className='container mx-auto lg:items-center'>
      <div className='flex flex-col lg:flex-row '>
        <motion.div 
          variants={fadeIn('left', 0.5)}
          initial = 'hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-8 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>Skills</h2>
          <h3 className='h3 max-w-[455px] mb-16'>I am a Backend Developper with Over 2 Years of Experience</h3>
        </motion.div>
        <motion.div 
          variants={fadeIn('right', 0.5)}
          initial = 'hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
          className='flex-1'>
          <div>
            {skils.map((skils, index) => {
              const {name,description} = skils;
              return (<div className='border-b border-white/20 h-[138px] mb-[30px] flex' key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-10'>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                </div>
              </div>);
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>);
};

export default Services;
