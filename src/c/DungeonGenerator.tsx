import React, { useState } from "react";
import Layout from "./Layout";
import { Room } from "./RandomRoomGenerator";

interface Room {
  x: number;
  y: number;
  width: number;
  height: number;
}

const DungeonGenerator: React.FC = () => {
  const dungeonWidth = 70;
  const dungeonHeight = 25;
  const [roomMaxSize, setRoomMaxSize] = useState(6);
  const [roomMinSize, setRoomMinSize] = useState(3);
  const [numberOfRooms, setNumberOfRooms] = useState(6);

  const initialDungeon: string[][] = Array.from({ length: dungeonHeight }, () =>
    Array.from({ length: dungeonWidth }, () => ".")
  );

  const [dungeon, setDungeon] = useState<string[][]>(initialDungeon);

  const reset = () => {
    setDungeon(initialDungeon);
  };

  const generateDungeon = () => {
    const rooms: Room[] = [];
    const newDungeon: string[][] = Array.from({ length: dungeonHeight }, () =>
      Array.from({ length: dungeonWidth }, () => ".")
    );
  
    let attempts = 0;
  
    while (rooms.length < numberOfRooms && attempts < numberOfRooms * 10) {
      const width = Math.floor(
        Math.random() * (roomMaxSize - roomMinSize + 1)
      ) + roomMinSize;
      const height = Math.floor(
        Math.random() * (roomMaxSize - roomMinSize + 1)
      ) + roomMinSize;
      const x = Math.floor(Math.random() * (dungeonWidth - width - 3)) + 1;
      const y = Math.floor(Math.random() * (dungeonHeight - height - 3)) + 1;
  
      if (isRoomValidWithBuffer(x, y, width, height, rooms)) {
        const newRoom = { x, y, width, height };
        rooms.push(newRoom);
        // Add the room to the dungeon
        for (let i = y; i < y + height; i++) {
          for (let j = x; j < x + width; j++) {
            newDungeon[i][j] = "#";
          }
        }
        // Label the room
        const labelX = x + Math.floor(width / 2);
        const labelY = y + Math.floor(height / 2);
        newDungeon[labelY][labelX] = `${rooms.length}`;
      }
  
      attempts++;
    }
  
    // Connect rooms with corridors
    for (let i = 0; i < rooms.length - 1; i++) {
      const room1 = rooms[i];
      const room2 = rooms[i + 1];
  
      const x1 = room1.x + Math.floor(room1.width / 2);
      const y1 = room1.y + Math.floor(room1.height / 2);
      const x2 = room2.x + Math.floor(room2.width / 2);
      const y2 = room2.y + Math.floor(room2.height / 2);
  
      if (Math.random() < 0.5) {
        // Horizontal first, then vertical
        createHorizontalCorridor(newDungeon, x1, x2, y1);
        createVerticalCorridor(newDungeon, y1, y2, x2);
      } else {
        // Vertical first, then horizontal
        createVerticalCorridor(newDungeon, y1, y2, x1);
        createHorizontalCorridor(newDungeon, x1, x2, y2);
      }
    }
  
    setDungeon(newDungeon);
  };
  
  const isRoomValidWithBuffer = (
    x: number,
    y: number,
    width: number,
    height: number,
    rooms: Room[]
  ) => {
    const buffer = 1; // Add a buffer space around the room
    for (const room of rooms) {
      if (
        x < room.x + room.width + buffer &&
        x + width + buffer > room.x &&
        y < room.y + room.height + buffer &&
        y + height + buffer > room.y
      ) {
        return false; // Room overlaps or is too close
      }
    }
    return true;
  };
  
  const createHorizontalCorridor = (
    dungeon: string[][],
    x1: number,
    x2: number,
    y: number
  ) => {
    for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
      if (dungeon[y][x] === ".") {
        dungeon[y][x] = "#";
      }
    }
  };
  
  const createVerticalCorridor = (
    dungeon: string[][],
    y1: number,
    y2: number,
    x: number
  ) => {
    for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
      if (dungeon[y][x] === ".") {
        dungeon[y][x] = "#";
      }
    }
  }; 

  const renderDungeon = () =>
    dungeon.map((row, rowIndex) => (
      <div key={rowIndex}>
        {row.map((cell, cellIndex) => (
          <span key={cellIndex}>{cell}</span>
        ))}
      </div>
    ));

  return (
    <Layout>
      <h1>ASCII Dungeon Generator</h1>
      <div>
        <label>
          Max Room Size:
          <input
            type="number"
            value={roomMaxSize}
            onChange={(e) => setRoomMaxSize(Number(e.target.value))}
          />
        </label>
        <label>
          Min Room Size:
          <input
            type="number"
            value={roomMinSize}
            onChange={(e) => setRoomMinSize(Number(e.target.value))}
          />
        </label>
        <label>
          Number of Rooms:
          <input
            type="number"
            value={numberOfRooms}
            onChange={(e) => setNumberOfRooms(Number(e.target.value))}
          />
        </label>
        <button onClick={generateDungeon}>Generate Dungeon</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div className="terminal" style={{marginBottom: '64px'}}>{renderDungeon()}</div>
    </Layout>
  );
};

export default DungeonGenerator;
