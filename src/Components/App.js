import React from 'react';
import Data from "./Data";
import {Prop, Header} from "./Prop";
import './App.css';

function App() {
  let data = Data.map((items) => {
    return (
      <Prop
        item={items}
      />)
  })
  return (
    <>
      <Header img = "https://cdn-icons-png.flaticon.com/512/44/44386.png"/>
      {data}
    </>
  );
}

export default App;
