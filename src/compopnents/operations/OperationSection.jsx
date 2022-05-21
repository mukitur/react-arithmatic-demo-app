import React from "react";
import PropTypes from "prop-types";
import Button from "../ui/Button";
import shortid from "shortid";

const OperationSection = ({ handleArithmeticOps, handleClearOps }) => {
  const operations = [
    {
      id: shortid.generate(),
      text: "+",
      onClick: () => handleArithmeticOps("+"),
    },
    {
      id: shortid.generate(),
      text: "-",
      onClick: () => handleArithmeticOps("-"),
    },
    {
      id: shortid.generate(),
      text: "*",
      onClick: () => handleArithmeticOps("*"),
    },
    {
      id: shortid.generate(),
      text: "/",
      onClick: () => handleArithmeticOps("/"),
    },
    {
      id: shortid.generate(),
      text: "%",
      onClick: () => handleArithmeticOps("%"),
    },
    {
      id: shortid.generate(),
      text: "Clear",
      onClick: handleClearOps,
    },
  ];
  return (
    <div>
      <p>Operations</p>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        {operations.map((ops) => (
          <Button key={ops.id} text={ops.text} onClick={ops.onClick} />
        ))}
      </div>
    </div>
  );
};
OperationSection.propTypes = {
  handleArithmeticOps: PropTypes.func.isRequired,
  handleClearOps: PropTypes.func.isRequired,
};

export default OperationSection;

/* 
ITS ALSO WORKS PERFECTLY

import React from "react";
import Button from "../ui/Button";

const OperationSection = ({ handleArithmeticOps, handleClearOps }) => {
  return (
    <div>
      <p>Operations</p>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Button text="+" onClick={() => handleArithmeticOps("+")} />
        <Button text="-" onClick={() => handleArithmeticOps("-")} />
        <Button text="*" onClick={() => handleArithmeticOps("*")} />
        <Button text="/" onClick={() => handleArithmeticOps("/")} />
        <Button text="%" onClick={() => handleArithmeticOps("%")} />
        
        <button onClick={handleClearOps}>Clear</button>
      </div>
    </div>
  );
};

export default OperationSection;

*/
