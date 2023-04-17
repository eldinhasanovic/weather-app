import "./App.css";
import React, { useState } from "react";
import Vreme from "./assets/Vreme/Vreme";

const api = {
  key: "215505f22417428b0f1b65c944438740",
  base: "https://home.openweathermap.org/data/2.5/",
};
function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`).then(
        (res) =>
          res.json().then((result) => {
            setWeather(result);
            setQuery("");
            console.log(weather);
          })
      );
    }
  };
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <div className="location-box">
          <div className="location">
            {/* {weather.name}, {weather.sys.country}{" "} */}
          </div>
          <Vreme />
        </div>
        <div className="weather-box">
          <div className="temperatura">15°C</div>
          <div className="prognoza">Suncano</div>
        </div>
      </main>
    </div>
  );
}

export default App;
