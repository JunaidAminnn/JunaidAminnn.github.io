import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack & Mobile Developer",
          "Native iOS Engineer (Swift & SwiftUI)",
          "Flutter Developer",
          "Python & Backend Engineer",
          "Firebase Specialist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
