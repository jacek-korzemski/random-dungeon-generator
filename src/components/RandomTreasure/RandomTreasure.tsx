import { treasure } from "./../../assets/data/randomTreasures";
import { useState } from "react";
import Layout from "./../Layout/Layout";

const RandomTreasure = () => {
  const [t, setT] = useState<string | undefined>(undefined);
  const [color, setColor] = useState<string>("#000");
  const [color2, setColor2] = useState<string>("#000");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const generateTreasure = (level: number) => {
    setT(treasure[level][Math.floor(Math.random()*treasure[level].length)]);
    setColor(generateVisibleColor());
    setColor2(generateVisibleColor())
  }

  return <Layout>
    <div className="post">
  <h1> Random Treasure Generator </h1>
  <div style={{display: 'flex', justifyContent: 'center', gap: '10px', margin: '16px'}}>
  <button className="btn btn-secondary" onClick={() => setIsOpen(!isOpen)}>Info {isOpen ? '🔼' : '🔽' }</button>
  </div>
  {isOpen && <>  <p className="with-wrap">Choose your treasure level:</p>
    <ol style={{margin: '0'}}>
      <li><p>Trash and rubbish items, something to fill drawers, barrels and crates. Mostly - without value.</p></li>
      <li><p>Cheap, worth copper, but easy to sell items, materials, low quality prefabricates and stuff like that.</p></li>
      <li><p>Cheap, worth silver, but ready to sell items, things to fill your backback before returning to town.</p></li>
      <li><p>Semi-expensive, worth a few gold coins stuf to sell at town.</p></li>
      <li><p>Expensive, rare items. Worth gold. Real treasure.</p></li>
      <li><p>Unique items, antiques, rare artifact - magical items - only super valuable treasures </p></li>
    </ol></>
  }

  <div style={{display: 'flex', justifyContent: 'center', gap: '10px', margin: '16px;'}}>
  <button className="btn btn-primary" onClick={() => generateTreasure(0)}>1</button>
  <button className="btn btn-primary" onClick={() => generateTreasure(1)}>2</button> 
  <button className="btn btn-primary" onClick={() => generateTreasure(2)}>3</button>
  <button className="btn btn-primary" onClick={() => generateTreasure(3)}>4</button>
  <button className="btn btn-primary" onClick={() => generateTreasure(4)}>5</button>
  <button className="btn btn-primary" onClick={() => generateTreasure(5)}>6</button>
  </div>
  {t && <>
    <h4 style={{color: color, textAlign: 'center'}} className="with-wrap">Congratulations! Your treasure is:</h4>
    <h1 style={{color: color2, textAlign: 'center'}} className="with-wrap">{t}</h1>
  </>}
  </div>
 </Layout>
}

export default RandomTreasure;

function generateVisibleColor(): string {
  function getRandomColorComponent(): number {
      return Math.floor(Math.random() * 256);
  }

  function rgbToHex(r: number, g: number, b: number): string {
      return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
  }

  function luminance(r: number, g: number, b: number): number {
      const a = [r, g, b].map((v) => {
          v /= 255;
          return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });
      return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  let r: number, g: number, b: number, colorLuminance: number;

  do {
      r = getRandomColorComponent();
      g = getRandomColorComponent();
      b = getRandomColorComponent();
      colorLuminance = luminance(r, g, b);
  } while (colorLuminance < 0.5);

  return rgbToHex(r, g, b);
}