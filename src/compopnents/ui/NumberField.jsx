import React from "react";

const NumberField = ({ value, onChange, name }) => {
  const style = {
    padding: "0.25rem",
    borderRadius: "0.1rem",
    border: "1px solid gray",
    background: "#fff",
    outline: "none",
    width: "100%",
  };
  return (
    <input
      style={style}
      type="number"
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export default NumberField;
