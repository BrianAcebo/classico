import { Gallery } from '../components/site/Gallery'
import galleryOneImage from '../media/galleryOne.jpg'
import galleryTwoImage from '../media/galleryTwo.jpg'
import galleryThreeImage from '../media/galleryThree.jpg'
import galleryFourImage from '../media/galleryFour.jpg'
import galleryFiveImage from '../media/galleryFive.jpg'
import { seoData } from '../utils/seoData';
import { useEffect } from 'react'

export const Showcase = () => {
    useEffect(() => {
        seoData({
            title: 'Our Showcase',
            metaDescription: "Classico is a car sharing marketplace devoted entirely to the beauty of classic cars. We're currently under development, but you can reserve your spot in line to access our early insider discounts."
        });
    });

    return (
        <div className="main-content-container">
            <Gallery
                galleryOneImage={galleryOneImage}
                galleryOneText="BMW 3200 CS"
                galleryTwoImage={galleryTwoImage}
                galleryTwoText="Ferarri 250 GT Berlinetta"
                galleryThreeImage={galleryThreeImage}
                galleryThreeText="Shelby GT350"
                galleryFourImage={galleryFourImage}
                galleryFourText="Mercedes-Benz 280SL ‘Pagoda’"
                galleryFiveImage={galleryFiveImage}
                galleryFiveText="Chevrolet Impala"
            />
        </div>
    )
}