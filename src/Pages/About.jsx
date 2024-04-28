import NavigationBar from '@/UiComponents/NavigationBar'
import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
      <section className='h-screen overflow-hidden'>
        <NavigationBar />
        <div className='about-main flex  justify-center  items-center h-full'>
          <div className='about-heading-div'>
            <h1 className='about-heading text-amber-600'>Evolve</h1>
          </div>
          <div className='w-1/2 about-content ' >
            <span></span>
            <div className='about-text text-white  flex flex-col justify-evenly'>
              <h1 className='poppins-extrabold text-lg  '>
                Welcome to Evolve Gym – Your Ultimate Fitness Destination!
              </h1>
              <p className='poppins-medium text-sm'>
                At Evolve, we're dedicated to helping you achieve your fitness goals from the comfort of your own home. Explore our extensive collection of training videos, carefully curated to cover a range of disciplines including strength training, calisthenics, and bodybuilding.
              </p>
              <p className='poppins-medium text-sm'>
                Whether you're looking to build muscle, improve flexibility, or enhance your overall fitness level, our videos provide expert guidance and motivation every step of the way. And the best part? Access is exclusive to our members!
              </p>
              {/* <p>
                Ready to take your fitness journey to the next level? Log in now to unlock unlimited access to our premium video content. Not a member yet? Sign up today to get started on your path to a healthier, stronger you.
              </p> */}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default About