import Router from './src/router';
import React, {useEffect} from 'react';
import DatabaseInit from "./database/Databaseinit";


export default function App() {
  
  useEffect(() => {
    new DatabaseInit();
  },[]);    

  return (
    <>
      <Router/>
    </>
  );
}
