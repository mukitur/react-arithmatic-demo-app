import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../ui/Button";

const HistoryItem = ({ historyItem, disabled, handleRestoreBtn }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <li key={historyItem.id} style={{ borderBottom: "1px solid #a5a5ad" }}>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <p>
          Operation: {historyItem.inputs.a} {historyItem.operation}{" "}
          {historyItem.inputs.b}, Result: {historyItem.result}
        </p>
        <div>
          <Button text={show ? "Hide" : "Show"} onClick={handleToggle} />
        </div>
      </div>
      {show && (
        <>
          <small>
            {historyItem.date.toLocaleDateString()}{" "}
            {historyItem.date.toLocaleTimeString()}
          </small>
          <br />
          <br />
          <Button
            text="Restore"
            onClick={() => handleRestoreBtn(historyItem)}
            disabled={disabled}
          />
        </>
      )}
    </li>
  );
};

HistoryItem.propTypes = {
  historyItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    inputs: PropTypes.shape({
      a: PropTypes.number.isRequired,
      b: PropTypes.number.isRequired,
    }).isRequired,
    operation: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired,
  }),
  disabled: PropTypes.bool.isRequired,
  handleRestoreBtn: PropTypes.func.isRequired,
};

HistoryItem.defaultProps = {
  disabled: false,
};

export default HistoryItem;
