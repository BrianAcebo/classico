import { Link } from 'react-router-dom'

export const PrimaryCtaBtn = (props) => {
    const { link, children } = props;

    return <Link to={link} className="text-center block font-heading bg-white text-black w-full md:w-auto p-5 text-sm lg:text-xl mb-10 lg:mb-0 mr-5 lg:mr-10 uppercase hover:bg-black hover:text-white smooth-transition">{children}</Link>;
}

export const SecondaryCtaBtn = (props) => {
    const { link, children } = props;

    return <Link to={link} className="text-center block font-heading border-[1px] border-white text-white  w-full md:w-auto p-5 text-sm lg:text-xl uppercase smooth-transition hover:bg-white hover:text-black">{children}</Link>;
}