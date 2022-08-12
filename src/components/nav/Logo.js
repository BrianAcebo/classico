import { Link } from 'react-router-dom'

export const Logo = (props) => {
    const {isHovering} = props;

    const logoStyles = "text-md lg:text-xl font-heading uppercase tracking-wider";

    return <Link to="/" className={isHovering ? `text-black ${logoStyles}` : `text-white ${logoStyles}`}>Classico</Link>;
}