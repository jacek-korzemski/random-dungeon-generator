import DungeonGenerator from "./c/DungeonGenerator";
import { useState } from "react";
import RandomRoomGenerator from "./c/RandomRoomGenerator";
import RandomRoadEncounterGenerator from "./c/RandomRoadEncounterGenerator";

function App() {
  const [mode, setMode] = useState<string>('ascii');

  return <div className="container"><div className="terminal">
      <div className="switch">
        <button onClick={() => setMode('ascii')}>ASCII Dungeon</button>
        <button onClick={() => setMode('desc')}>Descriptive</button>
        <button onClick={() => setMode('road')}>Road generator</button>
        <hr/>
      </div>
      {mode === "ascii" && <DungeonGenerator />}
      {mode === "desc" && <RandomRoomGenerator />}
      {mode === "road" && <RandomRoadEncounterGenerator />}
    </div>
  </div>;
}

export default App
