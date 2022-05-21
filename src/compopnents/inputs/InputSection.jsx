import React from "react";
import PropTypes from "prop-types";
import NumberField from "../ui/NumberField";

const InputSection = ({ inputs, handleInputFields }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "0.5rem 1rem",
        backgroundColor: "#efefef",
        borderRadius: "0.10rem",
      }}
    >
      <h3
        style={{
          fontFamily: "Arial",
          textAlign: "left",
          fontSize: "1.5rem",
          color: "#212121",
          margin: 0,
          marginBottom: "1rem",
        }}
      >
        Input Two Number
      </h3>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-between",
        }}
      >
        <NumberField
          type="number"
          value={inputs.a}
          onChange={handleInputFields}
          name="a"
        />
        <NumberField
          type="number"
          value={inputs.b}
          onChange={handleInputFields}
          name="b"
        />
      </div>
    </div>
  );
};

InputSection.propTypes = {
  inputs: PropTypes.shape({
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
  }).isRequired,
  handleInputFields: PropTypes.func.isRequired,
};

export default InputSection;
