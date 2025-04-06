import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import Projects from "./components/Projects";
import TopBttn from "./components/Utilities/TopBttn";
import Contact from "./components/Contact";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <>

      <MouseTrail strokeColor="#fbbf24 " />
      <NavBar />
      <Home />
      <About/>
      <Projects/>
      <ThankYou/>
      <Contact/>
      <TopBttn/>
    </>
  );
}

export default App;
