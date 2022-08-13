import { Logo } from './Logo'
import { MenuBtn } from './MenuBtn'
import { useState } from 'react'
import { SideNav } from './SideNav'

export const MainNav = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [openSideNav, setOpenSideNav] = useState(false);

    const toggleSideNav = () => {
        if (openSideNav) {
            setOpenSideNav(false)
        } else {
            setOpenSideNav(true)
        }
    }

    const handleClick = () => {
        setOpenSideNav(false);
    }

    return (
        <>
        <div className="z-30 w-full flex flex-row m-0 fixed border-b-[1px] border-white">
            <div onMouseOut={() => setIsHovering(false)} onMouseOver={() => setIsHovering(true)} className="hover:bg-white smooth-transition w-[12%] min-w-[100px] flex flex-row py-3 lg:py-5 justify-center items-center">
                <Logo isHovering={isHovering} />
            </div>

            <div className="w-[76%] flex py-3 lg:py-5 flex-row items-center justify-center"></div>

            <div className="w-[12%] min-w-[125px] flex py-3 lg:py-5 flex-row justify-center items-center">
                <div onClick={toggleSideNav} className="flex flex-row items-center cursor-pointer">
                    <span className="text-white mr-5 uppercase text-sm">Menu</span>
                    <MenuBtn openSideNav={openSideNav} />
                </div>
            </div>
        </div>

        <div className="z-10 lg:top-0 top-[50px] w-[25px] lg:w-[12%] h-screen fixed border-r-[1px] border-white"></div>

        <SideNav onlinkClick={handleClick} openSideNav={openSideNav} />
        </>
    );
}