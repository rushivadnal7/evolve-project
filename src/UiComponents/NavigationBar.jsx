import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './uiComponents.css'
import { doSignOut } from '@/firebase/auth'
import { getDatabase, ref, onValue } from 'firebase/database'
import { useAuth } from '@/contexts/authcontexts/ContextIndex'
import { database } from '@/firebase/firebase'

const NavigationBar = (props) => {

    const { currentUser, userLoggedIn, loading } = useAuth();
    const UserEmailName =  currentUser?.email.split('@')[0] || ''
    const UserUid =  currentUser?.uid || ''
    const [userData, setUserData] = useState([]);
    const [plan, setPlan] = useState('')

    useEffect(() => {
        const CheckPlan = () => {

            const db = getDatabase();
            const planRef = ref(db, `users/${UserUid}${UserEmailName}/planCode`)
            onValue(planRef, (snapshot) => {
                const planVal = snapshot.val()
                setPlan(planVal)
            })
        }

        CheckPlan();
    }, []);

    console.log(plan)



    const handleUserLogOut = () => {
        console.log('User Logged Out successfully ')
        alert('Logged out')
        doSignOut()
    }

    return (
        <header class="text-gray-400 bg-gray-900 body-font w-full navbar">

            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    <Link to='/' >
                        <button class="mr-5 font-semibold  cursor-pointer hover:text-white">Home</button>
                    </Link>
                    <Link to='/about'>
                        <button class="mr-5 font-semibold  cursor-pointer hover:text-white">About</button>
                    </Link>
                    {/* <Link to='/contact'> */}
                        <button class="mr-5 font-semibold  cursor-pointer hover:text-white">Contact</button>
                    {/* </Link> */}
                </nav>

                <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-6 h-6 evolve-logo">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288" />
                    </svg>
                    <span class="ml-3 text-xl font-bold xl:block lg:hidden">Evolve</span>
                </a>
                <div class="lg:w-2/5 inline-flex justify-center items-center   lg:justify-end ml-5 lg:ml-0">
                    {
                        currentUser && plan === 1 ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                      </svg>
                      : ''
                    }
                    {currentUser ? <p className='mr-4 poppins-medium  px-2 rounded-sm'>hello , {currentUser.email}</p> : ''}

                    {
                        userLoggedIn === true ?
                            <button onClick={handleUserLogOut} class="inline-flex items-center bg-gray-500 text-white   font-semibold py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Log Out
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            :
                            <Link to='/login'>
                                <button class="inline-flex items-center bg-gray-500 text-white font-semibold py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Login
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </Link>
                    }
                </div>
            </div>
        </header>
    )
}

export default NavigationBar




// useEffect(() => {
//     const db = getDatabase();
//     console.log(UserEmailName)
//     const UsersRef = ref(db, `users`)

//     onValue(UsersRef, (snapshot) => {
//         const UserData = snapshot.val();

//         const userkey = Object.keys(UserData)

//         setData(UserData);
//         console.log(data)
//     }, (error) => {
//         console.error('Error fetching data: ', error);
//     });
// }, [])