import React from 'react'
import introVideo from '../Videos/ChestDay.mp4'
import '../Pages/Strength.css'
import arrow from '../imgs/left_arrow.png'
import { Link } from 'react-router-dom'

const IntroVideo = () => {

    return (
        <>
            <div className=' w-screen h-screen bg-gray-800 intro-video-div flex justify-center items-center'>
                <div className='arrow-div w-8 h-8'>
                    <Link to='/strength'>
                        <img className='w-full h-full' src={arrow} />
                    </Link>
                </div>
                <video className='intro-video' controls>
                    <source src={introVideo} type='video/mp4' /> video error
                </video>
            </div>
        </>
    )
}

export default IntroVideo