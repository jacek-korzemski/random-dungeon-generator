import { useEffect, useState } from 'react';
import {peopleActions, people, itemActions, items, where,  why} from './../../assets/data/quests';
import Layout from './../Layout/Layout';

function getRandomElement(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const RandomQuestGenerator = () => {
  const [quest, setQuest] = useState<{what: string, withWhat: string, where: string, why: string} | undefined>(undefined);

  const generateRandomPeopleQuest = () => {
    setQuest({
      what: getRandomElement(peopleActions),
      withWhat: getRandomElement(people),
      where: getRandomElement(where),
      why: getRandomElement(why)
    })  
  }

  const generateRandomItemQuest = () => {
    setQuest({
      what: getRandomElement(itemActions),
      withWhat: getRandomElement(items),
      where: getRandomElement(where),
      why: getRandomElement(why)
    })  
  }

  useEffect(() => {
    generateRandomPeopleQuest();
  }, []);

  return <Layout>
    <div className="post">
      <h1>Random Quest Generator</h1>
    <div style={{display: 'flex', gap: '10px', justifyContent: 'center', margin: '0 auto 16px auto'}}>
        <button className="btn brn-primary" onClick={() => generateRandomPeopleQuest()}>Quest with people</button>
        <button className="btn brn-primary" onClick={() => generateRandomItemQuest()}>Quest with item</button>
      </div>
    {quest && <p>The stranger asks you to: <b>{quest.what} - {quest.withWhat} - {quest.where} - {quest.why}</b></p>}
    </div>
  </Layout>
}

export default RandomQuestGenerator;