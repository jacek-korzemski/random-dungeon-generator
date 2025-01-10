import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './c/Home.tsx';
import DungeonGenerator from './c/DungeonGenerator.tsx';
import RandomRoomGenerator from './c/RandomRoomGenerator.tsx';
import RandomRoadEncounterGenerator from './c/RandomRoadEncounterGenerator.tsx';
import RandomDungeonEncounterGenerator from './c/RandomDungeonEncounterGenerator.tsx';
import RandomQuestGenerator from './c/RandomQuestGenerator.tsx';
import RandomTreasure from './c/RandomTreasure.tsx';

const root = document.getElementById("root");

if (!root) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(root).render(
  <BrowserRouter basename="/tools/random-generators">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dungeon-generator" element={<DungeonGenerator />} />
      <Route path="/random-room-generator" element={<RandomRoomGenerator />} />
      <Route path="/random-road-event-generator" element={<RandomRoadEncounterGenerator />} />
      <Route path="/random-dungeon-encounter-generator" element={<RandomDungeonEncounterGenerator />} />
      <Route path="/random-quest-generator" element={<RandomQuestGenerator />} />
      <Route path="/random-treasure-generator" element={<RandomTreasure />} />
    </Routes>
  </BrowserRouter>
);