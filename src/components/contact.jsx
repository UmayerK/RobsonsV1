import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export const Contact = (props) => {
  const [state, handleSubmit] = useForm("xnnakgnl");

  if (state.succeeded) {
    return <p>Thanks for your message! We'll get back to you soon.</p>;
  }

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        id="email"
                        type="email" 
                        name="email"
                        className="form-control text-black"
                        placeholder="Your Email"
                        required
                        style={{ color: 'black' }}
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    className="form-control text-black"
                    rows="4"
                    placeholder="Your Message"
                    required
                    style={{ color: 'black' }}
                  ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button type="submit" className="btn btn-custom btn-lg" disabled={state.submitting}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Designed By  {" "}
            <a href="https://umayer.ca" rel="nofollow">
              Umayer Khan
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
