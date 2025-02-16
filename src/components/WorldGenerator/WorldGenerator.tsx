import Layout from "../Layout/Layout";
import { csvToTableData } from "../../helpers/csv-to-table-data.helper";
import step1_csv from "../../assets/data/world_generator/step_1_scale.csv?raw"
import step2_csv from "../../assets/data/world_generator/step_2_major_civ.csv?raw"
import step3_csv from "../../assets/data/world_generator/step_3_tech_level.csv?raw"
import step4_csv from "../../assets/data/world_generator/step_4_dominant_power.csv?raw"
import step5_csv from "../../assets/data/world_generator/step_5_major_struggle.csv?raw"
import step6_csv from "../../assets/data/world_generator/step_6_magic.csv?raw"
import step7_csv from "../../assets/data/world_generator/step_7_landmarks.csv?raw"
import step8_csv from "../../assets/data/world_generator/step_8_quirk.csv?raw";
import Table from "../Table/Table";

const WorldGenerator = () => {
  const step1 = csvToTableData(step1_csv, ';')
  const step2 = csvToTableData(step2_csv, ';')
  const step3 = csvToTableData(step3_csv, ';')
  const step4 = csvToTableData(step4_csv, ';')
  const step5 = csvToTableData(step5_csv, ';')
  const step6 = csvToTableData(step6_csv, ';')
  const step7 = csvToTableData(step7_csv, ';')
  const step8 = csvToTableData(step8_csv, ';')

  return <Layout>
    <h2> Step 1 </h2>
    <p>Generate the world type. </p>
    <Table {...step1} />
    <h2> Step 2 </h2>
    <p>Generate the major civilization. You can generate multiple one to add complexity. </p>
    <Table {...step2} />
    <h2> Step 3 </h2>
    <p>Pick random tech level of the world. </p>
    <Table {...step3} />
    <h2> Step 4 </h2>
    <p>Select dominant power in the world. </p>
    <Table {...step4} />
    <h2> Step 5 </h2>
    <p> Generate issues the world is struggling with. The more elements you pick, the more difficult life would be in the world. </p>
    <Table {...step5} />
    <h2> Step 6 </h2>
    <p> Select the way magic and supernatural powers works in the world. </p>
    <Table {...step6} />
    <h2> Step 7 </h2>
    <p> Main landmarks and wonders. Feel free to generate a few! </p>
    <Table {...step7} />
    <h2> Step 8 </h2>
    <p> Add some unique quirks if you need some. </p>
    <Table {...step8} />
  </Layout>
}

export default WorldGenerator;