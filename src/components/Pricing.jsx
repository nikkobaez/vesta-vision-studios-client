import { pricing } from "../constants"

const Pricing = () => {
    return (
        <section id="pricing" className="flex flex-col justify-center items-center gap-12 mt-20 lg:mt-32 px-6 sm:px-20 py-5 scroll-offset">
            {/* TITLE CONTAINER */}
            <div className="flex flex-col justify-center items-center w-full max-w-7xl">
                <h2 className="font-bold text-center text-white h2">
                    Choose Your Plan
                </h2>
            </div>
            {/* GRID CONTAINER */}
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl h-full">
                {pricing.map((price) => (
                    <div key={price.id} className="relative flex flex-col flex-1 hover:scale-[1.05] justify-center items-center gap-8 bg-primary px-5 py-8 rounded-2xl min-w-[250px] h-fit transition-all duration-300 hover:cursor-pointer group">
                        {/* TOP CONTAINER */}
                        <div className="flex flex-col items-center gap-5 w-full">
                            <h1 className="font-bold text-[24px] text-white">
                                {price.title}
                            </h1>
                            <div
                                className="bg-tertiary w-4/5 h-[1px]" />
                        </div>

                        {/* MIDDLE CONTAINER */}
                        <div className="flex-1 w-4/5">
                            <ul className="flex flex-col gap-5 list-none">
                                {price.list.map((item) => (
                                    <li key={item}> 
                                        <div className="flex items-center gap-3">
                                            <div className="flex justify-center items-center bg-tertiary rounded-md w-7 h-7">
                                                <i className="text-[18px] text-white ri-check-line"></i>
                                            </div>
                                            <p className="text-white">
                                                {item}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* BOTTOM CONTAINER */}
                        <div className="flex flex-col items-center gap-5 w-full">
                            <div
                                className="bg-tertiary w-4/5 h-[1px]" />
                            <p className="font-semibold text-[26px] text-white">
                                {price.price}
                                <span className="font-normal text-base text-light-gray">
                                    /month
                                </span>
                            </p>
                            <a href="#contact" className="flex items-center gap-2 bg-tertiary group-hover:bg-center p-3 rounded-lg text-white button-slide-fill">
                                Schedule A Consultation <i className="ri-arrow-right-line text-[16px] text-white"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Pricing