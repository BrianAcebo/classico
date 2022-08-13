import { ImgCta } from '../components/site/ImgCta'
import { TextWithImgLeft } from '../components/site/TextWithImg'
import aboutImg from '../media/about.jpg'
import ctaImg from '../media/ctaTwo.jpg'
import { seoData } from '../utils/seoData';
import { useEffect } from 'react'

export const About = () => {

    useEffect(() => {
        seoData({
            title: 'About Classico',
            metaDescription: "Classico is a car sharing marketplace devoted entirely to the beauty of classic cars. We're currently under development, but you can reserve your spot in line to access our early insider discounts."
        });
    });
    
    return (
        <div className="main-content-container">
            <TextWithImgLeft 
                image={aboutImg} 
                headerText="We know classics"
                bodyText="Classico is a car sharing marketplace devoted entirely to the beauty of classic cars. We're currently under development, but you can reserve your spot in line to access our early insider discounts."
                ctaText="Click here to Reserve now"
            />

            <ImgCta 
                image={ctaImg}
                headerText="Find your classic ride."
                ctaText="Reserve your spot"
            />
        </div>
    );
}