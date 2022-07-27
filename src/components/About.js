import React from "react";

const About = () => {
	const aboutData = [
		{
			text: "I enjoy translating UI/UX designs into polished, accessible and fully responsive code.",
			icon: <i className="about-icon fa-solid fa-laptop-code"></i>,
			svgQuery: "programming.svg",
		},
		{
			text: "I am actively seeking a development team to contribute to as an entry-level React developer.",
			icon: <i className="about-icon fa-brands fa-free-code-camp"></i>,
			svgQuery: "team.svg",
		},
		{
			text: "If I'm not working or coding, I'm either watching or playing soccer, eating tacos, or spending time with my girlfriend and family.",
			icon: <i className="about-icon fa-regular fa-futbol"></i>,
			svgQuery: "soccer.svg",
		},
	];
	return (
		<section id="about-section">
			<h2>About</h2>
			<ul className="about-ul">
				{aboutData.map((obj) => (
					<li className="about-card">
						<div
							style={{
								backgroundImage: `url(../images/${obj.svgQuery})`,
							}}
							className="about-svg"
						></div>
						<p className="about-p">{obj.text}</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default About;
