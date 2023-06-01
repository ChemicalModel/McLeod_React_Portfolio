import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import Projects from "./components/Project";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;