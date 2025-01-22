import Layout from "./Layout";
import Table from "./Table";
import randomTable from "./../assets/random-table.csv?raw"
import randomWeaponTable from "./../assets/random-weapon-table.csv?raw"
import { csvToTableData } from "./../h/csv-to-table-data.helper";

const RandomTables = () => {

  const parsedRandomTable = csvToTableData(randomTable);
  const parsedRandomWeaponTable = csvToTableData(randomWeaponTable);
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
            <br/>
        </Layout>
    );
};

export default RandomTables;