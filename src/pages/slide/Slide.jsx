import React from "react";
import { useContext } from "react";
import { LevelContext } from "../../context/LevelContext";
import { useNavigate } from "react-router-dom";

const Slide = ({ slideNumber }) => {
  const { handleNextSlide, handlePrevSlide } = useContext(LevelContext);

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div>
      <p>Slide</p>
      <h1>{slideNumber}</h1>

      <button
        style={{ width: "5rem" }}
        onClick={() => handlePrevSlide(slideNumber)}
      >
        {"Prev"}
      </button>

      <button style={{ width: "5rem" }} onClick={handleHome}>
        {"Home"}
      </button>

      <button
        style={{ width: "5rem" }}
        onClick={() => handleNextSlide(slideNumber)}
      >
        {"Next"}
      </button>
    </div>
  );
};

export default Slide;
