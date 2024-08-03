import { Hero, Process } from "./components"
import Logo from "./assets/logo.png"

const App = () => {
    return (
      	<>
			{/* HEADER - NOT FINISHED */}
			<header className="px-8 sm:px-20 w-full">
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
						<ul className="flex items-center gap-10">
							{/* FIX ME - ADD LINKS */}
						</ul>
					</div>

					{/* MOBILE NAV MENU TOGGLE BUTTON */}
					<div onClick={() => navMenuRef.current.classList.toggle("nav-is-open")} className="lg:hidden cursor-pointer">
						<i className="text-[28px] text-primary-default text-white ri-menu-line" />
					</div>
				</nav>
			</header>

			<main>
				{/* HOME - FINISHED */}
				<Hero />

				{/* PROCESS - FINISHED */}
				<Process />
				
				{/* TESTIMONIALS - NOT FINISHED */}

			</main>

			{/* TEMPORARY - REMOVE LATER */}
			<div className="h-[2000px]"/>
		</>
    )
}

export default App