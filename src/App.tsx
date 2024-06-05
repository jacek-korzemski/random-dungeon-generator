import DungeonGenerator from "./c/DungeonGenerator";
import { useState } from "react";
import RandomRoomGenerator from "./c/RandomRoomGenerator";
import RandomRoadEncounterGenerator from "./c/RandomRoadEncounterGenerator";
import RandomQuestGenerator from "./c/RandomQuestGenerator";

function App() {
  const [mode, setMode] = useState<string>('ascii');

  return <div className="container"><div className="terminal">
      <div className="switch">
        <button onClick={() => setMode('ascii')}>ASCII Dungeon</button>
        <button onClick={() => setMode('desc')}>Rooms</button>
        <button onClick={() => setMode('road')}>Road events</button>
        <button onClick={() => setMode('quest')}>Quests</button>
        <hr/>
      </div>
      {mode === "ascii" && <DungeonGenerator />}
      {mode === "desc" && <RandomRoomGenerator />}
      {mode === "road" && <RandomRoadEncounterGenerator />}
      {mode === "quest" && <RandomQuestGenerator />}
    </div>
  </div>;
}

export default App
