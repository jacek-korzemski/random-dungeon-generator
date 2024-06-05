import { useState } from 'react';
import {peopleActions, people, itemActions, items, where,  why} from '../assets/data/quests';

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

  return <>
    <button onClick={() => generateRandomPeopleQuest()}>Quest with people</button> | <button onClick={() => generateRandomItemQuest()}>Quest with item</button>
    <hr/>
    {quest && <>The stranger asks you to: <strong className="green">{quest.what} - {quest.withWhat} - {quest.where} - {quest.why}</strong></>}
  </>
}

export default RandomQuestGenerator;