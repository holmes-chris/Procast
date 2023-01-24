import React, {useState} from 'react';
import Navbar from "../Components/Navbar.js";
import DailyCard from "../Components/DailyCard.js";
import CircularProgress from '@mui/material/CircularProgress';

export default function Report({background, dailyData, todayData, ratingLabel, rating}) {

  const currentDayIndex = (new Date().getDay());
  const currentMonthIndex = (new Date().getMonth());
  //this array is for the daily card component's display
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  //this array is for the current weather display
  const weekdayDisplayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const weekdayDisplay = weekdayDisplayArray[currentDayIndex];
  const monthDisplay = monthArray[currentMonthIndex];
  const dateDisplay = new Date().getDate();
  const yearDisplay = new Date().getFullYear();
  
  return (
    <div className="report-container">
      {todayData && (
        <>
          <div id="temperature-container">
            <Navbar className="report-nav" />
            <img src={background} id="myVideo"/>
            <div className="temperature-content-wrapper">
              <div className="temperature-content">
                  <div className="current-weather-container">
                    <div className="current-weather-container-upper">
                      <h3 className="city-name">{todayData.name}</h3>
                      {todayData.weather ? <img className="daily-weather-icon" src={`http://openweathermap.org/img/wn/${todayData.weather[0].icon}@2x.png`} alt="weather-icon" /> : null}
                      {todayData.weather ? <h2 className="temperature">{todayData.main.temp.toFixed()}°</h2> : null}
                    </div>
                    <div className="current-weather-container-middle">
                      <div className="lower-header-temps">
                        {todayData.main ? <h3 className="lower-header-low">Lo: {todayData.main.temp_min.toFixed()}°</h3> : null}
                        {todayData.main ? <h3 className="lower-header-high">High: {todayData.main.temp_max.toFixed()}°</h3> : null}
                      </div>
                    </div>
                    <div className="current-weather-container-lower">
                      {todayData.weather ? <h3>{todayData.weather[0].main}</h3> : null}
                      <h3>{weekdayDisplay}, {monthDisplay} {dateDisplay}, {yearDisplay}</h3>
                    </div>
                  </div>
                  <div className="daily-container">
                    {/* //passing the dailyData object info down to the daily card components */}
                    <DailyCard dailyData={dailyData} weekday={daysOfWeek[currentDayIndex + 1]} weekdayIndex={1} todayData={todayData}/>
                    <DailyCard dailyData={dailyData} weekday={daysOfWeek[currentDayIndex + 2]} weekdayIndex={2} todayData={todayData}/>
                    <DailyCard dailyData={dailyData} weekday={daysOfWeek[currentDayIndex + 3]} weekdayIndex={3} todayData={todayData}/>
                    <DailyCard dailyData={dailyData} weekday={daysOfWeek[currentDayIndex + 4]} weekdayIndex={4} todayData={todayData}/>
                    <DailyCard dailyData={dailyData} weekday={daysOfWeek[currentDayIndex + 5]} weekdayIndex={5} todayData={todayData}/>
                    <DailyCard dailyData={dailyData} weekday={daysOfWeek[currentDayIndex + 6]} weekdayIndex={6} todayData={todayData}/>
                  </div>
              </div>
            </div>
          </div>
          <div id="air-quality">
            <h1 className="air-quality-title">AIR QUALITY</h1>
            <div className="air-quality-content-container">
              <div className="air-rating-diagram">
                <CircularProgress className="rating-svg" size={250} variant="determinate" value={rating * 20}/>
                {/* //rating is being generated based on airData api response */}
                <h1 className="rating">{rating}</h1>
                <h3 className="rating-label">{ratingLabel}</h3>
              </div>
              <div className="air-rating-description-container">
                <p className="rating-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
            </div>        
          </div>
        </>
      )}  
    </div>
  )
}
