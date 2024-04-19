import React from 'react'
import { useEffect, useState } from 'react'
import { firebaseStorage } from '@/firebase/firebase'
import { getDownloadURL, listAll, ref } from 'firebase/storage'

const LowerBody_strength = () => {

    const [urls, setUrls] = useState([])
    useEffect(() => {
        const fetchImages = async () => {
            const storageRef = ref(firebaseStorage, 'strength training/lower body')
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
            <section class="text-gray-400 bg-gray-900 h-screen w-screen body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {urls.map((videoUrl, index) => (
                            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
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