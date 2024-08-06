import { Header, Hero, Process, Pricing, Reviews, Contact, Footer } from "./components"

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
			<Footer />
		</>
	)
}

export default App