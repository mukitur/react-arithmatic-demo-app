import React from "react";
import PropTypes from "prop-types";
import HistoryItem from "./HistoryItem";

const HistorySection = ({ histories, restoredHistory, handleRestoreBtn }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "0.5rem 1rem",
        backgroundColor: "#f8f8f8",
        borderRadius: "0.10rem",
        marginTop: "25px",
      }}
    >
      <h4>History</h4>
      {histories.length === 0 ? (
        <p>
          <small>There is no history</small>
        </p>
      ) : (
        <ul>
          {histories.map((historyItem) => (
            <HistoryItem
              key={historyItem.id}
              disabled={restoredHistory === historyItem.id}
              historyItem={historyItem}
              handleRestoreBtn={handleRestoreBtn}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

HistoryItem.propTypes = {
  histories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      inputs: PropTypes.shape({
        a: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
      }).isRequired,
      operation: PropTypes.string.isRequired,
      result: PropTypes.number.isRequired,
      date: PropTypes.object.isRequired,
    })
  ),
  restoredHistory: PropTypes.number.isRequired,
  handleRestoreBtn: PropTypes.func.isRequired,
};

export default HistorySection;
