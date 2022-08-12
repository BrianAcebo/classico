import heroImg from '../../../media/hero.jpg'
import { PrimaryCtaBtn, SecondaryCtaBtn } from '../../site/ctaBtns';

export const Hero = () => {
    const heroStyles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImg})`
    }

    return (
        <section style={heroStyles} className="z-0 w-full h-screen bg-cover bg-center bg-no-repeat relative bg-fixed">
            <div className="absolute top-1/4 lg:top-1/3 pl-[50px] lg:pl-0 pr-[25px] left-0 lg:left-[16%]">
                <h1 className="text-white text-7xl lg:text-8xl mb-10">Find your classic ride.</h1>
                <p className="text-white text-lg lg:text-2xl font-normal mb-10">Book some of the world's most classic makes and models to be your ride for the day.</p>
                
                <div className="flex flex-row">
                    <PrimaryCtaBtn link="/reserve">Reserve your spot</PrimaryCtaBtn>
                    <SecondaryCtaBtn link="/showcase">View our showcase</SecondaryCtaBtn>
                </div>
            </div>
        </section>
    );
}