import React from "react";
import { Canvas } from "@react-three/fiber";
import Box from "../components/Box";

const Hero = () => {
  return (
    <section className="hero">
      <Canvas className="box">
        <ambientLight />
        <pointLight position={[1, 1, 1]} />
        <Box position={[0, 0, 0]} />
      </Canvas>
      <div className="hero__name-container">
        <h1 className="hero__name">Luis Reyes</h1>
        <small className="hero__title">front-end web developer</small>
      </div>
    </section>
  );
};

export default Hero;
