import { processes } from "../constants"

const Process = () => {
    return (
        <section id="process" className="flex flex-col justify-center items-center gap-12 mt-20 lg:mt-32 px-6 sm:px-20 py-5 scroll-offset"> 
            {/* TITLE CONTAINER */}
            <div className="flex flex-col justify-center items-center w-full max-w-7xl">
                <h2 className="font-bold text-center text-white h2">
                    Our Development Process
                </h2>
            </div>
            {/* GRID CONTAINER */}
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl h-full">
                {processes.map((process) => (
                    <div key={process.id} className="flex flex-col flex-1 hover:scale-[1.05] justify-center items-center gap-8 bg-primary p-5 rounded-2xl min-w-[250px] h-[325px] transition-all duration-300 hover:cursor-pointer group">
                        {/* ICON CONTAINER */}
                        <div className="flex justify-center items-center bg-secondary group-hover:bg-center rounded-2xl w-20 h-20 button-liquid-fill">
                            {process.icon}
                        </div>
                        {/* TEXT CONTAINER */}
                        <div className="flex flex-col items-center gap-3 text-center">
                            <h2 className="font-semibold text-[24px] text-white">
                                {process.title}
                            </h2>
                            <p className="text-light-gray leading-7">
                                {process.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Process