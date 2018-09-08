import React from "react";
import Carrousel from "./Carrousel";
import Countdown from "./Countdown";

const Featured = () => {
  return (
    <div style={{ position: "relative", backgroundColor: "red" }}>
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">
          These Aren't The Driods You're Looking For
        </div>
      </div>
      <Countdown />
    </div>
  );
};

export default Featured;
