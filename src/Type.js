import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Antony Jude Shaman A.",
          "an Engineering Student.",
          "interested in Full Stack Development.",
          "aspired to be a Data Scientist.",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
