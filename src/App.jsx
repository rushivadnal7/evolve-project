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


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />
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
