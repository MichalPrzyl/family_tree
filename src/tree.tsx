import React from 'react';
import { Context } from './App';
import Person from './person';
import './style.css'
import mockPeopleList from './mock-data';

const Tree = () => {

  const context = React.useContext(Context);

  const firstFloor = mockPeopleList.filter(el => el.parent == null)
  const secondFloor = mockPeopleList.filter(el => el.parent != null)
  let outputList = []

  let xCounter = 0;
  let yCounter = 0;

  let xOffset = 350;
  let yOffset = 150;

  for (let i = 0; i < firstFloor.length; i++) {
    yCounter = 0;
    const id = firstFloor[i].id;
    const fData = {
      id: firstFloor[i].id,
      firstName: firstFloor[i].firstName,
      lastName: firstFloor[i].lastName,
      birthDate: firstFloor[i].birthDate,
      deathDate: firstFloor[i].deathDate,
      position: { x: xCounter * xOffset, y: yCounter * yOffset }
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
        position: { x: xCounter * xOffset, y: yCounter * yOffset }
      }
      outputList.push(data)
      xCounter++;
    }
  }

  return (
    <>
      {console.log(outputList)}
      {outputList.map(el =>
      (<Person
        key={el.id}
        firstName={el.firstName}
        id={el.id}
        lastName={el.lastName}
        birthDate={el.birthDate}
        deathDate={el.deathDate}
        position={el.position}
      />)
      )}
      {/* {context.peopleList.map((el: any) => */}
      {/* {firstFloor.map((el: any) =>
        <Person
          key={el.id}
          firstName={el.firstName}
          lastName={el.lastName}
          birthDate={el.birthDate}
          deathDate={el.deathDate}
          style={{top: '100px'}}
          />)}

      {secondFloor.map((el: any) =>
        <Person
          key={el.id}
          firstName={el.firstName}
          lastName={el.lastName}
          birthDate={el.birthDate}
          deathDate={el.deathDate}
          style={{top: '250px'}}
        />)} */}

    </>
  )
}

export default Tree;