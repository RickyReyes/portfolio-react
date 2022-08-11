import React from "react";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";
const Hello = () => {
	return (
		<section id="hello" className="hello-section">
			<div className="hello-container">
				<Canvas>
					<ambientLight />
					<pointLight position={[5, 5, 5]} />
					<Box position={[0, 0, 0]} />
				</Canvas>
				<div className="name-container">
					<h1 className="name">Luis Reyes</h1>
					<div className="title accent">front-end web developer</div>
				</div>
			</div>
		</section>
	);
};

export default Hello;
