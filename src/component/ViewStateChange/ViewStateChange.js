import React from "react";
import "./ViewStateChange.css";
export default function ViewStateChange(props) {
  return (
    <div className="viewStateSwap">
      <div
        name="view-active"
        className={
          props.view === "active" ? "view-state  selected-state" : "view-state"
        }
        onClick={() => props.viewStateChanger("active")}
      >
        Active
      </div>
      <div
        name="view-success"
        className={
          props.view === "success" ? "view-state selected-state" : "view-state"
        }
        onClick={() => props.viewStateChanger("success")}
      >
        Success
      </div>
      <div
        name="view-missed"
        className={
          props.view === "missed" ? "view-state selected-state" : "view-state"
        }
        onClick={() => props.viewStateChanger("missed")}
      >
        Missed
      </div>
    </div>
  );
}
