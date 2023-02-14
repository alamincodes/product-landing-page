import "./App.css";
import Hero from "./components/Hero";
// import animate scroll
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  // aos initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div>
      <Hero />
    </div>
  );
}

export default App;
