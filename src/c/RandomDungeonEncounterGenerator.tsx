import { useEffect, useState } from "react";
import { rde } from "../assets/data/randomDungeonEncounteres";
import Layout from "./Layout";

const RandomDungeonEncounterGenerator = () => {
  const [number, setNumber] = useState<number>(5);
  const [events, setEvents] = useState<string[]>([]);

  const randomEncounters = () => {
    return Array.from({ length: number }).map(() => {
      const randomIndex = Math.floor(Math.random() * rde.length);
      return rde[randomIndex];
  })}

  const handleGenerate = () => {
    setEvents(randomEncounters());
  };

  useEffect(() => {
    handleGenerate();
  }, []);

  return (
    <Layout>
      <div className="post">
      <h1>Random Dungeon Events</h1>
      <div style={{display: 'flex', gap: '4px'}}>
      <button className="btn brn-primary" onClick={() => { setNumber(number + 1); }}>+</button>
      <button className="btn brn-primary" onClick={handleGenerate}>Generate {number}</button>
      <button className="btn brn-primary" onClick={() => { setNumber(number - 1); }}>-</button>
      </div>
      <div style={{textAlign: 'left', width: '100%'}}>
      {events.length > 0 && (
        <>
          {events.map((event, index) => (
            <p key={index}>
              {index + 1} : {event}
            </p>
          ))}
        </>
      )}
      </div>
      </div>
    </Layout>
  );
};

export default RandomDungeonEncounterGenerator;
