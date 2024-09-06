import { items, furniture } from "../assets/data/content";
import { tunels } from "../assets/data/tunels";
import { insides } from "../assets/data/insides";
import { rooms } from "../assets/data/rooms";
import { rde } from "../assets/data/randomDungeonEncounteres";
import { useEffect, useState } from "react";

export const Room = ({withCorridor = true}) => {
  const [roomData, setRoomData] = useState<undefined | {tunel: string, room: string, insides: string, furniture: string, items: string, encounter: string}> (undefined);

  const generateRoom = () => {
    setRoomData({
      tunel: tunels[Math.floor(Math.random()*tunels.length)],
      room: rooms[Math.floor(Math.random()*rooms.length)],
      insides: insides[Math.floor(Math.random()*insides.length)],
      furniture: furniture[Math.floor(Math.random()*furniture.length)],
      items: items[Math.floor(Math.random()*items.length)],
      encounter: rde[Math.floor(Math.random()*rde.length)]
    })
  }

  useEffect(() => {
    generateRoom();
  }, [])

  return <div>
    <span onClick={generateRoom} style={{cursor: 'pointer', color: 'orange'}} className="no-print">♻</span>{" "}
    {withCorridor && <>You were wandering through <b>{roomData?.tunel}</b>. </>}
    You enter into <b>{roomData?.room}</b>. 
    Inside the room, you can see <b>{roomData?.insides}</b>. 
    You can find here <b>{roomData?.furniture}</b>, 
    and after short investigetion you can find <b>{roomData?.items}</b>. 
    <br/>
    <strong> <b>Bonus encounter:</b> </strong>{roomData?.encounter} 
  </div>
}

const RandomRoomGenerator = () => {

  return <div className="terminal with-wrap">
    <Room />
    <hr/>
    <Room />
    <hr/>
    <Room />
    <hr/>
    <Room />
    <hr/>
    <Room />
  </div> 
}

export default RandomRoomGenerator