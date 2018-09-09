import React from "react";
import Carrousel from "./Carrousel";
import Countdown from "./Countdown";

const Featured = () => {
  return (
    <div style={{ position: "relative", backgroundColor: "red" }}>
      <Carrousel />
      <Countdown />
    </div>
  );
};

export default Featured;
