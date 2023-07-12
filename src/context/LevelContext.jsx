import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const activeLevelsTree = {
  1: true,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
};
const LevelContext = createContext();

const LevelProvider = ({ children }) => {
  const [levels, setLevel] = useState(activeLevelsTree);
  const navigate = useNavigate();

  const handlePrevSlide = (slideNumber) => {
    if (slideNumber === 1) {
      navigate("/");
    } else {
      navigate(`/slide/${slideNumber - 1}`);
    }
  };
  const handleNextSlide = (slideNumber) => {
    setLevel((prev) => prev, (levels[slideNumber + 1] = true));
    console.log(slideNumber )
    if (slideNumber <= levels.length) {
      navigate("/");
    } else {
      navigate(`/slide/${slideNumber + 1}`);
    }
    console.log(activeLevelsTree);
  };

  useEffect(() => {
    console.log("rendered");
  }, [levels]);

  return (
    <LevelContext.Provider value={{ levels, handlePrevSlide, handleNextSlide }}>
      {children}
    </LevelContext.Provider>
  );
};

export { LevelContext, LevelProvider };
