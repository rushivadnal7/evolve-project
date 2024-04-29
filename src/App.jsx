import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { AuthProvider } from './contexts/authcontexts/ContextIndex';

import LandingPage from './Pages/LandingPage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Strength from './Pages/Strength';
import BodyBuilding from './Pages/BodyBuilding';
import Calisthenic from './Pages/Calisthenic';
import IntroVideo from './UiComponents/IntroVideo';
import { Login } from './Pages/Login';
import SignUp from './Pages/SignUp';
import UpperBody_strength from './Pages/videosContentPages/UpperBody_strength';
import LowerBody_strength from './Pages/videosContentPages/LowerBody_strength';
import CoreMuscles_strength from './Pages/videosContentPages/CoreMuscles_strength';
import PushDay_BodyBuilding from './Pages/videosContentPages/PushDay_BodyBuilding';
import LegDay_bodyBuilding from './Pages/videosContentPages/LegDay_bodyBuilding';
import PullDay_bodyBuilding from './Pages/videosContentPages/PullDay_bodyBuilding'
import BentArm_calisthenic from './Pages/videosContentPages/BentArm_calisthenic';
import StraightArm_calisthenic from './Pages/videosContentPages/StraightArm_calisthenic';
import AdminPanel from './Pages/AdminPanel';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: '/admin',
      element: <AdminPanel />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/strength',
      element: <Strength />
    },
    {
      path: '/bodybuilding',
      element: <BodyBuilding />
    },
    {
      path: '/calisthenic',
      element: <Calisthenic />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/UpperBody',
      element: <UpperBody_strength />
    },
    {
      path: '/LowerBody',
      element: <LowerBody_strength />
    },
    {
      path: '/CoreMuscles',
      element: <CoreMuscles_strength />
    },
    {
      path: '/PushDay',
      element: <PushDay_BodyBuilding />
    },
    {
      path: '/PullDay',
      element: < PullDay_bodyBuilding />
    },
    {
      path: '/LegDay',
      element: <LegDay_bodyBuilding />
    },
    {
      path: '/bentarm',
      element: < BentArm_calisthenic />
    },
    {
      path: '/straightarm',
      element: <StraightArm_calisthenic />
    },
    {
      path: '/strengthVideo',
      element: <IntroVideo />
    }
  ])

  return (
    <>
      <section className='main'>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </section>
    </>
  )
}

export default App
