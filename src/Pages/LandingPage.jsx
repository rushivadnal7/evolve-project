import React, { useEffect, useState } from 'react'

import NavigationBar from '../UiComponents/NavigationBar'
import Home from '../UiComponents/Home'
import Program from '../UiComponents/Program'
import Membership from '../UiComponents/Membership'
import Testimonials from '../UiComponents/Testimonials'
import Footer from '../UiComponents/Footer'
import { getAuth } from 'firebase/auth'
import { useAuth } from '@/contexts/authcontexts/ContextIndex'


const LandingPage = () => {
    const auth = getAuth()
    const user = auth.currentUser

    const { currentUser, userLoggedIn, loading } = useAuth();
    
//    console.log(currentUser.email)
    return (
        <>
            <section className='landingPage'>
                <NavigationBar isUserLogged={user} />
                <Home />
                <Program />
                <Membership />
                <Testimonials />
                <Footer />
            </section>
        </>
    )
}

export default LandingPage