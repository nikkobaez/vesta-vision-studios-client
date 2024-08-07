import { Logo } from "../assets"

const Footer = () => {
    return (
        <div className="flex flex-col">
            {/* TOP CONTAINER */}
            <footer className="flex lg:flex-row flex-col justify-between gap-12 bg-primary mt-20 lg:mt-32 px-6 sm:px-20 py-10 w-full">
                <div className="flex flex-col items-center lg:items-start gap-3 mb-auto w-full">
                    {/* LOGO */}
                    <div className="flex items-center gap-2 w-full max-w-[235px]">
                        <img 
                            src={Logo} 
                            alt="logo image" 
                            className="w-8 object-contain"
                        />
                        <h1 className="font-bold text-[20px] text-white">
                            Vesta Vision Studios
                        </h1>
                    </div>

                    {/* SOCIAL ICONS */}
                    <div className="flex justify-between items-center w-full max-w-[235px]">
                        <a href="https://www.facebook.com">
                            <i className="text-[28px] text-white hover:cursor-pointer ri-facebook-fill"></i>
                        </a>
                        <a href="https://www.instagram.com">
                            <i className="ri-instagram-fill text-[28px] text-white hover:cursor-pointer"></i>
                        </a>
                        <a href="https://www.x.com">
                            <i className="text-[25px] text-white hover:cursor-pointer ri-twitter-x-line"></i>
                        </a>
                        <a href="https://www.linkedin.com">
                            <i className="text-[28px] text-white hover:cursor-pointer ri-linkedin-fill"></i>
                        </a>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col items-center lg:items-start gap-12 lg:gap-20">
                    {/* MENU */}
                    <div className="flex flex-col flex-1 items-center lg:items-start min-w-fit">
                        <h3 className="mb-5 font-bold text-[20px] text-white">
                            Menu
                        </h3>
                        <ul className="flex flex-col items-center lg:items-start gap-3 text-white">
                            <li className="hover:scale-[1.05] transition-all duration-300 hover:cursor-pointer"> <a href="#home"> Home </a></li>
                            <li className="hover:scale-[1.05] transition-all duration-300 hover:cursor-pointer"> <a href="#process"> Process </a></li>
                            <li className="hover:scale-[1.05] transition-all duration-300 hover:cursor-pointer"> <a href="#pricing"> Pricing </a></li>
                            <li className="hover:scale-[1.05] transition-all duration-300 hover:cursor-pointer"> <a href="#reviews"> Reviews </a></li>
                            <li className="hover:scale-[1.05] transition-all duration-300 hover:cursor-pointer"> <a href="#contact"> Contact </a></li>
                        </ul>
                    </div>
                    {/* CONTACT */}
                    <div className="flex flex-col flex-1 items-center lg:items-start gap-3 min-w-fit">
                        <h3 className="font-bold text-[20px] text-white">
                            Contact
                        </h3>
                        <p className="text-white">
                            vestavisionstudios@gmail.com
                        </p>
                        <p className="text-white">
                            (832) 392-2426
                        </p>
                    </div>
                </div>
            </footer>
            {/* BOTTOM CONTAINER */}
            <div className="flex justify-center items-center bg-primary py-8 w-full text-center text-light-gray">
                &#169; Copyright Vesta Vision Studios. All rights reserved
            </div>
        </div>
    )
}

export default Footer