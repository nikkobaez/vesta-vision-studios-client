import { Hero, Process, Pricing, Reviews, Contact } from "./components"

const App = () => (
	<>
		<main>
			<Hero />
			<Process />
			<Pricing />
			<Reviews />
			<Contact />
		</main>

		{/* TEMPORARY - REMOVE LATER */}
		<div className="h-[2000px]" />
	</>
)

export default App