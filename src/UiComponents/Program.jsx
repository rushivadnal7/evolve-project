import React from 'react'
import { Link } from 'react-router-dom'
import strength from '../imgs/strenghtTraining.jpeg'
import bodybuilding from '../imgs/bodyBuilding.jpeg'
import calisthenics from '../imgs/calisthenics.jpeg'
import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import '../UiComponents/Program.css'
import { useAuth } from '@/contexts/authcontexts/ContextIndex'

const Program = () => {

    const { currentUser, userLoggedIn, loading } = useAuth();

    return (
        <section id='program' class="program text-gray-400 bg-black body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4 ">
                    <div data-aos='fade-right' class="program-box-left p-4 md:w-1/3">
                        <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={strength} alt="blog" />
                            <div class="p-6">
                                <h1 class="title-font text-lg font-medium text-white mb-3">Strength Training</h1>
                                <p class="leading-relaxed mb-3">Strength training builds muscle, enhances performance, and improves overall health and fitness.</p>
                                <div class="flex items-center justify-center flex-wrap ">
                                    <Link to={`${userLoggedIn ? '/strength' : '/login'}`} className='text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer'>
                                        Learn More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-up' class="program-box-mid p-4 md:w-1/3">
                        <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={bodybuilding} alt="blog" />
                            <div class="p-6">
                                <h1 class="title-font text-lg font-medium text-white mb-3">Body-Building</h1>
                                <p class="leading-relaxed mb-3">Bodybuilding focuses on maximizing muscle size, symmetry, and aesthetics through targeted training.</p>
                                <div class="flex items-center justify-center flex-wrap">
                                    <Link to={`${userLoggedIn ? '/bodybuilding' : '/login'}`} className='text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer'>
                                        Learn More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-left' class="program-box-right p-4 md:w-1/3">
                        <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                            <img class="lg:h-48 md:h-36 w-full  object-cover object-center" src={calisthenics} alt="blog" />
                            <div class="p-6">
                                <h1 class="title-font text-lg font-medium text-white mb-3">Calisthenics</h1>
                                <p class="leading-relaxed m-4">Calisthenics utilizes bodyweight exercises for strength, agility, and flexibility enhancement without equipment.</p>
                                <div class="flex items-center justify-center flex-wrap ">
                                    <Link to={`${userLoggedIn ? '/calisthenic' : '/login'}`} className='text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer'>
                                        Learn More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Program