import carImg from '../../../media/car.jpg'
import { Link } from 'react-router-dom'

export const TextWithImgRight = () => {
    return (
        <section className="flex flex-col md:flex-row justify-center items-center section-container">
            <div class="z-10 flex flex-col m-0 md:mr-[-100px] w-full md:w-[600px]">
                <h3 className="text-4xl lg:text-8xl mb-10 capitalize">Show up in style</h3>

                <p className="text-lg lg:text-2xl mb-10">Choose from an assortment of classic cars to rent for your next outing.</p>
                
                <Link to="/reserve" className="flex flex-row items-center justify-start">
                    <div className="w-12 h-[2px] bg-white mr-5"></div>

                    <p className="text-md lg:text-xl capitalize">Click here to Reserve now</p>
                </Link>
            </div>

            <img src={carImg} alt="classic car" className="z-0 w-full md:w-1/2 h-auto mt-10 md:mt-0" />
        </section>
    );
}