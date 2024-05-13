import { Link } from "react-router-dom"


const Footer = () => {



    return (
        <>
            <footer className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Links</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link to={'/'}>
                                        <span className="text-gray-400 hover:text-white">Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/about'}>
                                        <span className="text-gray-400 hover:text-white">About</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/contact'}>
                                        <span className="text-gray-400 hover:text-white">Contact</span>
                                    </Link>
                                </li>

                            </nav>
                        </div>

                    </div>
                </div>
                <div className="border-t border-gray-800">
                    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
                        <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                                <label for="footer-field" className="leading-7 text-sm text-gray-400">Placeholder</label>
                                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>

                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 bg-opacity-75">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-400 text-sm text-center sm:text-left">© 2024 Evolve —
                            <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">Sarvesh & Atharva</a>
                        </p>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer