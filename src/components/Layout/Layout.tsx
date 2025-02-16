import { ReactNode, useState } from "react";
import { Link } from "react-router";

const Layout = ({children}: {children: ReactNode}) => {
  const [isOpen, setIsOpen] = useState(false);

  return <div className="main">
    <div className="topbar">
    <h2 className="center">Hidden Tools for GameMaster</h2>
    <div id="menu-open" onClick={() => setIsOpen(!isOpen)}>⏬</div>
    <div className="main-menu">
      <ul id="menu-main-menu" className={isOpen ? "open" : ""}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/dungeon-generator"}>Dungeons</Link>
        </li>
        <li>
          <Link to={"/random-room-generator"}>Rooms</Link>
        </li>
        <li>
          <Link to={"/random-road-event-generator"}>Road events</Link>
        </li>
        <li>
          <Link to={"/random-dungeon-encounter-generator"}>Dungeon encounters</Link>
        </li>
        <li>
          <Link to={"/random-quest-generator"}>Quests</Link>
        </li>
        <li>
          <Link to={"/random-treasure-generator"}>Treasures</Link>
        </li>
        <li>
          <Link to={"/random-tables"}>Tables</Link>
        </li>
        <li>
          <Link to={"/world-generator"}>World Generator</Link>
        </li>
      </ul>
    </div>
    </div>
    <div className="hero" style={{background: "url('https://labiryntkostek.pl/wp-content/themes/wordpress-theme-boilerplate-master/assets/hero.png')", backgroundPosition: 'center', backgroundSize: "cover"}} >
    </div>
    <div className="container" style={{paddingTop: "32px"}}>{children}</div>
    </div>
}

export default Layout;