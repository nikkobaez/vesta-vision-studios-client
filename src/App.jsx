import HeroLogo from "./assets/hero-logo.png"
import HeroProfile1 from "./assets/hero-profile-1.png"
import HeroProfile2 from "./assets/hero-profile-2.png"
import HeroProfile3 from "./assets/hero-profile-3.png"
import HeroProfile4 from "./assets/hero-profile-4.png"

import Logo from "./assets/logo.png"

const App = () => {
    return (
      	<>
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
				<section className='flex flex-col justify-center items-center gap-16 mt-12 px-5 sm:px-20 min-w-screen min-h-screen'>
					{/* TOP HOME CONTAINER */}
					<div className="flex flex-col justify-center items-center gap-6">
						<h1 className="max-w-[550px] md:max-w-[650px] font-bold text-center text-white h1">
							Empowering Your Vision With Custom Designed Software
						</h1>

						<p className="sm:w-full max-w-[450px] md:max-w-[650px] text-[17px] text-center text-light-gray lg:text-[18px]">
							Our team specializes in creating web applications that
							perfectly align with your business needs by combining 
							innovative technology with proven strategies.
						</p>

						<button className="flex items-center gap-2 bg-gradient-to-r from-[#FF9898] to-[#8054FF] p-3 rounded-lg text-white hover:scale-[1.05] transition-all duration-500">
							Schedule A Consultation <i className="ri-arrow-right-line text-[16px] text-white"></i>
						</button>
					</div>

					{/* BOTTOM HOME CONTAINER */}
					<div className='flex lg:flex-row flex-col gap-8 bg-primary mx-auto p-8 rounded-2xl w-[325px] sm:w-[375px] md:w-[425px] lg:w-[800px] h-fit'>	
						{/* LEFT DASHBOARD CONTAINER */}
						<div className='flex flex-col flex-1 justify-center items-center gap-5 bg-secondary py-5 rounded-2xl'>
							{/* TOP */}
							<div className="flex flex-col items-center gap-3 w-full">
								{/* LOGO */}
								<img src={HeroLogo} alt="hero image"/>
								{/* BORDER */}
								<div className="bg-tertiary w-4/5 h-[1px]"/>
							</div>

							{/* BOTTOM - LARGE SCREENS */}
							<div className="lg:flex flex-col items-center gap-6 hidden w-full">
								{/* SKELETON MESSAGES */}
								{Array(7).fill(null).map((_, index) => (
									<div key={index} className="flex items-center gap-3 w-4/5 h-7">
										{/* SQUARE */}
										<div 
											className="bg-tertiary rounded-md min-w-7 min-h-7 animate-pulse-slow"
										/>
										{/* BUBBLES CONTAINER */}
										<div className="flex flex-col gap-2 py-[1px] w-full h-full">
											{/* TOP BUBBLES*/}
											<div className="flex gap-2">
												<div className="bg-tertiary rounded-2xl w-[60%] h-2 animate-pulse-slow"/>
												<div className="bg-tertiary rounded-2xl w-[22%] h-2 animate-pulse-slow"/>
											</div>
											{/* BOTTOM BUBBLES*/}
											<div className="flex items-center gap-2">
												<div className="bg-tertiary rounded-2xl w-1/3 min-h-2 animate-pulse-slow"/>
												<div className="bg-tertiary rounded-2xl w-[22%] h-2 animate-pulse-slow"/>
											</div>
										</div>
									</div>
								))}
							</div>

							{/* BOTTOM - SMALL SCREENS */}
							<div className="flex flex-col items-center gap-6 lg:hidden w-full">
								{/* SKELETON MESSAGES */}
								{Array(3).fill(null).map((_, index) => (
									<div key={index} className="flex items-center gap-3 w-4/5 h-7">
										{/* SQUARE */}
										<div 
											className="bg-tertiary rounded-md min-w-7 min-h-7 animate-pulse-slow"
										/>
										{/* BUBBLES CONTAINER */}
										<div className="flex flex-col gap-2 py-[1px] w-full h-full">
											{/* TOP BUBBLES*/}
											<div className="flex gap-2">
												<div className="bg-tertiary rounded-2xl w-[60%] h-2 animate-pulse-slow"/>
												<div className="bg-tertiary rounded-2xl w-[22%] h-2 animate-pulse-slow"/>
											</div>
											{/* BOTTOM BUBBLES*/}
											<div className="flex items-center gap-2">
												<div className="bg-tertiary rounded-2xl w-1/3 min-h-2 animate-pulse-slow"/>
												<div className="bg-tertiary rounded-2xl w-[22%] h-2 animate-pulse-slow"/>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						
						{/* MIDDLE DASHBOARD CONTAINER */}
						<div className='flex flex-col flex-1 gap-8'>
							{/* TOP  */}
							<div className="flex flex-col flex-1 justify-center items-center gap-5 bg-secondary p-3 rounded-2xl">
								{/* SKELETON MESSAGES */}
								<div className="flex items-center gap-3 w-4/5 h-7">
									{/* BUBBLES CONTAINER */}
									<div className="flex flex-col gap-2 py-[1px] w-full h-full">
										{/* TOP BUBBLES*/}
										<div className="flex gap-2">
											<div className="bg-tertiary rounded-2xl w-[60%] h-2 animate-pulse-slow"/>
											<div className="bg-tertiary rounded-2xl w-[22%] h-2 animate-pulse-slow"/>
										</div>
										{/* BOTTOM BUBBLES*/}
										<div className="flex items-center gap-2">
											<div className="bg-tertiary rounded-2xl w-1/3 min-h-2 animate-pulse-slow"/>
											<div className="bg-tertiary rounded-2xl w-[22%] h-2 animate-pulse-slow"/>
										</div>
									</div>
									{/* SQUARE */}
									<div 
										className="bg-tertiary rounded-md min-w-7 min-h-7 animate-pulse-slow"
									/>
								</div>

								<div className="relative flex justify-center items-center w-28 h-28">
									{/* INNER CIRCLE WITH GRADIENT BACKGROUND */}
									<div className="absolute bg-gradient-to-r from-[#FF9898] to-[#8054FF] rounded-full w-28 h-28"/>
									{/* OUTER CIRCLE WITH SECONDARY BACKGROUND */}
									<div className="absolute bg-secondary rounded-full w-24 h-24" />
									{/*  BORDER WITH TERTIARY BACKGROUND */}
									<div className="absolute border-[10px] border-t-transparent border-tertiary border-b-transparent border-l-transparent rounded-full w-[114px] h-[112px] animate-spin-slow" />
								</div>

							</div>

							{/* BOTTOM */}
							<div className="flex flex-col flex-1 justify-center items-center gap-5 bg-secondary p-3 rounded-2xl">
								{/* SKELETON MESSAGES */}
								<div className="flex items-center gap-3 w-4/5 h-7">
									{/* BUBBLES CONTAINER */}
									<div className="flex flex-col gap-2 py-[1px] w-full h-full">
										{/* TOP BUBBLES*/}
										<div className="flex gap-2">
											<div className="bg-tertiary rounded-2xl w-[60%] h-2 animate-pulse-slow"/>
											<div className="bg-tertiary rounded-2xl w-[22%] h-2 animate-pulse-slow"/>
										</div>
										{/* BOTTOM BUBBLES*/}
										<div className="flex items-center gap-2">
											<div className="bg-tertiary rounded-2xl w-1/3 min-h-2 animate-pulse-slow"/>
											<div className="bg-tertiary rounded-2xl w-[22%] h-2 animate-pulse-slow"/>
										</div>
									</div>
									{/* SQUARE */}
									<div 
										className="bg-tertiary rounded-md min-w-7 min-h-7 animate-pulse-slow"
									/>
								</div>
								{/* GRAPH CONTAINER */}
								<div className="flex justify-center items-center gap-4 w-full">
									<div className="relative flex">
										<div className="bg-tertiary rounded-full w-4 h-28"/>
										<div className="bottom-0 absolute bg-gradient-to-r from-[#FF9898] to-[#8054FF] rounded-full w-4 h-12 animate-grow-shrink1"/>
									</div>

									<div className="relative flex">
										<div className="bg-tertiary rounded-full w-4 h-28"/>
										<div className="bottom-0 absolute bg-gradient-to-r from-[#FF9898] to-[#8054FF] rounded-full w-4 h-12 animate-grow-shrink2"/>
									</div>

									<div className="relative flex">
										<div className="bg-tertiary rounded-full w-4 h-28"/>
										<div className="bottom-0 absolute bg-gradient-to-r from-[#FF9898] to-[#8054FF] rounded-full w-4 h-12 animate-grow-shrink3"/>
									</div>

									<div className="relative flex">
										<div className="bg-tertiary rounded-full w-4 h-28"/>
										<div className="bottom-0 absolute bg-gradient-to-r from-[#FF9898] to-[#8054FF] rounded-full w-4 h-12 animate-grow-shrink4"/>
									</div>

									<div className="relative flex">
										<div className="bg-tertiary rounded-full w-4 h-28"/>
										<div className="bottom-0 absolute bg-gradient-to-r from-[#FF9898] to-[#8054FF] rounded-full w-4 h-12 animate-grow-shrink5"/>
									</div>
								</div>
							</div>
						</div>

						{/* RIGHT DASHBOARD CONTAINER */}
						<div className='flex flex-col flex-1 justify-center items-center gap-8'>
							
							{/* TOP CONTAINER */}
							<div className="flex flex-col flex-[2] justify-center items-center gap-5 bg-secondary p-5 rounded-2xl w-full">
								{/* SKELETON PROFILE 1 */}
								<div className="flex flex-col items-center gap-6 w-full">
									{/* SKELETON PROFILE */}
									<div className="flex items-center gap-3 w-4/5 h-7">
										{/* SQUARE */}
										<img src={HeroProfile1} alt="hero image" className="w-9 h-9 object-contain"/>
										{/* BUBBLES CONTAINER */}
										<div className="flex flex-col gap-2 py-[1px] w-full h-full">
											{/* TOP BUBBLES*/}
											<div className="flex gap-2">
												<div className="bg-tertiary rounded-2xl w-[60%] h-2"/>
												<div className="bg-tertiary rounded-2xl w-[22%] h-2"/>
											</div>
											{/* BOTTOM BUBBLES*/}
											<div className="flex items-center gap-2">
												<div className="bg-tertiary rounded-2xl w-1/3 min-h-2"/>
												<div className="bg-tertiary rounded-2xl w-[22%] h-2"/>
											</div>
										</div>
									</div>
								</div>
								{/* SKELETON BORDER 1 */}
								<div 
									className="bg-tertiary w-4/5 h-[1px]"
								/>

								{/* SKELETON PROFILE 2 */}
								<div className="flex flex-col items-center gap-6 opacity-80 w-full">
									{/* SKELETON PROFILE */}
									<div className="flex items-center gap-3 w-4/5 h-7">
										{/* SQUARE */}
										<img src={HeroProfile2} alt="hero image" className="w-9 h-9 object-contain"/>
										{/* BUBBLES CONTAINER */}
										<div className="flex flex-col gap-2 py-[1px] w-full h-full">
											{/* TOP BUBBLES*/}
											<div className="flex gap-2">
												<div className="bg-tertiary rounded-2xl w-[60%] h-2"/>
												<div className="bg-tertiary rounded-2xl w-[22%] h-2"/>
											</div>
											{/* BOTTOM BUBBLES*/}
											<div className="flex items-center gap-2">
												<div className="bg-tertiary rounded-2xl w-1/3 min-h-2"/>
												<div className="bg-tertiary rounded-2xl w-[22%] h-2"/>
											</div>
										</div>
									</div>
								</div>
								{/* SKELETON BORDER 2 */}
								<div 
									className="bg-tertiary opacity-80 w-4/5 h-[1px]"
								/>

								{/* SKELETON PROFILE 3 */}
								<div className="flex flex-col items-center gap-6 opacity-60 w-full">
									{/* SKELETON PROFILE */}
									<div className="flex items-center gap-3 w-4/5 h-7">
										{/* SQUARE */}
										<img src={HeroProfile3} alt="hero image" className="w-9 h-9 object-contain"/>
										{/* BUBBLES CONTAINER */}
										<div className="flex flex-col gap-2 py-[1px] w-full h-full">
											{/* TOP BUBBLES*/}
											<div className="flex gap-2">
												<div className="bg-tertiary rounded-2xl w-[60%] h-2"/>
												<div className="bg-tertiary rounded-2xl w-[22%] h-2"/>
											</div>
											{/* BOTTOM BUBBLES*/}
											<div className="flex items-center gap-2">
												<div className="bg-tertiary rounded-2xl w-1/3 min-h-2"/>
												<div className="bg-tertiary rounded-2xl w-[22%] h-2"/>
											</div>
										</div>
									</div>
								</div>
								{/* SKELETON BORDER 3 */}
								<div 
									className="lg:flex hidden bg-tertiary opacity-60 w-4/5 h-[1px]"
								/>
	
								{/* SKELETON PROFILE 4 */}
								<div className="lg:flex flex-col items-center gap-6 hidden opacity-40 w-full">
									{/* SKELETON PROFILE */}
									<div className="flex items-center gap-3 w-4/5 h-7">
										{/* SQUARE */}
										<img src={HeroProfile4} alt="hero image" className="w-9 h-9 object-contain"/>
										{/* BUBBLES CONTAINER */}
										<div className="flex flex-col gap-2 py-[1px] w-full h-full">
											{/* TOP BUBBLES*/}
											<div className="flex gap-2">
												<div className="bg-tertiary rounded-2xl w-[60%] h-2"/>
												<div className="bg-tertiary rounded-2xl w-[22%] h-2"/>
											</div>
											{/* BOTTOM BUBBLES*/}
											<div className="flex items-center gap-2">
												<div className="bg-tertiary rounded-2xl w-1/3 min-h-2"/>
												<div className="bg-tertiary rounded-2xl w-[22%] h-2"/>
											</div>
										</div>
									</div>
								</div>
								{/* SKELETON BORDER 4 */}
							</div>

							{/* BOTTOM CONTAINER */}
							<div className="lg:flex flex-1 justify-center items-center hidden bg-secondary p-3 rounded-2xl w-full">
								<div className="flex flex-col items-center w-full">
									{/* SQUARES CONTAINER */}
									<div className="flex items-center gap-5 mb-3">
										<div 
											className="bg-tertiary rounded-md min-w-7 min-h-7 animate-pulse-slow"
										/>
										<div 
											className="bg-tertiary rounded-md min-w-7 min-h-7 animate-pulse-slow"
										/>
										<div 
											className="bg-tertiary rounded-md min-w-7 min-h-7 animate-pulse-slow"
										/>
									</div>

                                {/* TOP BUBBLES */}
                                <div className="flex justify-center items-center gap-2 w-4/5 h-7">
                                    <div className="bg-tertiary rounded-2xl w-[40%] h-2"/>
                                    <div className="bg-tertiary rounded-2xl w-[40%] h-2"/>
                                </div>

                                {/* BOTTOM BUBBLES */}
                                <div className="bg-tertiary rounded-2xl w-[40%] h-2"/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
    )
}

export default App