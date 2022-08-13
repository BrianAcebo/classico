import image from '../../media/reserve.jpg'

export const ReserveForm = () => {
    return (
        <section className="section-container flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                <div className="flex flex-row max-w-sm mb-10">
                    <div className="w-1/3">
                        <p className="text-sm font-bold">Step 1:</p>
                        <p className="text-sm font-bold">Account</p>
                    </div>

                    <div className="w-1/3">
                        <p className="text-sm">Step 2:</p>
                        <p className="text-sm">Terms</p>
                    </div>

                    <div className="w-1/3">
                        <p className="text-sm">Step 3:</p>
                        <p className="text-sm">Confirmation</p>
                    </div>
                </div>

                <h1 className="text-white text-4xl lg:text-6xl mb-10">Reserve your spot in line.</h1>

                <p className="font-bold mb-10">Book your first three rides for free by signing up for early access.</p>

                <form className="w-full">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-xs mb-2" for="grid-first-name">
                                First Name
                            </label>
                            <input className="appearance-none block w-full bg-transparent border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-first-name" type="text" placeholder="Jane" />
                        </div>

                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-xs mb-2" for="grid-first-name">
                                Last Name
                            </label>
                            <input className="appearance-none block w-full bg-transparent border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-first-name" type="text" placeholder="Doe" />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-xs mb-2" for="grid-first-name">
                                Email Address
                            </label>
                            <input className="appearance-none block w-full bg-transparent border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-email" type="email" placeholder="jane@doe.com" />
                        </div>
                    </div>

                    <button type="button" className="text-center block font-heading bg-white text-black p-5 text-sm lg:text-xl mr-5 lg:mr-10 uppercase hover:bg-black hover:text-white smooth-transition">Save My Spot</button>
                </form>
            </div>

            <img src={image} className="max-w-[400px] lg:w-auto lg:h-[600px]" alt="Reserve your spot in line" />
        </section>
    );
}