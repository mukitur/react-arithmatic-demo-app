/**
 * DONE: Handle user input fields
 * DONE: Handle operations
 * DONE: Handle a list of histories
 * DONE: Render history list
 * DONE: Restore the history
 */

import { useState } from "react";
import HistorySection from "./compopnents/history/HistorySection";
import InputSection from "./compopnents/inputs/InputSection";
import OperationSection from "./compopnents/operations/OperationSection";

function* generateId() {
  let id = 0;

  while (true) {
    yield id++;
  }
}

const getId = generateId();

const InitialInputState = {
  a: 0,
  b: 0,
};

const App = () => {
  const [inputState, setInputState] = useState({ ...InitialInputState });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [restoredHistory, setRestoredHistory] = useState(null);

  const handleInputFields = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleClearOps = () => {
    setInputState({ ...InitialInputState });
    setResult(0);
  };

  const handleArithmeticOps = (operation) => {
    if (!inputState.a || !inputState.b) {
      alert("Invalid Input, please enter a valid number");
      return;
    }

    const f = new Function(
      "operation",
      `
		  return ${inputState.a} ${operation} ${inputState.b}
		`
    );
    const result = f(operation).toFixed(2);
    setResult(result);
    // setResult(eval(`${inputState.a} ${operation} ${inputState.b}`));

    const historyItem = {
      id: getId.next().value,
      inputs: { ...inputState },
      operation,
      result,
      date: new Date(),
    };
    setHistories([historyItem, ...histories]);
  };

  const handleRestoreBtn = (historyItem) => {
    setInputState({ ...historyItem.inputs });
    setResult(historyItem.result);
    setRestoredHistory(historyItem.id);
  };

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h2 style={{ color: "#086fc9" }}>RESULT: {result}</h2>
      <InputSection inputs={inputState} handleInputFields={handleInputFields} />
      <OperationSection
        handleArithmeticOps={handleArithmeticOps}
        handleClearOps={handleClearOps}
      />
      <HistorySection
        histories={histories}
        restoredHistory={restoredHistory}
        handleRestoreBtn={handleRestoreBtn}
      />
    </div>
  );
};

export default App;

/* 
  // const handleFieldA = (e) => {
  // 	setInputState({
  // 		...inputState,
  // 		a: parseInt(e.target.value),
  // 	});
  // };

  // const handleFieldB = (e) => {
  // 	setInputState({
  // 		...inputState,
  // 		b: parseInt(e.target.value),
  // 	});
  // };

  // const handleInputFields = (key, value) => {
  //   setInputState({
  //     ...inputState,
  //     [key]: value
  //   })
  // };

  // const handleInputFields = (inp) => {
  // 	setInputState({
  // 		...inputState, // previous state
  // 		...inp, // new state
  // 	});
  // };\
*/
