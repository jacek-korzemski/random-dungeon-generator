import DungeonGenerator from "./c/DungeonGenerator";
import { useState } from "react";
import RandomRoomGenerator from "./c/RandomRoomGenerator";
import RandomRoadEncounterGenerator from "./c/RandomRoadEncounterGenerator";
import RandomQuestGenerator from "./c/RandomQuestGenerator";
import RandomDungeonEncounterGenerator from "./c/RandomDungeonEncounterGenerator";
import RandomTreasure from "./c/RandomTreasure";

function App() {
  const [mode, setMode] = useState<string>('ascii');

  return <div className="container"><div className="terminal">
      <div className="switch">
        <button onClick={() => setMode('ascii')}>Random ASCII Dungeon</button>
        <button onClick={() => setMode('desc')}>Random Rooms</button>
        <button onClick={() => setMode('road')}>Random Road events</button>
        <button onClick={() => setMode('dungeon')}>Random Dungeon events</button>
        <button onClick={() => setMode('quest')}>Random Quests</button>
        <button onClick={() => setMode('treasure')}>Random Treasure</button>
        <hr/>
      </div>
      {mode === "ascii" && <DungeonGenerator />}
      {mode === "desc" && <RandomRoomGenerator />}
      {mode === "road" && <RandomRoadEncounterGenerator />}
      {mode === "dungeon" && <RandomDungeonEncounterGenerator />}
      {mode === "quest" && <RandomQuestGenerator />}
      {mode === "treasure" && <RandomTreasure />}
    </div>
  </div>;
}

export default App
