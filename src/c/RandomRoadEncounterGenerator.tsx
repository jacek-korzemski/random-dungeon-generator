import { useState } from "react";
import { rre } from "../assets/data/randomRoadEncounters";

const RandomRoadEncounterGenerator = () => {
  const [number, setNumber] = useState<number>(5);
  const [show, setShow] = useState<boolean>(false);

  const randomEncounter = () => {
    const randomIndex = Math.floor(Math.random() * rre.length);
    return rre[randomIndex];
  }

  return <>
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

export default RandomRoadEncounterGenerator;