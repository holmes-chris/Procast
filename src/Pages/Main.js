import React from 'react';
import Navbar from "../Components/Navbar.js";
import SearchRoundedIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';
import "../Main.css"


export default function Main({getLocation, loading, cityData, setCityData}) {
    return (
        <div className="main-container">
            <Navbar />
            <div className="main-content-container">
                <h1 className="hero-text">A REAL-TIME WEATHER APPLICATION USING THE OPENWEATHER API</h1>
                <h1 className="hero-text-lower">ENTER A CITY TO BEGIN</h1>
                <form onSubmit={getLocation}>
                    <div className="input-div">
                            <SearchRoundedIcon style={{ fill: "grey", fontSize: "30" }}/>
                        <input 
                            value={cityData.input} 
                            onChange={e => setCityData({...cityData, input: e.target.value})} 
                            id="input" 
                            placeholder={"Enter City"} 
                            type="text"
                         />
                    </div>
                </form>
            </div>
            {loading ? <div className="backdrop"><h1></h1><CircularProgress className="progress" size={100}/></div> : null} 
        </div>
  )
}
