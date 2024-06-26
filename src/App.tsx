import "./App.css";
import Landing from "./components/Landing";
import About from "./components/About";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Sponsors from "./components/Sponsors";
import Rules from "./components/Rules";

function App() {
	return (
		<>
			<ParallaxProvider>
				<Landing />
				<Parallax translateY={[20, -100]}>
					<About />
					<Sponsors />
					<Rules />
				</Parallax>
			</ParallaxProvider>
		</>
	);
}

export default App;
