import { Header, Hero, Process, Pricing, Reviews, Contact } from "./components"

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Process />
				<Pricing />
				<Reviews />
				<Contact />
			</main>
		</>
	)
}

export default App