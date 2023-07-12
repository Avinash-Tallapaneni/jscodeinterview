import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LevelProvider } from "./context/LevelContext";
import Home from "./pages/home/Home";

import "./App.css";
import Slide from "./pages/slide/Slide";
function App() {
  const numberOfLevels = 6;
  const slidepathNumber = Array(numberOfLevels)
    .fill(0)
    .map((_, slideIdx) => slideIdx + 1);
  return (
    <Router>
      <LevelProvider>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          {slidepathNumber.map((slideNumber) => {
            return (
              <Route
                exact
                path={`/slide/${slideNumber}`}
                element={<Slide slideNumber={slideNumber} />}
                key={slideNumber}
              ></Route>
            );
          })}
        </Routes>
      </LevelProvider>
    </Router>
  );
}

export default App;
