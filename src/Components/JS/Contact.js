import React from "react";
import "../CSS/Contact.css";
import "../CSS/heading.css";

const Contact = () => {
  return (
    <div className="contacts" id="contact">
      <div className="container">
        <div className="animate-charcter">Contact me</div>
        <section className="contact_us">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="contact_inner">
                  <div className="row">
                    <div className="col-md-10">
                      <div className="contact_form_inner">
                        <div className="contact_field">
                          <h3>See you in Inbox !</h3>
                          <p>
                            Feel Free to contact me any time. I will get back
                            to you as soon as I can!.
                          </p>
                          <input
                            type="text"
                            className="form-control form-group"
                            placeholder="Name"
                          />
                          <input
                            type="text"
                            className="form-control form-group"
                            placeholder="Email"
                          />
                          <textarea
                            className="form-control form-group"
                            placeholder="Message"
                          ></textarea>
                          <button className="contact_form_submit">Send</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="right_conatct_social_icon d-flex align-items-end">
                        <div className="socil_item_inner d-flex">
                          <li>
                            <a href="https://www.facebook.com/rishabh.parsediya.5/">
                              <i className="fab fa-facebook-square"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/rishabh_parsediya/">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/RishabhParsedi1">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact_info_sec">
                    <h4>Contact Info</h4>
                    <div className="d-flex info_single align-items-center">
                      <i className="fas fa-headset"></i>
                      <span>+91 7987567233</span>
                    </div>
                    <div className="d-flex info_single align-items-center">
                      <i className="fas fa-envelope-open-text"></i>
                      <span>parsediyarishabh@gmail.com</span>
                    </div>
                    <div className="d-flex info_single align-items-center">
                      <i className="fas fa-map-marked-alt"></i>
                      <span>
                        Currently in Gurugram, Haryana, IN
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="map_sec">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="map_inner">
                  <h4>Find me on Google Map</h4>
                  <p>
                    My hometown, native place, from where I belong to.
                  </p>
                  <div className="map_bind">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114542.66696324087!2d78.12085907156147!3d26.214292895023938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d1792291fb%3A0xff4fb56d65bc3adf!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1672323598464!5m2!1sen!2sin"
                      
                      style={{
                        width:"100%",
                      height:"450",
                      frameborder:"0",
                      border:"0",
                      allowFullScreen:"",
                      ariaHidden:"false",
                      tabIndex:"0"}}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
