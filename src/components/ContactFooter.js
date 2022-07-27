import React from "react";

const ContactFooter = () => {
	return (
		<footer id="contact-section">
			<h2 class="contact-title">Contact</h2>
			<form
				class="footer-form"
				action="https://formsubmit.co/luisereyes52@gmail.com"
				method="POST"
			>
				<div>
					<label for="name">Name:</label>
					<input id="name" type="text" name="name" required />
				</div>
				<div>
					<label for="email">Email:</label>
					<input type="email" name="email" required />
				</div>
				<div>
					<label for="message">Message:</label>
					<textarea
						rows="4"
						class="message-input"
						type="text"
						name="message"
						required
					></textarea>
				</div>
				<button class="footer-submit-btn" type="submit">
					Send
				</button>
			</form>
			<div class="footer-arrows">
				<a href="#top">
					<i class="fa-solid fa-angles-up" id="home"></i>
				</a>
			</div>
		</footer>
	);
};

export default ContactFooter;
