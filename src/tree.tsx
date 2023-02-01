import React, { useState, useRef, useEffect } from 'react';
import { Context } from './App';
import Person from './person';
import './style.css'
import mockPeopleList from './mock-data';
import { builtinModules } from 'module';

const Tree = () => {
  const [ needRefresh, setNeedRefresh ] = useState(false);
  const context = React.useContext(Context);

  const firstFloor = mockPeopleList.filter(el => el.parent == null)
  const secondFloor = mockPeopleList.filter(el => el.parent != null)
  let outputList: any[] = []
  let partnerList: any[] = []

  let xCounter = 0;
  let yCounter = 1;

  let xOffset = 350;
  let yOffset = 150;

  for (let i = 0; i < firstFloor.length; i++) {
    const checker = outputList.filter(el => el.id == firstFloor[i].id)
    if(checker.length > 0) continue;
    yCounter = 1;

    const id = firstFloor[i].id;
    const partner:any = mockPeopleList.filter(el => el.partner == id)
    const fData = {
      id: firstFloor[i].id,
      firstName: firstFloor[i].firstName,
      lastName: firstFloor[i].lastName,
      birthDate: firstFloor[i].birthDate,
      deathDate: firstFloor[i].deathDate,
      position: { x: xCounter * xOffset, y: yCounter * yOffset },
      color: "green"
    }
    if(partner[0]){
      const partnerData = {
        id: partner[0].id,
        firstName: partner[0].firstName,
        lastName: partner[0].lastName,
        birthDate: partner[0].birthDate,
        deathDate: partner[0].deathDate,
      position: { x: (xCounter * xOffset) + 160, y: yCounter * yOffset },
      color: "blue"
    }
    outputList.push(partnerData)
  }
    outputList.push(fData)
    yCounter++;

    // all of its children
    const nextFloor = mockPeopleList.filter(el => el.parent == id)
    for (let j = 0; j < nextFloor.length; j++) {
      const data = {
        id: nextFloor[j].id,
        firstName: nextFloor[j].firstName,
        lastName: nextFloor[j].lastName,
        birthDate: nextFloor[j].birthDate,
        deathDate: nextFloor[j].deathDate,
        position: { x: xCounter * xOffset, y: yCounter * yOffset },
        color: "red"
      }

      outputList.push(data)
      xCounter++;
    }
  }
  const canvasRef = useRef(null);

  const canvas = canvasRef.current;
  let ctx: any;
  if(canvas != null){
    ctx = (canvas as HTMLCanvasElement).getContext('2d');
    
  }
  useEffect(()=>{
    if(ctx){
      for(let i = 0; i < outputList.length; i++){
        ctx.fillStyle=outputList[i].color;
        ctx.fillRect(outputList[i].position.x, outputList[i].position.y, 50, 50);
        ctx.fillStyle="white";

        ctx.font = "12px serif";
        ctx.fillText(`${outputList[i].firstName || "brak"} ${outputList[i].lastName || "brak"}`, outputList[i].position.x-30,  outputList[i].position.y);
      }
     

    }
    setNeedRefresh(false)
  }, [needRefresh])
  
  const refreshTree = () =>{
    setNeedRefresh(true);
  }

  return (
    <>
      <button onClick={refreshTree}>Odśwież drzewo</button>

     <canvas ref={canvasRef} id="canvas" width="3600" height="1600"></canvas>
    </>
  )
}

export default Tree;