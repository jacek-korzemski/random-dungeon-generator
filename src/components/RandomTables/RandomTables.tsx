import Layout from "./../Layout/Layout";
import Table from "./../Table/Table";
import randomTable from "../../assets/tables/random-table.csv?raw";
import randomWeaponTable from "../../assets/tables/random-weapon-table.csv?raw"
import wildMagic from "../../assets/tables/wild-magic.csv?raw"
import spellScrolls from "../../assets/tables/spells.csv?raw"
import events1 from "../../assets/tables/events-1.csv?raw"
import events2 from "../../assets/tables/events-2.csv?raw"
import treasures1 from "../../assets/tables/treasures.csv?raw"
import npc from "../../assets/tables/npc.csv?raw"
import { csvToTableData } from "./../../helpers/csv-to-table-data.helper";

const RandomTables = () => {
  const parsedRandomTable = csvToTableData(randomTable);
  const parsedRandomWeaponTable = csvToTableData(randomWeaponTable);
  const parsedWildMagic = csvToTableData(wildMagic);
  const parsedSpellScrolls = csvToTableData(spellScrolls, ";");
  const parsedEvents1 = csvToTableData(events1, ";");
  const parsedEvents2 = csvToTableData(events2, ";");
  const parsedTreasures1 = csvToTableData(treasures1, ";");
  const parsedNpc = csvToTableData(npc, ";");
    return (
        <Layout>
          <h2> Totally random table </h2>
            <Table
              {...parsedRandomTable}
            />
            <h2> Random weapon generator table </h2>
            <Table
              {...parsedRandomWeaponTable}
            />
            <h2>Wild Magic</h2>
            <Table
              {...parsedWildMagic}
            />
            <h2>Spell Scrolls</h2>
            <Table
              {...parsedSpellScrolls}
            />
            <br/>
            <h2>Random events 1</h2>
            <Table
              {...parsedEvents1}
            />
            <br/>
            <h2>Random messages 1</h2>
            <Table
              {...parsedEvents2}
            />
            <br/>
            <h2>Random treasures 1</h2>
            <Table
              {...parsedTreasures1}
            />
            <br/>
            <h2>Random NPCs</h2>
            <Table
              {...parsedNpc}
            />
            <br/>
        </Layout>
    );
};

export default RandomTables;