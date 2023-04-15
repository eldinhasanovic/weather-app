import React from "react";
import "./Vreme.css";
export default function Vreme() {
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
  return <div className="date">{datumBuilder(new Date())}</div>;
}
