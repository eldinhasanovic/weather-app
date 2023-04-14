import "./App.css";
import React from "react";

const api = {
  key: "215505f22417428b0f1b65c944438740",
  base: "https://home.openweathermap.org/data/2.5/",
};
function App() {
  const datumBuilder = (d) => {
    let meseci = [
      "Januar",
      "Februar",
      "Mart",
      "April",
      "Maj",
      "Jun",
      "Jul",
      "Avgust",
      "Septembar",
      "Oktobar",
      "Novembar",
      "Decembar",
    ];
    let dani = [
      "Ponedeljak",
      "Utorak",
      "Sreda",
      "Cetvrtak",
      "Petak",
      "Subota",
      "Nedelja",
    ];
    let dan = dani[d.getDay()];
    let datum = d.getDate();
    let mesec = meseci[d.getMonth()];
    let godina = d.getFullYear();
    return `${dan} ${datum} ${mesec} ${godina}`;
  };
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className="location-box">
          <div className="location">Novi Pazar, Serbia</div>
          <div className="date">{datumBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temperatura">15*</div>
          <div className="prognoza">Suncano</div>
        </div>
      </main>
    </div>
  );
}

export default App;
