import React from 'react'
import './Home.css'
import home_image from '../imgs/homeimg.jpeg'
import { Button } from "@/components/ui/button"


const Home = () => {

    return (
        <section id='home' class="home-section  text-gray-400  body-font">
            <div class="container h-full flex  md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title title-font sm:text-4xl text-3xl  mb-4 font-medium text-white">Get Your Dream Physique </h1>
                    <p class="mb-8 leading-relaxed">Whether you're looking to build muscle, improve flexibility, or enhance your overall fitness level, our videos provide expert guidance and motivation every step of the way. And the best part? Access is exclusive to our members!</p>
                    <div class="flex justify-center">
                        <Button variant="destructive"> <a href='#program'>Get Started</a></Button>
                    </div>
                </div>
                <div class="image-container ">
                    <img class="image object-contain rounded" alt="hero" src={home_image} />
                </div>
            </div>
        </section>
    )
}

export default Home