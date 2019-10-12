import React, { Component, useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

import SmurfContext from '../contexts';

import Smurfs from './Smurfs';
import Form from './Form';



const App = () => {

  const [smurfs, setSmurfs] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
      setSmurfs(res.data)
      })
  }, [])

  

    return (
      <div className="App">
        <SmurfContext.Provider value={{smurfs}}>
            <Form />
            <Smurfs />
        </SmurfContext.Provider>
      </div>
    );
}

export default App;
