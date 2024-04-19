import NavigationBar from '@/UiComponents/NavigationBar'
import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
      <section className='h-screen overflow-hidden'>
        <NavigationBar />
        <div className='about-main flex justify-center  text-amber-500 items-center h-full'>
          <div className='about-heading-div'>
            <h1 className='about-heading text-amber-600'>Evolve</h1>
          </div>
          <div className='w-1/2 about-content ' >
            <span></span>
            <div className='about-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vitae nobis animi ad optio consequatur nisi pariatur similique ut explicabo, excepturi dolorem at sed ab. Nulla vero repudiandae tempora pariatur, sit aspernatur autem? 
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default About