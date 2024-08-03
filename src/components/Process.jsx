import { ResearchAndStrategyIcon, UIUXDesignIcon, DevelopmentIcon, TestAndValidateIcon, LaunchIcon, MeasureAndRefineIcon } from "../assets"

const Process = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-16 mt-20 lg:mt-32 px-5 sm:px-20 py-5"> 
            {/* TITLE CONTAINER */}
            <div className="flex flex-col justify-center items-center gap-6 w-full">
                <h2 className="font-bold text-center text-white h2">
                    Our Development Process
                </h2>

                <p className="sm:w-full max-w-[450px] md:max-w-[650px] text-[17px] text-center text-light-gray lg:text-[18px]">
                    We empower everyone from established brands to newly-founded start 
                    ups with a fast, flexible, and proven strategic approach to 
                    launching their web application.
                </p>

            </div>
            {/* GRID CONTAINER */}
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-full">
                {/* GRID ITEM 1 */}						
                <div className="flex flex-col flex-1 hover:scale-[1.05] justify-center items-center gap-8 bg-primary p-5 rounded-2xl min-w-[250px] h-[325px] transition-all duration-300 hover:cursor-pointer group">
                    {/* ICON CONTAINER */}
                    <div className="flex justify-center items-center bg-secondary group-hover:bg-center rounded-2xl w-20 h-20 button-liquid-fill">
                        <ResearchAndStrategyIcon color="white" size={40}/>
                    </div>
                    {/* TEXT CONTAINER */}
                    <div className="flex flex-col items-center gap-3 text-center">
                        <h2 className="font-semibold text-[24px] text-white">
                            Research & Strategy
                        </h2>
                        <p className="text-light-gray">
                            Our first step is to understand your vision and goals and from 
                            there we create an actionable project plan and solutions 
                            roadmap

                        </p>
                    </div>
                </div>

                {/* GRID ITEM 2 */}						
                <div className="flex flex-col flex-1 justify-center hover:scale-[1.05] items-center gap-8 bg-primary p-5 rounded-2xl min-w-[250px] h-[325px] transition-all duration-300 hover:cursor-pointer group">
                    {/* ICON CONTAINER */}
                    <div className="flex justify-center items-center bg-secondary group-hover:bg-center rounded-2xl w-20 h-20 button-liquid-fill">
                        <UIUXDesignIcon size={35} color="white"/>
                    </div>
                    {/* TEXT CONTAINER */}
                    <div className="flex flex-col items-center gap-3 text-center">
                        <h2 className="font-semibold text-[24px] text-white">
                            UI/UX Design
                        </h2>
                        <p className="text-light-gray">
                            Our UI/UX team works with you to design a web application that is 
                            both beautiful AND functional creating a premium user experience.
                        </p>
                    </div>
                </div>

                {/* GRID ITEM 3 */}						
                <div className="flex flex-col flex-1 justify-center hover:scale-[1.05] items-center gap-8 bg-primary p-5 rounded-2xl min-w-[250px] h-[325px] transition-all duration-300 hover:cursor-pointer hover:cursor-pointer group group">
                    {/* ICON CONTAINER */}
                    <div className="flex justify-center items-center bg-secondary group-hover:bg-center rounded-2xl w-20 h-20 button-liquid-fill">
                        <DevelopmentIcon size={35} color="white"/>
                    </div>
                    {/* TEXT CONTAINER */}
                    <div className="flex flex-col items-center gap-3 text-center">
                        <h2 className="font-semibold text-[24px] text-white">
                            Development
                        </h2>
                        <p className="text-light-gray">
                            Our US-based software developers start to develop the technology,
                            platforms, and services that will make your web application a success.
                        </p>
                    </div>
                </div>
                
                {/* GRID ITEM 4 */}						
                <div className="flex flex-col flex-1 justify-center hover:scale-[1.05] items-center gap-8 bg-primary p-5 rounded-2xl min-w-[250px] h-[325px] transition-all duration-300 hover:cursor-pointer hover:cursor-pointer group group">
                    {/* ICON CONTAINER */}
                    <div className="flex justify-center items-center bg-secondary group-hover:bg-center rounded-2xl w-20 h-20 button-liquid-fill">
                        <TestAndValidateIcon size={40} color="white"/>
                    </div>
                    {/* TEXT CONTAINER */}
                    <div className="flex flex-col items-center gap-3 text-center">
                        <h2 className="font-semibold text-[24px] text-white">
                            Test & Validate
                        </h2>
                        <p className="text-light-gray">
                            Providing a secure digital experience is important which is why 
                            we perform extensive quality assurance testing prior to launch.
                        </p>
                    </div>
                </div>

                {/* GRID ITEM 5 */}						
                <div className="flex flex-col flex-1 justify-center hover:scale-[1.05] items-center gap-8 bg-primary p-5 rounded-2xl min-w-[250px] h-[325px] transition-all duration-300 hover:cursor-pointer hover:cursor-pointer group group">
                    {/* ICON CONTAINER */}
                    <div className="flex justify-center items-center bg-secondary group-hover:bg-center rounded-2xl w-20 h-20 button-liquid-fill">
                        <LaunchIcon color="white" size={40}/>
                    </div>
                    {/* TEXT CONTAINER */}
                    <div className="flex flex-col items-center gap-3 text-center">
                        <h2 className="font-semibold text-[24px] text-white">
                            Launch
                        </h2>
                        <p className="text-light-gray">
                            Once your web application is ready for launch, we will handle the 
                            deployment and be on standby to ensure everything runs smoothly.
                        </p>
                    </div>
                </div>
                
                {/* GRID ITEM 6 */}						
                <div className="flex flex-col flex-1 justify-center hover:scale-[1.05] items-center gap-8 bg-primary p-5 rounded-2xl min-w-[250px] h-[325px] transition-all duration-300 hover:cursor-pointer hover:cursor-pointer group group">
                    {/* ICON CONTAINER */}
                    <div className="flex justify-center items-center bg-secondary group-hover:bg-center rounded-2xl w-20 h-20 button-liquid-fill">
                        <MeasureAndRefineIcon size={40} color="white"/>
                    </div>
                    {/* TEXT CONTAINER */}
                    <div className="flex flex-col items-center gap-3 text-center">
                        <h2 className="font-semibold text-[24px] text-white">
                            Measure & Refine
                        </h2>
                        <p className="text-light-gray">
                            Long term-success means that your web application is meeting 
                            your business goals so we'll measure and optimize consistently.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process