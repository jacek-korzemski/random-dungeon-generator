import { items, furniture } from "../assets/data/content";
import { tunels } from "../assets/data/tunels";
import { insides } from "../assets/data/insides";
import { rooms } from "../assets/data/rooms";
import { useEffect, useState } from "react";

const RandomRoomGenerator = () => {
  const [roomData, setRoomData] = useState<undefined | {tunel: string, room: string, insides: string, furniture: string, items: string}> (undefined);

  const generateRoom = () => {
    setRoomData({
      tunel: tunels[Math.floor(Math.random()*tunels.length)],
      room: rooms[Math.floor(Math.random()*rooms.length)],
      insides: insides[Math.floor(Math.random()*insides.length)],
      furniture: furniture[Math.floor(Math.random()*furniture.length)],
      items: items[Math.floor(Math.random()*items.length)],
    })
  }

  useEffect(() => {
    generateRoom();
  }, [])

  const Room = () => {
    return <>
      You ware wandering through <b>{roomData?.tunel}</b><br/>
      which leads you into <b>{roomData?.room}</b>.<br/>
      Inside the room, you can see <b>{roomData?.insides}</b>.<br/>
      You can find here <b>{roomData?.furniture}</b>,<br/>
      and you can find <b>{roomData?.items}</b> after searching it.<br/>
    </>
  }

  return <div className="terminal">
    <button onClick={generateRoom}>New room</button>
    <hr/>
    <Room />
  </div> 
}

export default RandomRoomGenerator