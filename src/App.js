import React, { useState } from 'react';
import './App.css';
import Person from './components/Person';

function App() {

  const [personState, setPersonState] = useState({
    constantData: [
      {name: "Cledimir C Silva"},
      {eyes: "Brown"},
      {sign: "Bull"}
    ]
    
  });

  const [variableDataState, setVariableDataState] = useState({
    variableData: [
      {weight: 75},
      {height: 173},
      {age: 47}
    ]
  });

  const switchVariableData = () => {
    setVariableDataState({
      variableData: [
        {weight: 74},
        {height: 174},
        {age: 46}
      ]
    });
  };

  return (
    <div className="App">
     <button onClick={switchVariableData}>Change variable data</button>
      <Person 
        name={personState.constantData[0].name}
        eyes={personState.constantData[1].eyes}
        sign={personState.constantData[2].sign}
        weight={variableDataState.variableData[0].weight}
        height={variableDataState.variableData[1].height}
        age={variableDataState.variableData[2].age}
      />
    </div>
  );
}

export default App;
