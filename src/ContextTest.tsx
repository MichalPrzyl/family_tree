import React from 'react';

export const UserContext = React.createContext<number>(0 as number);

export default function TestApp() {
  return (
    <UserContext.Provider value={69}>
      <User />
    </UserContext.Provider>
  )
}

function User() {
  const value = React.useContext(UserContext);  
    
  return <h1>{value}</h1>;
}