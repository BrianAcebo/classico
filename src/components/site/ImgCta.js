import { PrimaryCtaBtn } from './ctaBtns';

export const ImgCta = (props) => {
    const { image, headerText, ctaText } = props;

    const ctaImgStyles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`
    }

    return (
        <section className="py-32 w-full">
            <div style={ctaImgStyles} className="z-0 w-full block p-5 lg:p-24 bg-cover bg-center bg-no-repeat">
                <h3 className="text-white text-6xl lg:text-6xl mb-5 lg:mb-10 block">{headerText}</h3>

                <div className="w-1/3 min-w-[200px]">
                    <PrimaryCtaBtn link="/reserve">{ctaText}</PrimaryCtaBtn>
                </div>
            </div>
        </section>
    );
}