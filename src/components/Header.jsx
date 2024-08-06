import { useRef } from "react"
import { Logo } from "../assets"

const Header = () => {
    const navMenuRef = useRef(null)

    return (
        <>
            {/* HEADER */}
			<header className="top-0 left-0 z-50 fixed bg-primary shadow-xl px-8 sm:px-20 w-full">
				{/* NAV CONTAINER */}
				<nav className="flex justify-between items-center h-[90px]">
					{/* LOGO */}
					<div className="flex items-center gap-2 hover:cursor-pointer">
						<img 
							src={Logo}
							alt="logo image"
							className="w-8 object-contain"
						/>
						<h1 className="font-bold text-[20px] text-white">
							Vesta Vision Studios
						</h1>
					</div>
					{/* DESKTOP NAV MENU */}
					<div className="lg:flex hidden">
						<ul className="flex items-center gap-10 text-white">
							<li className="hover:scale-[1.05] font-semibold transition-all duration-300 hover:cursor-pointer"> <a href="#home"> Home </a></li>
							<li className="hover:scale-[1.05] font-semibold transition-all duration-300 hover:cursor-pointer"> <a href="#process"> Process </a></li>
							<li className="hover:scale-[1.05] font-semibold transition-all duration-300 hover:cursor-pointer"> <a href="#pricing"> Pricing </a></li>
							<li className="hover:scale-[1.05] font-semibold transition-all duration-300 hover:cursor-pointer"> <a href="#reviews"> Reviews </a></li>
							<li className="hover:scale-[1.05] font-semibold transition-all duration-300 hover:cursor-pointer"> <a href="#contact"> Contact </a></li>
						</ul>
					</div>

					{/* MOBILE NAV MENU TOGGLE BUTTON */}
					<div onClick={() => navMenuRef.current.classList.toggle("nav-is-open")} className="lg:hidden cursor-pointer">
						<i className="text-[28px] text-primary-default text-white ri-menu-line" />
					</div>
				</nav>
			</header>

			{/* MOBILE NAV MENU */}
			<div ref={navMenuRef} className="top-[-100%] z-40 fixed flex justify-center items-center lg:hidden bg-primary shadow-xl px-6 py-10 w-full transition-all duration-500">
				<ul className="flex flex-col items-center gap-10 text-white">
					<li className="hover:scale-[1.05] font-semibold transition-all duration-300 hover:cursor-pointer"> <a href="#home"> Home </a></li>
					<li className="hover:scale-[1.05] font-semibold transition-all duration-300 hover:cursor-pointer"> <a href="#process"> Process </a></li>
					<li className="hover:scale-[1.05] font-semibold transition-all duration-300 hover:cursor-pointer"> <a href="#pricing"> Pricing </a></li>
					<li className="hover:scale-[1.05] font-semibold transition-all duration-300 hover:cursor-pointer"> <a href="#reviews"> Reviews </a></li>
					<li className="hover:scale-[1.05] font-semibold transition-all duration-300 hover:cursor-pointer"> <a href="#contact"> Contact </a></li>
				</ul>
			</div>
        </>
    )
}

export default Header