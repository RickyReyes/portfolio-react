import React from "react";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";

const Hero = () => {
  return (
    <section className="hero">
      <Canvas className="box">
        <ambientLight />
        <pointLight position={[1, 1, 1]} />
        <Box position={[-5, 0, 0]} />
      </Canvas>
      <div className="name">
        <h1 className="name__name">Luis Reyes</h1>
        <div className="name__title">front-end web developer</div>
      </div>
    </section>
  );
};

export default Hero;
