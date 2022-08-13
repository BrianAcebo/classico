import { Logo } from './Logo'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className="main-content-container w-full border-t-[1px] border-white py-10 flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 mb-10 md:mb-0">
                <Logo />
                <p className="text-white text-sm font-normal mt-5">Book some of the world's most classic makes and models to be your ride for a day.</p>
            </div>

            <div className="w-full md:w-3/4 pl-0 md:pl-32 mb-10">
                <nav className="flex flex-row mb-5">
                    <div class="flex flex-col mr-10">
                        <Link to="/" className="text-md mb-5" data-hover="Home">Home</Link>
                        <Link to="/about" className="text-md" data-hover="About">About</Link>
                    </div>

                    <div class="flex flex-col">
                        <Link to="/reserve" className="text-md mb-5" data-hover="Reserve">Reserve</Link>
                        <Link to="/showcase" className="text-md" data-hover="Showcase">Showcase</Link>
                    </div>
                </nav>

                <p className="text-xs">Copyright © Classico, Inc. All rights reserved.</p>
            </div>
        </div>
    )
}