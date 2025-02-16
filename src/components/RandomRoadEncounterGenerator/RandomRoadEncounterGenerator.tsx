import { useEffect, useState } from "react";
import { rre } from "./../../assets/data/randomRoadEncounters";
import Layout from "./../Layout/Layout";

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

  useEffect(() => {
    handleGenerate();
  }, [])

  return (
    <Layout>
      <div className="post">
      <h1>Random Road Events</h1>
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
}

export default RandomRoadEncounterGenerator;