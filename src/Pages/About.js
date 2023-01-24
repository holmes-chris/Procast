import React from 'react';
import Navbar from "../Components/Navbar.js"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LinkIcon from '@mui/icons-material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import "../About.css"

export default function About({getLocation, data, city, setCity, loading}) {
  return (
    <div className="about-container">
      <Navbar className="report-nav" getLocation={getLocation} setCity={setCity} loading={loading} city={city} />
      <div className="about-content-container">
        <div className="about-description">
          <h1>PROCAST</h1>
          <p>Procast is a web application built using the OpenAir API that allows 
            you to check the weather for any city across the worl. 
            Along with the current and daily forecast, Procast also allows 
            you to check the air pollution.</p>
        </div>
        <div className="about-side-panel">
          <div className="github-container">
            <a className="github-link" target="_blank" href="https://github.com/">
              <AccountCircleIcon className="avatar-icon" />
              <h3>GITHUB</h3>
              <LinkIcon className="link-icon" />
            </a>
          </div>
          <div className="api-link-container">
            <h3>OPENAIR API</h3>
            <a className="api-link" target="_blank" href="https://openweathermap.org/api">
              <OpenInNewIcon className="api-link-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
