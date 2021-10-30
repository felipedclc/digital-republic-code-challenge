import React, { useState } from "react";
import { calculateCanOfPaints } from "../utils/calculatePaintContainer";
import { calculatePaintAreaOfTheWall } from "../utils/calculateWallSize";

function PaintCalculator() {
  const [wallHeight, setWallHeight] = useState('');
  const [wallWidth, setWallWidth] = useState('');
  const [numberOfDoors, setNumberOfDoors] = useState('');
  const [numberOfWindows, setNumberOfWindows] = useState('');
  const [wallPaintArea, setWallPaintArea] = useState([]);
  const [totalPaintArea, setTotalPaintArea] = useState(0);
  const [numberOfCans, setNumberOfCans] = useState(null);

  const savePaintWallAreaOnClick = () => {
    const paintArea = calculatePaintAreaOfTheWall(
      wallHeight, wallWidth, numberOfDoors, numberOfWindows
    );

    if (paintArea.error) return alert(paintArea.error);
    if (wallPaintArea.length === 4) {
      return alert("Valores apenas para 4 paredes");
    };

    setWallPaintArea([...wallPaintArea, paintArea]);
    setWallHeight("");
    setWallWidth("");
    setNumberOfDoors("");
    setNumberOfWindows("");
  };

  const handleClickCalculateCans = () => {
    if (wallPaintArea.length < 4) {
      return alert("Informe valores para 4 paredes");
    };
    return calculateNumberOfCansOnClick();
  }

  const calculateNumberOfCansOnClick = () => {
    const total = wallPaintArea.reduce((prev, curr) => prev + curr, 0)
    setTotalPaintArea(total);
    setNumberOfCans(calculateCanOfPaints(total));
  };

  return (
    <main>
      <h1>DIGITAL REPUBLIC CODE CHALLENGE</h1>
      <form>
        <label>
          Altura da parede(m):
          <input
          type="text"
          value={ wallHeight }
          onChange={ ({target}) => setWallHeight(target.value) }
        />
        </label>
        <label>
          Comprimento da parede(m):
          <input
          type="text"
          value={ wallWidth }
          onChange={ ({target}) => setWallWidth(target.value) }
        />
        </label>
        <label>
          Número de portas:
          <input
          type="text"
          value={ numberOfDoors }
          onChange={ ({target}) => setNumberOfDoors(target.value) }
        />
        </label>
        <label>
          Número de janelas:
          <input
          type="text"
          value={ numberOfWindows }
          onChange={ ({target}) => setNumberOfWindows(target.value) }
        />
        </label>
        <button 
        type="button" 
        onClick={ savePaintWallAreaOnClick }>
          Salvar área da parede
        </button>
        <button 
        type="button" 
        onClick={ handleClickCalculateCans }>
          Calcular total de latas de tinta
        </button>
      </form>
      <section>
        <h3>{`Area total pintada : ${totalPaintArea} metros quadrados`}</h3>
        <h3>Latas de tinta para comprar :</h3>
        {numberOfCans === null ? 0 : 
        <ul>
          <li>{ `latas de 0.5 L = ${numberOfCans.can_0_5L}` }</li>
          <li>{ `latas de 2.5 L = ${numberOfCans.can_2_5L}` }</li>
          <li>{ `latas de 3.6 L = ${numberOfCans.can_3_6L}` }</li>
          <li>{ `latas de 18.0 L = ${numberOfCans.can_18L}` }</li>
        </ul>}
      </section>
    </main>
  );
};

export default PaintCalculator;
