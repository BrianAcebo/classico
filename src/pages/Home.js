import { Hero } from '../components/site/Hero'
import { CarExamples } from '../components/site/CarExamples'
import { ImgCta } from '../components/site/ImgCta'
import { TextWithImgRight } from '../components/site/TextWithImg'
import { FeatureSet } from '../components/site/FeatureSet'
import carImg from '../media/car.jpg'
import ctaImg from '../media/cta.jpg'
import heroImg from '../media/hero.jpg'
import { seoData } from '../utils/seoData';
import { useEffect } from 'react'

export const Home = () => {

    useEffect(() => {
        seoData({
            title: 'Find your classic ride.',
            metaDescription: "Book some of the world's most classic makes and models to be your ride for the day."
        });
    });
    
    return (
        <>
        <Hero
            image={heroImg}
            headerText="Find your classic ride."
            bodyText="Book some of the world's most classic makes and models to be your ride for the day."
            primaryCtaText="Reserve your spot"
            secondaryCtaText="View our showcase"
        />

        <div className="main-content-container"> 
            <CarExamples />

            <TextWithImgRight 
                image={carImg} 
                headerText="Show up in style"
                bodyText="Choose from an assortment of classic cars to rent for your next outing."
                ctaText="Click here to Reserve now"
            />

            <FeatureSet />

            <ImgCta 
                image={ctaImg}
                headerText="Find your classic ride."
                ctaText="Reserve your spot"
            />
        </div>
        </>
    );
}