import { Link } from 'react-router';
import "../../assets/menu.css";
import Layout from './../Layout/Layout';

const Home = () => {
  const menuItems = [
    { path: '/dungeon-generator', label: 'Dungeon Generator' },
    { path: '/random-room-generator', label: 'Random Room Generator' },
    { path: '/random-road-event-generator', label: 'Random Road Event Generator' },
    { path: '/random-dungeon-encounter-generator', label: 'Random Dungeon Encounter Generator' },
    { path: '/random-quest-generator', label: 'Random Quest Generator' },
    { path: '/random-treasure-generator', label: 'Random Treasure Generator' },
    { path: '/random-tables', label: 'Random Tables' },
    { path: '/world-generator', label: 'World Generator' },
    { path: '/dungeon-cards', label: 'Dungeon Cards' },
  ];

  return (
    <Layout>
    <div className="tile-menu">
      {menuItems.map((item) => (
        <Link to={item.path} key={item.path} className="tile">
          {item.label}
        </Link>
      ))}
    </div>
    </Layout>
  );
};

export default Home;