import React from 'react';

import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-subheading">
        <div className="subheader">
          <h1 className="text-subheader">CONTACT</h1>
        </div>
      </div>
      <div className="contact-section">
        <div className="contact-main">
          <h1>Let's hear from you!</h1>
          <div className="contact-content">
            <form className="contactForm">
              <div className="form-list">
                <div className="form-row">
                  <div className="form-item">
                    <input    
                      className="contact-input"
                      type="text" 
                      name="name"
                      placeholder="Name"
                    />
                    <label>Name</label>
                  </div>
                  <div className="form-item">
                    <input 
                      className="contact-input"
                      type="text" 
                      name="email" 
                      placeholder="Email"
                    />
                    <label>Email</label>
                  </div>
                </div>
                <div className="form-item">
                  {/* <input    
                    className="contact-input"
                    type="text" 
                    name="message"
                    placeholder="Message"
                  /> */}
                  <textarea className="contact-input" name="message" rows="3" cols="50" placeholder="Leave a message and be nice."></textarea>
                  <label>Message</label>
                </div>
                <div>
                  <button className="custom-btn" type="submit">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contact;