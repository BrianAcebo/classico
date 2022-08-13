import { PrimaryCtaBtn } from './ctaBtns';

export const Gallery = (props) => {
    const { 
        galleryOneImage, 
        galleryOneText,
        galleryTwoImage, 
        galleryTwoText,
        galleryThreeImage,
        galleryThreeText,
        galleryFourImage,
        galleryFourText,
        galleryFiveImage,
        galleryFiveText
    } = props;

    const galleryStyles = (image) => {
        return { 
            backgroundImage: `url(${image})`
        };
    }

    

    return (
        <section className="section-container">
            <div className="flex flex-row items-center justify-start mb-10">
                <p className="text-sm md:text-xl capitalize mr-3 md:mr-5">Our Showcase</p>
                <div className="w-8 md:w-24 h-[1px] bg-white"></div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-start mb-10">
                <p className="text-md md:text-4xl capitalize mb-5 md:mb-0 md:mr-5 max-w-sm">A quick glance at some of our cars.</p>
                <PrimaryCtaBtn link="/reserve">Reserve your spot</PrimaryCtaBtn>
            </div>

            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col m-0 mb-5 md:mb-0 md:mt-10 md:mr-5 w-ful md:w-1/2 items-center md:items-end">
                    <div className="group w-full md:w-3/4 h-[400px] md:h-[500px] p-0 md:p-10 mb-5 text-center relative">
                        <div style={galleryStyles(galleryOneImage)} className="z-0 absolute w-full h-full bg-cover bg-center bg-no-repeat"></div>
                        <div className="group-hover:visible invisible absolute z-10 bg-black border-[2px] border-white w-full h-full text-white text-md md:text-2xl capitalize align-middle">
                            <p className="relative top-[43%] translate-y-1/2">{galleryOneText}</p>
                        </div>
                    </div>

                    <div className="group w-full md:w-3/5 h-[400px] p-0 md:p-10 text-center relative">
                        <div style={galleryStyles(galleryTwoImage)} className="z-0 absolute w-full h-full bg-cover bg-center bg-no-repeat"></div>
                        <div className="group-hover:visible invisible absolute z-10 bg-black border-[2px] border-white w-full h-full text-white text-md md:text-2xl capitalize align-middle">
                            <p className="relative top-[43%] translate-y-1/2">{galleryTwoText}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-full md:w-[49%] items-start">
                    <div className="group w-full md:w-1/2 h-[400px] md:h-[300px] p-0 md:p-10 mb-5 text-center relative">
                        <div style={galleryStyles(galleryThreeImage)} className="z-0 absolute w-full h-full bg-cover bg-center bg-no-repeat"></div>
                            <div className="group-hover:visible invisible absolute z-10 bg-black border-[2px] border-white w-full h-full text-white text-md md:text-2xl capitalize align-middle">
                            <p className="relative top-[43%] translate-y-1/2">{galleryThreeText}</p>
                        </div>
                    </div>

                    <div className="group w-full md:w-3/4 h-[400px] md:h-[500px] p-0 md:p-10 mb-5 text-center relative">
                        <div style={galleryStyles(galleryFourImage)} className="z-0 absolute w-full h-full bg-cover bg-center bg-no-repeat"></div>
                            <div className="group-hover:visible invisible absolute z-10 bg-black border-[2px] border-white w-full h-full text-white text-md md:text-2xl capitalize align-middle">
                            <p className="relative top-[43%] translate-y-1/2">{galleryFourText}</p>
                        </div>
                    </div>

                    <div className="group w-full md:w-3/5 h-[400px] md:h-[300px] p-0 md:p-10 text-center relative">
                        <div style={galleryStyles(galleryFiveImage)} className="z-0 absolute w-full h-full bg-cover bg-center bg-no-repeat"></div>
                            <div className="group-hover:visible invisible absolute z-10 bg-black border-[2px] border-white w-full h-full text-white text-md md:text-2xl capitalize align-middle">
                            <p className="relative top-[43%] translate-y-1/2">{galleryFiveText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}