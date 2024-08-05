import { Hero, Process, Pricing, Reviews } from "./components"

const App = () => (
	<>
		<main>
			<Hero />
			<Process />
			<Pricing />
			<Reviews />
		</main>

		{/* TEMPORARY - REMOVE LATER */}
		<div className="h-[2000px]" />
	</>
)

export default App