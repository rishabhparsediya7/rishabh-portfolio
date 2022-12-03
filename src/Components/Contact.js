import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contacts" id="contact">
      <div className="container">
        <div className="animate-charcter">Contact me</div>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobilenumber">Email address</label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              placeholder="Contact No"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Type your message here</label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
            ></textarea>
          </div>
          <div className="send-button mt-4">
            <button className="btn w-50">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
