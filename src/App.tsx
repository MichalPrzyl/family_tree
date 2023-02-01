import React, { createContext, useState } from 'react';
import AddPerson from './addPerson';
import Tree from './tree'
import IPerson from './interfaces/person';

import TestApp from './ContextTest';

// export const Context = React.createContext<{} >({ people: [] as IPerson[] });
export const Context = React.createContext({} as any);

function App() {

  const [peopleList, setPeopleList] = useState([])

  return (
    <>
      <Context.Provider
        value={{
          peopleList: peopleList,
          setPeopleList: setPeopleList
        }}
      >


        <AddPerson />
        <Tree />
        {/* <TestApp />  here i tested context*/}
      </Context.Provider>

    </>
  );
}

export default App;
