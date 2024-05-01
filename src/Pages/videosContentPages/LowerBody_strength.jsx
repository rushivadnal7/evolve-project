import React from 'react'
import { useEffect, useState } from 'react'
import { firebaseStorage } from '@/firebase/firebase'
import { getDownloadURL, listAll } from 'firebase/storage'
import { ref as StorageRef } from 'firebase/storage'
import { getDatabase, ref, onValue } from 'firebase/database'
import { useAuth } from '@/contexts/authcontexts/ContextIndex'
import NavigationBar from '@/UiComponents/NavigationBar'

const LowerBody_strength = () => {

    const [urls, setUrls] = useState([])
    const { currentUser, userLoggedIn, loading } = useAuth();
    const UserEmailName = currentUser?.email.split('@')[0] || ''
    const [plan, setPlan] = useState(null)


    useEffect(() => {
        const CheckPlan = () => {

            const db = getDatabase();
            const planRef = ref(db, `users/${currentUser.uid}${UserEmailName}/planCode`)
            onValue(planRef, (snapshot) => {
                const planVal = snapshot.val()
                console.log(planVal)
                setPlan(planVal)
            })
        }

        CheckPlan()
        const fetchImages = async () => {
            const storageRef = StorageRef(firebaseStorage, 'strength training/lower body')
            const result = await listAll(storageRef)
            const urlPromises = result.items.map((imageRef) => {
                return getDownloadURL(imageRef)
            })

            return Promise.all(urlPromises)
        }
        const loadImages = async () => {
            const urls = await fetchImages()
            setUrls(urls)
        }

        loadImages()
    }, [])

    return (
        <>
            <section class="text-gray-400 bg-gray-900 h-max w-screen body-font">
                <NavigationBar />
                <h1 className='text-center poppins-bold text-2xl p-4 '>HAPPY LOWER DAY</h1>
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {urls.map((videoUrl, index) => (
                            plan === 0 ? index < 5 && (
                                <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <video className='' controls onError={(e) => console.error("Error loading video:", e)}>
                                        <source src={videoUrl} type='video/mp4' />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            ) : <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <video className='' controls onError={(e) => console.error("Error loading video:", e)}>
                                    <source src={videoUrl} type='video/mp4' />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default LowerBody_strength