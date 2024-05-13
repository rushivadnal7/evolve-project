import NavigationBar from '../UiComponents/NavigationBar'
import Home from '../UiComponents/Home'
import Program from '../UiComponents/Program'
import Membership from '../UiComponents/Membership'
import Testimonials from '../UiComponents/Testimonials'
import Footer from '../UiComponents/Footer'


const LandingPage = () => {
    return (
        <>
            <section className='landingPage'>
                <NavigationBar />
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