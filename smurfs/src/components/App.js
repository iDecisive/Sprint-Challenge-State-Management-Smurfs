import React, { useState } from "react";

import SmurfListContext from '../contexts/SmurfListContext';

import "./App.css";

let App = () => {

  const [smurfs, setSmurfs] = useState([

    {

      

    }

  ]);

    return (

      <SmurfListContext.Provider>

        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
        </div>

      </SmurfListContext.Provider>
    );
}

export default App;
