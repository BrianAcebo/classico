import { Link } from 'react-router-dom'

export const SideNav = (props) => {
    const { openSideNav } = props;

    const sideNavStyles = "z-20 h-screen w-3/4 absolute bg-black smooth-transition";

    return (
        <div className={openSideNav ? `right-0 ${sideNavStyles}` : `right-[-100%] ${sideNavStyles}`}>
            <nav className="flex flex-col pt-20 pl-10 lg:pt-28 lg:pl-28">
                <Link to="/" className="side-nav-link mb-8 lg:mb-12" data-hover="Home">Home</Link>
                <Link to="/about" className="side-nav-link mb-8 lg:mb-12" data-hover="About">About</Link>
                <Link to="/reserve" className="side-nav-link mb-8 lg:mb-12" data-hover="Reserve">Reserve</Link>
                <Link to="/showcase" className="side-nav-link" data-hover="Showcase">Showcase</Link>
            </nav>
        </div>
    );
}