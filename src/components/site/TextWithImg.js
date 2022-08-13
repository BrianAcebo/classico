import { Link } from 'react-router-dom'

export const TextWithImgRight = (props) => {
    const { image, headerText, bodyText, ctaText } = props;

    return (
        <section className="flex flex-col md:flex-row justify-center items-center section-container">
            <div className="z-10 flex flex-col m-0 md:mr-[-100px] w-full md:w-[600px]">
                <h3 className="text-4xl lg:text-8xl mb-10 capitalize">{headerText}</h3>

                <p className="text-lg lg:text-2xl mb-10">{bodyText}</p>
                
                <Link to="/reserve" className="flex flex-row items-center justify-start">
                    <div className="w-12 h-[2px] bg-white mr-5"></div>

                    <p className="text-md lg:text-xl capitalize">{ctaText}</p>
                </Link>
            </div>

            <img src={image} className="z-0 w-full md:w-1/2 h-auto mt-10 md:mt-0" alt={headerText} />
        </section>
    );
}


export const TextWithImgLeft = (props) => {
    const { image, headerText, bodyText, ctaText } = props;

    return (
        <section className="flex flex-col-reverse md:flex-row justify-center items-center section-container">
            <img src={image} className="z-0 w-full md:w-1/2 h-auto mt-10 md:mt-0" alt={headerText} />

            <div className="z-10 flex flex-col m-0 md:ml-[-100px] w-full md:w-[600px]">
                <h3 className="text-4xl lg:text-8xl mb-10 capitalize">{headerText}</h3>

                <p className="text-lg lg:text-2xl mb-10">{bodyText}</p>
                
                <Link to="/reserve" className="flex flex-row items-center justify-start">
                    <div className="w-12 h-[2px] bg-white mr-5"></div>

                    <p className="text-md lg:text-xl capitalize">{ctaText}</p>
                </Link>
            </div>
        </section>
    );
}