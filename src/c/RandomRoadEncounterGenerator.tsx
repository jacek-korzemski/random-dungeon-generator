import { useState } from "react";
import { rre } from "../assets/data/randomRoadEncounters";

const RandomRoadEncounterGenerator = () => {
  const [number, setNumber] = useState<number>(5);
  const [events, setEvents] = useState<string[]>([]);

  const randomEncounters = () => {
    return Array.from({ length: number }).map(() => {
      const randomIndex = Math.floor(Math.random() * rre.length);
      return rre[randomIndex];
  })}

  const handleGenerate = () => {
    setEvents(randomEncounters());
  };

  return (
    <>
      <h1>Random Dungeon Events</h1>
      <hr />
      <button onClick={() => { setNumber(number + 1); }}>+</button>
      <button onClick={handleGenerate}>Generate {number}</button>
      <button onClick={() => { setNumber(number - 1); }}>-</button>
      <hr />
      {events.length > 0 && (
        <>
          {events.map((event, index) => (
            <div key={index}>
              {index + 1} : {event}
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default RandomRoadEncounterGenerator;