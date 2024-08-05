import React from 'react'

const Pricing = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-16 mt-20 lg:mt-32 px-6 sm:px-20 py-5">
            {/* TITLE CONTAINER */}
            <div className="flex flex-col justify-center items-center w-full">
                <h2 className="font-bold text-center text-white h2">
                    Choose Your Plan
                </h2>
            </div>
            {/* GRID CONTAINER */}
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-full">
                {/* GRID ITEM 1 */}
                <div className="relative flex flex-col flex-1 hover:scale-[1.05] justify-center items-center gap-8 bg-primary px-5 py-8 rounded-2xl min-w-[250px] h-fit transition-all duration-300 hover:cursor-pointer">
                    {/* TOP CONTAINER */}
                    <div className="flex flex-col items-center gap-5 w-full">
                        <h1 className="font-bold text-[24px] text-white">
                            Beginner
                        </h1>
                        <div
                            className="bg-tertiary w-4/5 h-[1px]" />
                    </div>

                    {/* MIDDLE CONTAINER */}
                    <div className="flex-1 w-4/5">
                        <ul className="flex flex-col gap-5 list-none">
                            <li> 
                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-tertiary rounded-md w-7 h-7">
                                        <i className="text-[18px] text-white ri-check-line"></i>
                                    </div>
                                    <p className="text-white">
                                        Landing Page
                                    </p>
                                </div>
                            </li>
                            <li> 
                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-tertiary rounded-md w-7 h-7">
                                        <i className="text-[18px] text-white ri-check-line"></i>
                                    </div>
                                    <p className="text-white">
                                        UI/UX Design
                                    </p>
                                </div>
                            </li>
                            <li> 
                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-tertiary rounded-md w-7 h-7">
                                        <i className="text-[18px] text-white ri-check-line"></i>
                                    </div>
                                    <p className="text-white">
                                        SEO Optimization
                                    </p>
                                </div>
                            </li>
                            <li> 
                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-tertiary rounded-md w-7 h-7">
                                        <i className="text-[18px] text-white ri-check-line"></i>
                                    </div>
                                    <p className="text-white">
                                        Device Responsive
                                    </p>
                                </div>
                            </li>
                            <li> 
                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-tertiary rounded-md w-7 h-7">
                                        <i className="text-[18px] text-white ri-check-line"></i>
                                    </div>
                                    <p className="text-white">
                                        Hosting & Domain
                                    </p>
                                </div>
                            </li>
                            <li> 
                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-tertiary rounded-md w-7 h-7">
                                        <i className="text-[18px] text-white ri-check-line"></i>
                                    </div>
                                    <p className="text-white">
                                        Unlimited Edits
                                    </p>
                                </div>
                            </li>
                            <li> 
                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-tertiary rounded-md w-7 h-7">
                                        <i className="text-[18px] text-white ri-check-line"></i>
                                    </div>
                                    <p className="text-white">
                                        24/7 Support
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* BOTTOM CONTAINER */}
                    <div className="flex flex-col items-center gap-5 w-full">
                        <div
                            className="bg-tertiary w-4/5 h-[1px]" />
                        <p className="font-semibold text-[26px] text-white">
                            $50.00
                            <span className="font-normal text-base text-light-gray">
                                /month
                            </span>
                        </p>
                        <button className="flex items-center gap-2 bg-gradient-to-r from-[#FF9898] to-[#8054FF] p-3 rounded-lg text-white">
                            Schedule A Consultation <i className="ri-arrow-right-line text-[16px] text-white"></i>
                        </button>
                    </div>
                </div>

                {/* GRID ITEM 2 */}
                <div className="relative flex flex-col flex-1 hover:scale-[1.05] justify-center items-center gap-8 bg-primary px-5 py-8 rounded-2xl min-w-[250px] h-fit transition-all duration-300 hover:cursor-pointer">
                    {/* TOP CONTAINER */}
                    <div className="flex flex-col items-center gap-5 w-full">
                        <h1 className="font-bold text-[24px] text-white">
                            Professional
                        </h1>
                        <div
                            className="bg-tertiary w-4/5 h-[1px]" />
                    </div>

                    {/* MIDDLE CONTAINER */}
                    <div className="flex-1 w-4/5">
                        <ul className="flex flex-col gap-5 list-none">
                            <li> 
                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-tertiary rounded-md w-7 h-7">
                                        <i className="text-[18px] text-white ri-check-line"></i>
                                    </div>
                                    <p className="text-white">
                                        Up To 10 Pages
                                    </p>
                                </div>
                            </li>
                            <li> 
                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-tertiary rounded-md w-7 h-7">
                                        <i className="text-[18px] text-white ri-check-line"></i>
                                    </div>
                                    <p className="text-white">
                                        UI/UX Design
                                    </p>
                                </div>
                            </li>
                            <li> 
                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-tertiary rounded-md w-7 h-7">
                                        <i className="text-[18px] text-white ri-check-line"></i>
                                    </div>
                                    <p className="text-white">
                                        SEO Optimization
                                    </p>
                                </div>
                            </li>
                            <li> 
                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-tertiary rounded-md w-7 h-7">
                                        <i className="text-[18px] text-white ri-check-line"></i>
                                    </div>
                                    <p className="text-white">
                                        Device Responsive
                                    </p>
                                </div>
                            </li>
                            <li> 
                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-tertiary rounded-md w-7 h-7">
                                        <i className="text-[18px] text-white ri-check-line"></i>
                                    </div>
                                    <p className="text-white">
                                        Hosting & Domain
                                    </p>
                                </div>
                            </li>
                            <li> 
                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-tertiary rounded-md w-7 h-7">
                                        <i className="text-[18px] text-white ri-check-line"></i>
                                    </div>
                                    <p className="text-white">
                                        Unlimited Edits
                                    </p>
                                </div>
                            </li>
                            <li> 
                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-tertiary rounded-md w-7 h-7">
                                        <i className="text-[18px] text-white ri-check-line"></i>
                                    </div>
                                    <p className="text-white">
                                        24/7 Support
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* BOTTOM CONTAINER */}
                    <div className="flex flex-col items-center gap-5 w-full">
                        <div
                            className="bg-tertiary w-4/5 h-[1px]" />
                        <p className="font-semibold text-[26px] text-white">
                            $100.00
                            <span className="font-normal text-base text-light-gray">
                                /month
                            </span>
                        </p>
                        <button className="flex items-center gap-2 bg-gradient-to-r from-[#FF9898] to-[#8054FF] p-3 rounded-lg text-white">
                            Schedule A Consultation <i className="ri-arrow-right-line text-[16px] text-white"></i>
                        </button>
                    </div>
                </div>

                {/* GRID ITEM 3 */}
                <div className="relative flex flex-col flex-1 hover:scale-[1.05] justify-center items-center gap-8 bg-primary px-5 py-8 rounded-2xl min-w-[250px] h-fit transition-all duration-300 hover:cursor-pointer">
                    {/* TOP */}
                    <div className="flex flex-col items-center gap-5 w-full">
                        <h1 className="font-bold text-[24px] text-white">
                            Enterprise
                        </h1>
                        <div
                            className="bg-tertiary w-4/5 h-[1px]" />
                    </div>

                    {/* MIDDLE CONTAINER */}
                    <div className="flex-1 w-4/5">
                        <ul className="flex flex-col gap-5 list-none">
                            <li> 
                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-tertiary rounded-md w-7 h-7">
                                        <i className="text-[18px] text-white ri-check-line"></i>
                                    </div>
                                    <p className="text-white">
                                        Unlimited Pages
                                    </p>
                                </div>
                            </li>
                            <li> 
                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-tertiary rounded-md w-7 h-7">
                                        <i className="text-[18px] text-white ri-check-line"></i>
                                    </div>
                                    <p className="text-white">
                                        UI/UX Design
                                    </p>
                                </div>
                            </li>
                            <li> 
                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-tertiary rounded-md w-7 h-7">
                                        <i className="text-[18px] text-white ri-check-line"></i>
                                    </div>
                                    <p className="text-white">
                                        SEO Optimization
                                    </p>
                                </div>
                            </li>
                            <li> 
                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-tertiary rounded-md w-7 h-7">
                                        <i className="text-[18px] text-white ri-check-line"></i>
                                    </div>
                                    <p className="text-white">
                                        Device Responsive
                                    </p>
                                </div>
                            </li>
                            <li> 
                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-tertiary rounded-md w-7 h-7">
                                        <i className="text-[18px] text-white ri-check-line"></i>
                                    </div>
                                    <p className="text-white">
                                        Hosting & Domain
                                    </p>
                                </div>
                            </li>
                            <li> 
                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-tertiary rounded-md w-7 h-7">
                                        <i className="text-[18px] text-white ri-check-line"></i>
                                    </div>
                                    <p className="text-white">
                                        Unlimited Edits
                                    </p>
                                </div>
                            </li>
                            <li> 
                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-tertiary rounded-md w-7 h-7">
                                        <i className="text-[18px] text-white ri-check-line"></i>
                                    </div>
                                    <p className="text-white">
                                        24/7 Support
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* BOTTOM CONTAINER */}
                    <div className="flex flex-col items-center gap-5 w-full">
                        <div
                            className="bg-tertiary w-4/5 h-[1px]" />
                        <p className="font-semibold text-[26px] text-white">
                            $150.00
                            <span className="font-normal text-base text-light-gray">
                                /month
                            </span>
                        </p>
                        <button className="flex items-center gap-2 bg-gradient-to-r from-[#FF9898] to-[#8054FF] p-3 rounded-lg text-white">
                            Schedule A Consultation <i className="ri-arrow-right-line text-[16px] text-white"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing