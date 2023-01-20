import React from "react";

const Contact = () => {
  return (
    <footer className="contact">
      <h2 className="contact__heading">Contact</h2>
      <form
        className="footer-form"
        action="https://formsubmit.co/luisereyes52@gmail.com"
        method="POST"
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            rows="4"
            className="message-input"
            type="text"
            name="message"
            required
          ></textarea>
        </div>
        <button className="footer-submit-btn" type="submit">
          Send
        </button>
      </form>
      <div className="footer-arrows">
        <a href="#top">
          <i className="fa-solid fa-angles-up" id="home"></i>
        </a>
      </div>
    </footer>
  );
};

export default Contact;
