import { ReserveForm } from '../components/site/ReserveForm'
import { seoData } from '../utils/seoData';
import { useEffect } from 'react'

export const Reserve = () => {
    useEffect(() => {
        seoData({
            title: 'Reserve your spot in line.',
            metaDescription: "Classico is a car sharing marketplace devoted entirely to the beauty of classic cars. We're currently under development, but you can reserve your spot in line to access our early insider discounts."
        });
    });

    return (
        <div className="main-content-container">
            <ReserveForm />
        </div>
    );
}