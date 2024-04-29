import React, { useEffect } from 'react'
import { useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useAuth } from '@/contexts/authcontexts/ContextIndex'
import NavigationBar from '@/UiComponents/NavigationBar';


const AdminPanel = () => {
    const [userData, setUserData] = useState([]);
    const { currentUser, userLoggedIn, loading } = useAuth();

    // console.log(currentUser)

    useEffect(() => {
        const fetchData = async () => {
            const db = getDatabase();
            const usersRef = ref(db, 'users');

            onValue(usersRef, (snapshot) => {
                const usersData = snapshot.val();

                if (usersData) {
                    const userDataArray = Object.keys(usersData).map(userId => ({
                        userId,
                        plan: usersData[userId].Plan,
                        email: usersData[userId].email,
                        uid: usersData[userId].uid,
                        creationTime: usersData[userId].creationTime,
                        lastSignIn: usersData[userId].lastSignIn,
                    }));

                    setUserData(userDataArray);
                } else {
                    setUserData([]);
                }
            }, (error) => {
                console.error('Error fetching data: ', error);
            });
        };
        fetchData();
    }, []);

    console.log(userData)


    return (
        <>
            <section className='text-white h-screen w-screen bg-slate-800'>
                <NavigationBar />
                <div class="mx-auto max-w-screen-lg poppins px-4 py-8 sm:px-8">
                    <div class="flex items-center justify-between pb-6">
                        <div>
                            <h2 class="poppins-bold text-2xl  text-gray-100">Users</h2>
                            <span class="text-xs text-gray-400">View accounts of registered users</span>
                        </div>
                    </div>
                    <div class="overflow-y-hidden rounded-lg ">
                        <div class="overflow-x-auto">
                            <table class="w-full">
                                <thead>
                                    <tr class="bg-orange-500 text-left text-xs font-semibold uppercase tracking-widest text-white">
                                        {/* <th class="px-5 py-3">ID</th> */}
                                        <th class="px-5 py-3">Email</th>
                                        <th class="px-5 py-3">Plan</th>
                                        <th class="px-5 py-3">Created at</th>
                                        <th class="px-5 py-3">Last Logged In</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-500">
                                    {

                                        userData.map((user) => (
                                            < tr key={user.uid} >
                                                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                    <div class="flex items-center">
                                                        <div class="ml-3">
                                                            <p class="whitespace-no-wrap text-green-900 font-semibold">{user.email}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                    <p class="rounded-full px-3 py-1 text-xs bg-green-100 font-semibold text-green-900">{user.plan}</p>
                                                </td>
                                                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                    <p class="whitespace-no-wrap">{user.creationTime}</p>
                                                </td>

                                                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                    <span class="rounded-full px-3 py-1 text-xs font-semibold text-green-900">{user.lastSignIn}</span>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>


            </section >
        </>
    )
}

export default AdminPanel