import React from 'react'
import { useAuth } from '@/contexts/authcontexts/ContextIndex'
import { getDatabase, ref, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import Qrcode from '../imgs/QRcode.jpg'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


const Membership = () => {

    const { currentUser, userLoggedIn, loading } = useAuth();
    const navigate = useNavigate()

    const handleFreePlan = () => {

        const UsersUid = currentUser.uid
        const UsersEmail = currentUser.email
        const userCreationTime = currentUser.metadata.creationTime
        const userLastSignIn = currentUser.metadata.lastSignInTime
        const TrimmedEmail = UsersEmail.split("@");

        const db = getDatabase()
        console.log(db)

        try {
            set(ref(db, 'users/' + UsersUid + TrimmedEmail[0]), {
                planCode: 0,
                Plan: 'Free Plan',
                email: UsersEmail,
                uid: UsersUid,
                creationTime: userCreationTime,
                lastSignIn: userLastSignIn
            })
            alert('Standard Plan Added')
        } catch (error) {
            console.log(error)
        }
    }

    const handlePaidPlan = () => {
        const UsersUid = currentUser.uid
        const UsersEmail = currentUser.email
        const userCreationTime = currentUser.metadata.creationTime
        const userLastSignIn = currentUser.metadata.lastSignInTime
        const TrimmedEmail = UsersEmail.split("@");



        const db = getDatabase()
        console.log(db)

        try {
            set(ref(db, 'users/' + UsersUid + TrimmedEmail[0]), {
                planCode: 1,
                Plan: 'Paid Plan',
                email: UsersEmail,
                uid: UsersUid,
                creationTime: userCreationTime,
                lastSignIn: userLastSignIn
            })
            alert('Premium Plan Added')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section id='membership' class="text-gray-400 bg-black body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Member-Ship</h1>
                </div>
                <div class="flex flex-wrap -m-4 justify-center">
                    <div class="p-4 xl:w-1/4 md:w-1/2 w-full " data-aos='slide-right'>
                        <div class="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col  overflow-hidden">
                            <h2 class="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">START</h2>
                            <h1 class="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">Free</h1>
                            <p class="flex items-center text-gray-400 mb-2">
                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Get access to the Videos
                            </p>

                            <Dialog>
                                <DialogTrigger className=' mt-auto '>
                                    <button onClick={() => {
                                        if (!currentUser) {
                                            navigate('/login')
                                        }
                                    }} class="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">BUY
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>PAYMENT</DialogTitle>
                                        <DialogDescription>
                                            <div className="content flex flex-col justify-center items-center ">

                                                <div className="qr-code w-32 h-32 ">
                                                    <img className='w-full h-full' src={Qrcode} alt="" />
                                                </div>
                                                <button onClick={handleFreePlan} class="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-max focus:outline-none hover:bg-gray-700 rounded">BUY FREE PLAN
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>


                        </div>
                    </div>

                    <div class="p-4 xl:w-1/4 md:w-1/2 w-full" data-aos='slide-left'>
                        <div class="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col  overflow-hidden">
                            <h2 class="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">BUSINESS</h2>
                            <h1 class="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                                <span>₹999</span>
                                <span class="text-lg ml-1 font-normal text-gray-400">/mo</span>
                            </h1>
                            <p class="flex items-center  text-gray-400 mb-2">
                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Get access to the video
                            </p>
                            <p class="flex items-center mb-20 text-gray-400">
                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Get more than 5 Videos
                            </p>

                            <Dialog>
                                <DialogTrigger className=' mt-auto '>
                                    <button onClick={() => {
                                        if (!currentUser) {
                                            navigate('/login')
                                        }
                                    }} class="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">
                                        BUY
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>PAYMENT</DialogTitle>
                                        <DialogDescription>
                                            <div className="content flex flex-col justify-center items-center ">

                                                <div className="qr-code w-32 h-32 ">
                                                    <img className='w-full h-full' src={Qrcode} alt="" />
                                                </div>
                                                <button onClick={handlePaidPlan} class="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-max focus:outline-none hover:bg-gray-700 rounded">BUY PAID PLAN
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Membership