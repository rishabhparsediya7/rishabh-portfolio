import React from "react";
import "../CSS/Contact.css";
import "../CSS/heading.css";

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
            <textarea className="form-control" id="message" rows="3"></textarea>
          </div>
          <div className="send-button mt-4">
            <button className="btn w-50">Send Message</button>
          </div>
        </form>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 hh-grayBox pt45 pb20">
            <div className="row justify-content-between">
              <div className="order-tracking completed">
                <span className="is-complete"></span>
                <p>
                  Ordered
                  <br />
                  <span>Mon, June 24</span>
                </p>
              </div>
              <div className="order-tracking completed">
                <span className="is-complete"></span>
                <p>
                  Shipped
                  <br />
                  <span>Tue, June 25</span>
                </p>
              </div>
              <div className="order-tracking">
                <span className="is-complete"></span>
                <p>
                  Delivered
                  <br />
                  <span>Fri, June 28</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
