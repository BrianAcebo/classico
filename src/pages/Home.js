import { Hero } from '../components/pages/home/Hero'
import { CarExamples } from '../components/pages/home/CarExamples'
import { ImgCta } from '../components/pages/home/ImgCta'
import { TextWithImgRight } from '../components/pages/home/TextWithImg'
import { FeatureSet } from '../components/pages/home/FeatureSet'

export const Home = () => {
    
    return (
        <>
        <Hero />
        
        <div className="pl-[50px] pr-[25px] lg:pl-0 ml-0 lg:ml-[16%] z-0">
            
            <CarExamples />

            <TextWithImgRight />

            <FeatureSet />

            <ImgCta />
        </div>
        </>
    );
}