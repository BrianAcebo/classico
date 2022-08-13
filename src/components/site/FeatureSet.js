import { Link } from 'react-router-dom'

export const FeatureSet = () => {
    return (
        <section className="section-container">
            <h3 className="text-4xl mb-10 capitalize">Find the perfect car for you.</h3>

            <Link to="/reserve" className="flex flex-row items-center justify-start">
                <div className="w-12 h-[2px] bg-white mr-5"></div>
                <p className="text-mg lg:text-xl capitalize">Reserve now</p>
            </Link>

            <div className="flex flex-row mt-10">
                <div className="flex flex-col mt-10 mr-5 w-1/2 items-end">
                    <div className="border-white border-[2px] w-full lg:w-3/5 p-3 lg:p-10 mb-5 text-center">
                        <p className="text-white text-lg lg:text-2xl capitalize">Range Of Styles</p>
                    </div>

                    <div className="border-white border-[2px] w-full lg:w-1/2 p-3 lg:p-10 text-center">
                        <p className="text-white text-lg lg:text-2xl capitalize">Multiple Destinations</p>
                    </div>
                </div>

                <div className="flex flex-col w-[49%] items-start">
                    <div className="border-white border-[2px] w-full lg:w-1/2 p-3 lg:p-10 mb-5 text-center">
                        <p className="text-white text-lg lg:text-2xl capitalize">Endless Experiences</p>
                    </div>

                    <div className="border-white border-[2px] w-full lg:w-3/5 p-3 lg:p-10 text-center">
                        <p className="text-white text-lg lg:text-2xl capitalize">Vetted Hosts</p>
                    </div>
                </div>
            </div>
        </section>
    );
}