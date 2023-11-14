import React from "react";
import Compteur from "./components/Compteur";
import Variables from "./components/Variables";

export default function App() {
  const age = 20;
  const joker = "JOKA";
  const nom = "Ange";
  return (
    <>
      <div className="invisible">
        <Variables nom={joker} age={age} />
      </div>
      <div>
        <Compteur />
        <Compteur />
      </div>
    </>
  );
}
