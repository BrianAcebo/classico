import { PrimaryCtaBtn, SecondaryCtaBtn } from './ctaBtns';

export const Hero = (props) => {
    const { image, headerText, bodyText, primaryCtaText, secondaryCtaText } = props;

    const heroStyles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`
    }

    return (
        <section style={heroStyles} className="z-0 w-full h-screen bg-cover bg-center bg-no-repeat relative lg:bg-fixed">
            <div className="absolute top-1/4 lg:top-1/3 pl-[50px] lg:pl-0 pr-[25px] left-0 lg:left-[16%]">
                <h1 className="text-white text-7xl lg:text-8xl mb-10">{headerText}</h1>
                <p className="text-white text-lg lg:text-2xl font-normal mb-10">{bodyText}</p>
                
                <div className="flex flex-row">
                    <PrimaryCtaBtn link="/reserve">{primaryCtaText}</PrimaryCtaBtn>
                    <SecondaryCtaBtn link="/showcase">{secondaryCtaText}</SecondaryCtaBtn>
                </div>
            </div>
        </section>
    );
}