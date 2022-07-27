import React from "react";

const Header = () => {
	return (
		<header>
			<span className="double-r">&#8477;&reg;</span>
			<nav>
				<ul className="nav-ul">
					<li className="nav-item">
						<a href="#top">Home</a>
					</li>
					<li className="nav-item">
						<a href="#projects-section">Projects</a>
					</li>
					<li className="nav-item">
						<a href="#about-section">About</a>
					</li>
					<li className="nav-item">
						<a href="#contact-section">Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
