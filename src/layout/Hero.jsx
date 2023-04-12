import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__photo"></div>
      <h1 className="hero__name">
        Hi, I'm <span className="hero__accent">Luis Reyes</span>
      </h1>
      <h2 className="hero__about">
        a <span className="hero__accent">front-end web developer</span> based in{" "}
        <span className="hero__accent">Los Angeles</span>
      </h2>
      <p className="hero__more-about">
        I specialize in transforming design concepts into React and CSS code
        <br />I also enjoy doing some design and creative coding on the side
      </p>
    </section>
  );
};

export default Hero;
