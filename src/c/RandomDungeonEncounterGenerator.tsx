import { useState } from "react";
import { rre } from "../assets/data/randomRoadEncounters";

const RandomDungeonEncounterGenerator = () => {
  const [number, setNumber] = useState<number>(5);
  const [show, setShow] = useState<boolean>(false);

  const randomEncounter = () => {
    const randomIndex = Math.floor(Math.random() * rre.length);
    return rre[randomIndex];
  }

  return <>
  <h1>Randon Dungeon Events</h1>
  <hr/>
    <button onClick={() => {setNumber(number + 1); setShow(false)}}>+</button>
    <button onClick={() => setShow(true)}>Generate {number}</button>
    <button onClick={() => {setNumber(number - 1); setShow(false)}}>-</button>
    <hr/>
    {show && <>
      {Array.from({ length: number }).map((_, index) => (
        <div key={index}>
          {index + 1} : {randomEncounter()}
        </div>
      ))}
    </>}
  </>
}

export default RandomDungeonEncounterGenerator;