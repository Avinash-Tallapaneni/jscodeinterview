import React, { useContext } from "react";
import Level1 from "../../assets/1.png";
import { LevelContext } from "../../context/LevelContext";
import { useNavigate } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const { levels } = useContext(LevelContext);
  const navigate = useNavigate();

  const handleNavigateSlide = (level) => {
    navigate(`/slide/${level}`);
  };

  return (
    <div className="level_container">
      {Object.keys(levels).map((level, levelIdx) => {
        return (
          <div
            className={`level_icon ${levelIdx} ${
              levels[level] === true ? "cleared" : "not_cleared"
            }`}
            key={levelIdx}
          >
            <div onClick={() => handleNavigateSlide(level)}>
              <img src={Level1} alt={levelIdx} />
              <h4>{`Level ${level}`}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
