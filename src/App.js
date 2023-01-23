import React, { useEffect, useState  } from "react";
import './App.css';
import Main from "./Pages/Main.js";
import About from "./Pages/About.js";
import Contact from "./Pages/Contact.js";
import NoPage from "./Pages/NoPage.js";
import Report from "./Pages/Report.js";
import {Routes, Route } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {backgroundData} from "./backgroundData.js"

function App() {
  //the today data state will hold the current weather data from the 1st response
  const [todayData, setTodayData] = useState(null)
  // the lat/lon stastes will take in the latitiude/longitude from the first api response.
  // They will also be used to fetch the data in the 2nd api
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  //the dailData is fetched using the at/lon input from the 1st response. 
  // This state will hold the 7-day weather data returned from the 2nd api response
  const [dailyData, setDailyData] = useState(null);
  //the cityData state will hold the input from the search bar. It updates immediately with an onChange function
  const [cityData, setCityData] = useState({input: ''})
  // the airData/rating state will hold the air quality response from the 2nd api
  const [airData, setAirData] = useState(null);
  const [rating, setRating] = useState(0);
  const [ratingLabel, setRatingLabel] = useState("")
  const [loading, setLoading] = useState(false);
  //sets background image based on weather/time of day
  const [background, setBackground] = useState(null)
  const navigate = useNavigate();



  useEffect(() => {
    const savedTodayState = JSON.parse(localStorage.getItem('todayData'));
    const savedDailyState = JSON.parse(localStorage.getItem('dailyData'));
    const savedCityState = JSON.parse(localStorage.getItem('cityData'));
    const savedLatState = JSON.parse(localStorage.getItem('latitude'));
    const savedLonState = JSON.parse(localStorage.getItem('longitude'));
    const savedBackgroundState = JSON.parse(localStorage.getItem('background'));
    if (savedTodayState !== null) setTodayData(savedTodayState);
    if (savedDailyState !== null) setDailyData(savedDailyState);
    if (savedCityState !== null) setCityData(savedCityState);
    if (savedLatState !== null) setLat(savedLatState);
    if (savedLonState !== null) setLon(savedLonState);
    if (savedBackgroundState !== null) {setBackground(savedBackgroundState)};

    console.log('today', savedTodayState);
    console.log('daily', savedDailyState);
    console.log("background", savedBackgroundState)
  }, []);

  useEffect(() => {
    localStorage.setItem('todayData', JSON.stringify(todayData));
    localStorage.setItem('dailyData', JSON.stringify(dailyData));
    localStorage.setItem('cityData', JSON.stringify(cityData));
    localStorage.setItem('latitude', JSON.stringify(lat));
    localStorage.setItem('longitude', JSON.stringify(lon));
    localStorage.setItem('background', JSON.stringify(background));
  }, [todayData, dailyData, background])
  
  //first api url that takes in cityData input
  const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityData.input}&units=imperial&appid=f2604112f0f7ad06951cdbb2391d40b1`;

  useEffect(() => {
    //if search input exists
    if (cityData.input) {
      //async function fetches api immediately
      async function fetchData() {
        const response = await fetch(api_url);
        const coordData = await response.json();
        setTodayData(coordData);
        setLat(coordData.coord.lat);
        setLon(coordData.coord.lon);
        const oneCallFetch = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=f2604112f0f7ad06951cdbb2391d40b1`);
        const oneCallData = await oneCallFetch.json();
        setDailyData(oneCallData)
        setCityData(cityData.input)
        const airFetch = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${lat}&lon=${lon}&start=1606223802&end=1606482999&appid=f2604112f0f7ad06951cdbb2391d40b1`);
        const airFetchData = await airFetch.json();
        setAirData(airFetchData)
        setRating(airData.list[0].main.aqi)
      }
      fetchData();
    }
    //useEffect will re-render when cityData,lat,lon,airData, or rating changes
  }, [cityData, lat, airData, rating])

  useEffect(() => {
    switch(rating) {
      case 1: 
        setRatingLabel("Poor");
        break;
      case 2: 
        setRatingLabel("Below Average");
        break;
      case 3: 
        setRatingLabel("Average");
        break;    
      case 4: 
        setRatingLabel("Good");
        break; 
      case 5: 
        setRatingLabel("Excellent");
        break;
    }
  }, [airData, rating, ratingLabel])

  //this function checks if the input cuty exists and sets the background based on the weather/time
  function getLocation(e) {
    e.preventDefault();
    e.persist();
    setCityData({...cityData, input: e.target.value})
    
    if (todayData.coord) {
      navigate("/report")
    } else alert("Please enter a valid city.")

    const currentHour = new Date().getHours();
    if (todayData.weather[0].main === "Clouds" && currentHour > 6 && currentHour < 16) {
      setBackground(backgroundData.cloudy.cloudDay)
    } else if (todayData.weather[0].main === "Clouds" && currentHour > 16 || currentHour < 6) {
      setBackground(backgroundData.cloudy.cloudNight)
    } else if (todayData.weather[0].main === "Clear" && currentHour > 6 && currentHour < 16) {
      setBackground(backgroundData.clear.clearDay)
    } else if (todayData.weather[0].main === "Clear" && currentHour > 16 || currentHour < 6) {
      setBackground(backgroundData.clear.clearNight)
    } else if (todayData.weather[0].main === "Rain" && currentHour > 6 && currentHour < 16) {
      setBackground(backgroundData.rain.rainDay)
    } else if (todayData.weather[0].main === "Rain" && currentHour > 16 || currentHour < 6) {
      setBackground(backgroundData.rain.rainNight)
    } else if (todayData.weather[0].main === "Snow" && currentHour > 6 && currentHour < 16) {
      setBackground(backgroundData.snow.snowDay)
    } else if (todayData.weather[0].main === "Snow" && currentHour > 16 || currentHour < 6) {
      setBackground(backgroundData.snow.snowNight)
    } else if (todayData.weather[0].main === "Thunderstorm" && currentHour > 6 && currentHour < 16) {
      setBackground(backgroundData.storm.stormDay)
    } else if (todayData.weather[0].main === "Thunderstorm" && currentHour > 16 || currentHour < 6) {
      setBackground(backgroundData.storm.stormNight)
    } else {
      setBackground(backgroundData.cloudy.cloudDay)
    }
  }
  
  return (
    <Routes>
      <Route path="/" element={<Main getLocation={getLocation} setCityData={setCityData} loading={loading} cityData={cityData}  />} /> 
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="report" element={<Report getLocation={getLocation} background={background} rating={rating} ratingLabel={ratingLabel} airData={airData} dailyData={dailyData} todayData={todayData} setCityData={setCityData} loading={loading} cityData={cityData} />} />
        <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
