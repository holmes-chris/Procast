import React from 'react';
import Navbar from "../Components/Navbar.js";
import "../Contact.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub'

export default function Contact() {
  return (
    <div className="contact-container">
      <Navbar className="report-nav" />
      <div className="contact-content-container">
        <div className="contact-form-container">
          <h1>Contact Me</h1>
          <div className="email-info">
            <h4>EMAIL</h4>
            <p>chrisholmes.iu@gmail.com</p>
          </div>
          <div className="social-info">
            <a target="_blank" href="https://www.linkedin.com/in/chrisholmesiu/">
              <LinkedInIcon />
            </a>
            <a target="_blank" href="https://github.com/holmes-chris">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>   
    </div>
  )
}
