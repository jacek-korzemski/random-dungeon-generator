import { csvToTableData } from "../../helpers/csv-to-table-data.helper"
import Layout from "../Layout/Layout"
import cards from "../../assets/tables/dungeon-cards.csv?raw"
import Table from "../Table/Table";

const DungeonCards = () => {
  const parsedCards = csvToTableData(cards, ';');
  return <Layout>
    <h1 style={{textAlign: 'center'}}>Generate dungeon with cards!</h1>
    <pre className={"terminal"} style={{width: "fit-content", margin: "0 auto 16px auto"}}>
Each # is a card.<br/>
Feel free to make<br/>
random layout. It's<br/>
a little like<br/>
Zelda-like dungeon!<br/>
.....................<br/>
..........#..........<br/>
..........#..........<br/>
.........###.........<br/>
.........#.#.........<br/>
.......##..#.........<br/>
.......#...##........<br/>
.......#....#........<br/>
.......######........<br/>
..........#..........<br/>
.....................<br/>
    </pre>
    <Table {...parsedCards} />
  </Layout>
}

export default DungeonCards;