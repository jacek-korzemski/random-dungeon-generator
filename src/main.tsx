import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './components/Home/Home.tsx';
import DungeonGenerator from './components/DungeonGenerator/DungeonGenerator.tsx';
import RandomRoomGenerator from './components/RandomRoomGenerator/RandomRoomGenerator.tsx';
import RandomRoadEncounterGenerator from './components/RandomRoadEncounterGenerator/RandomRoadEncounterGenerator.tsx';
import RandomDungeonEncounterGenerator from './components/RandomDungeonEncounterGenerator/RandomDungeonEncounterGenerator.tsx';
import RandomQuestGenerator from './components/RandomQuestGenerator/RandomQuestGenerator.tsx';
import RandomTreasure from './components/RandomTreasure/RandomTreasure.tsx';
import RandomTables from './components/RandomTables/RandomTables.tsx';
import WorldGenerator from './components/WorldGenerator/WorldGenerator.tsx';

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
      <Route path="/random-tables" element={<RandomTables />} />
      <Route path="/world-generator" element={<WorldGenerator />} />
    </Routes>
  </BrowserRouter>
);