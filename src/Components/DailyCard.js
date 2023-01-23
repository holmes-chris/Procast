import React from 'react';

export default function DailyCard({dailyData, weekdayIndex, weekday}) {
  return (
    <div className="card">
      {/* //generating the weather card info for each day */}
        <div className="card-content">
            <h3 className="weekday">{weekday}</h3>
            {/* //checking if the object entry exists in the api object */}
            {dailyData.daily ? <img className="daily-icon" alt="weather-icon" src={`http://openweathermap.org/img/wn/${dailyData.daily[weekdayIndex].weather[0].icon}@2x.png`}/> : null}
            {dailyData.daily ? <h3 className="daily-temp">{dailyData.daily[weekdayIndex].temp.min.toFixed()}°/{dailyData.daily[weekdayIndex].temp.max.toFixed()}°</h3> : null }
        </div>
    </div>
  )
}


