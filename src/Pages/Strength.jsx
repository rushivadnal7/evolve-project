import React, { useEffect } from 'react'
import '../Pages/Strength.css'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import leg from '../imgs/leg.png'
import chest from '../imgs/chest.png'
import core from '../imgs/running.png'
import intro_img from '../imgs/strength_intro_image.jpg'
import playButton from '../imgs/play-button.png'
import Footer from '@/UiComponents/Footer'
import { Link } from 'react-router-dom'
import { firebaseStorage } from '@/firebase/firebase'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import NavigationBar from '@/UiComponents/NavigationBar'

const Strength = () => {
  const [exercises, setExercises] = useState([
    { image: chest, name: 'UpperBody' },
    { image: leg, name: 'LowerBody' },
    { image: core, name: 'CoreMuscles' }
  ]);



  return (
    <>
      <NavigationBar/>
      <section className='relative'>
        <div className='w-screen h-screen  bg-gray-800 relative  flex justify-center items-center'>
          <div className='intro-image-div '>     
            <img src={intro_img} />            
          </div>
          <div className='title-div'>
            <h1 className='font-extrabold '>Strength <br /> Training</h1>
          </div>
          <div className="play-button-div">
            <Link to='/strengthVideo'>
              <img src={playButton} />
            </Link>
          </div>
        </div>
        <div className='bg-gray-800 h-28  w-screen'></div>
        <div class="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
        <div className='w-screen h-screen flex justify-center  bg-gray-700 items-center'>
          <div className='video-parent-box mx-12 my-20 '>
            {exercises.map((exercise, index) => (
              <Dialog key={index}>
                <DialogTrigger>
                  <Link to={`/${exercise.name}`}>
                    <div className="card-container">
                      <div className="card bg-gray-600">
                        <div className='image-div'>
                          <img className='images' src={exercise.image} alt={exercise.name} />
                        </div>
                        <h2>{exercise.name}</h2>
                      </div>
                    </div>
                  </Link>
                </DialogTrigger>
                  {/* <DialogContent className=''>
                    <DialogHeader>
                      <DialogTitle>Videos</DialogTitle>
                      <DialogDescription>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent> */}
              </Dialog>
            ))}
          </div>

        </div>
        <div class="wave-2">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
          </svg>
        </div>
      </section >
      <Footer />


    </>
  )
}

export default Strength
