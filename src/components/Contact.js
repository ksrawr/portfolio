import React from 'react';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                <div className="form-item">
                  <button className="custom-btn" type="submit">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="contact-footer">
        <div className="icon-list">
          <FontAwesomeIcon className="icon-item" color="rgba(255, 255, 255, 0.38)" icon={faLinkedin} size="2x"/>
          <FontAwesomeIcon className="icon-item" color="rgba(255, 255, 255, 0.38)" icon={faGithubSquare} size="2x"/>
          <FontAwesomeIcon className="icon-item" color="rgba(255, 255, 255, 0.38)" icon={faGamepad} size="2x"/>
        </div>
        <div className="contact-info-list">
          <nav>
            <li>
              kenneth.surban62@gmail.com
            </li>
            <li>+1(510)-894-5975</li>
          </nav>
        </div>
      </div>
    </div>
  )
};

export default Contact;