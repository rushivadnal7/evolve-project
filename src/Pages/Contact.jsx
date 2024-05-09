import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import NavigationBar from '@/UiComponents/NavigationBar'

const Contact = () => {
  return (
    <>
      <NavigationBar />
      <section class="text-gray-400 bg-gray-900 body-font relative">
        <div class="absolute inset-0 bg-gray-900">
          <iframe title="map" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19038.44171295125!2d73.71209377695064!3d18.669011138223183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1714577954346!5m2!1sen!2sin" ></iframe>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h2 class="text-white text-lg mb-1 font-medium title-font">Evolve</h2>
            <p class="leading-relaxed mb-5 fa">&#xf0e0; sarvesh@gmail.com</p>
            <p class="leading-relaxed mb-5 fa">	&#xf095; +91 8828087122</p>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
              <input type="email" id="email" name="email" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-400">Message</label>
              <textarea id="message" name="message" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
            <p class="text-xs text-gray-400 text-opacity-90 mt-3">Feel free to contact us any time.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact