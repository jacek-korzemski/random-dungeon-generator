import React, { useState } from 'react';
import { Room } from './RandomRoomGenerator';

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
  const [numberOfRooms, setNumberOfRooms] = useState(3);

  const initialDungeon: string[][] = Array.from({ length: dungeonHeight }, () => Array.from({ length: dungeonWidth }, () => "."));

  const [dungeon, setDungeon] = useState<string[][]>(initialDungeon);
  const [rooms, setRooms] = useState<number>(0);

  const createRoom = (x: number, y: number, width: number, height: number) => {
    setRooms((prev) => prev + 1);
    const newDungeon = [...dungeon];
    for (let i = y; i < y + height; i++) {
      for (let j = x; j < x + width; j++) {
        newDungeon[i][j] = "#";
      }
    }
    setDungeon(newDungeon);
  };

  const createHorizontalCorridor = (x1: number, x2: number, y: number) => {
    const newDungeon = [...dungeon];
    for (let i = Math.min(x1, x2); i <= Math.max(x1, x2); i++) {
      if (newDungeon[y][i] === ".") {
        newDungeon[y][i] = "#";
      }
    }
    setDungeon(newDungeon);
  };
  
  const createVerticalCorridor = (y1: number, y2: number, x: number) => {
    const newDungeon = [...dungeon];
    for (let i = Math.min(y1, y2); i <= Math.max(y1, y2); i++) {
      if (newDungeon[i][x] === ".") {
        newDungeon[i][x] = "#";
      }
    }
    setDungeon(newDungeon);
  };

  const generateDungeonRooms = () => {
    let rooms: Room[] = [];
    let corridors: Room[] = [];
    let numRooms = 0;
    let roomNumber = 1;
    let newDungeon: string[][] = Array.from({ length: dungeonHeight }, () => Array.from({ length: dungeonWidth }, () => "."));
  
    while (numRooms < numberOfRooms) {
      let width = Math.floor(Math.random() * (roomMaxSize - roomMinSize + 1)) + roomMinSize;
      let height = Math.floor(Math.random() * (roomMaxSize - roomMinSize + 1)) + roomMinSize;
      let x = Math.floor(Math.random() * (dungeonWidth - width - 1)) + 1;
      let y = Math.floor(Math.random() * (dungeonHeight - height - 1)) + 1;
  
      let newRoom: Room = { x, y, width, height };
      let intersects = false;
      for (let room of rooms) {
        if (x < room.x + room.width &&
          x + width > room.x &&
          y < room.y + room.height &&
          y + height > room.y) {
          intersects = true;
          break;
        }
      }
  
      if (!intersects) {
        createRoom(x, y, width, height);
        rooms.push(newRoom);
        numRooms++;
      }
    }
  
    // Connect rooms with corridors
    for (let i = 0; i < rooms.length - 1; i++) {
      let room1 = rooms[i];
      let room2 = rooms[i + 1];
  
      let x1 = Math.floor(room1.x + room1.width / 2);
      let y1 = Math.floor(room1.y + room1.height / 2);
      let x2 = Math.floor(room2.x + room2.width / 2);
      let y2 = Math.floor(room2.y + room2.height / 2);
  
      if (Math.random() < 0.5) {
        createHorizontalCorridor(x1, x2, y1);
        createVerticalCorridor(y1, y2, x2);
        corridors.push({ x: x1, y: y1, width: x2 - x1 + 1, height: y2 - y1 + 1 });
      } else {
        createVerticalCorridor(y1, y2, x1);
        createHorizontalCorridor(x1, x2, y2);
        corridors.push({ x: x1, y: y1, width: x2 - x1 + 1, height: y2 - y1 + 1 });
      }
    }
  
    // Label rooms
    for (let room of rooms) {
      labelRoom(room, roomNumber.toString());
      roomNumber++;
    }
  
    // Copy the modified dungeon layout into newDungeon
    for (let i = 0; i < dungeonHeight; i++) {
      for (let j = 0; j < dungeonWidth; j++) {
        newDungeon[i][j] = dungeon[i][j];
      }
    }
  
    // Set the new dungeon state
    setDungeon(newDungeon);
  };
  
  const labelRoom = (room: Room, label: string) => {
    // Choose a random cell within the room
    const randomX = Math.floor(room.width / 2) + room.x;
    const randomY = Math.floor(room.height / 2) + room.y;
    
    // Label the random cell with the given label
    dungeon[randomY][randomX] = label;
  };

  const renderDungeon = () => {
    return dungeon.map((row, rowIndex) => (
      <div key={rowIndex}>
        {row.map((cell, cellIndex) => (
          <span key={cellIndex} className={![".", "#"].includes(cell) ? "green" : "none"}>{cell}</span>
        ))}
        <br />
      </div>
    ));
  };

  const reset = () => {
    setDungeon(initialDungeon);
    setRooms(0);
  }

  return (
    <div>
      <div className="no-print">
        <h1>ASCII Dungeon Generator (React)</h1>
        <div className="formLike">
          <div className="formGroup">
            <label htmlFor="maxSize">Max Room size</label>
            <input type="number" id="maxSize" value={roomMaxSize} onChange={(e) => {setRoomMaxSize(parseInt(e.target.value))}} />
          </div>
          <div className="formGroup">
            <label htmlFor="maxSize">Min room size</label>
            <input type="number" id="maxSize" value={roomMinSize} onChange={(e) => {setRoomMinSize(parseInt(e.target.value))}} />
          </div>
          <div className="formGroup">
            <label htmlFor="maxSize">Number of rooms</label>
            <input type="number" id="maxSize" value={numberOfRooms} onChange={(e) => {setNumberOfRooms(parseInt(e.target.value))}} />
          </div>
          <div className="formGroup">
          <button onClick={generateDungeonRooms}>Generate Dungeon</button>
        <button onClick={reset}>Reset</button>
          </div>
        </div>
      </div>
      <div className="terminal">
      <div className="dungeon">
        {renderDungeon()}
      </div>
      </div>
      <div className="terminal with-wrap">
      {[...Array(rooms)].map((_, index) => (
        <div key={index} style={{breakInside: 'avoid'}}><b className="green">{index + 1}: </b><Room withCorridor={false} /><br/><br/></div>
      ))}
      </div>
    </div>
  );
};

export default DungeonGenerator;