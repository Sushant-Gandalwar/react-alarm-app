import React from "react";
import { setItem, getItem, toTitleCase } from "../../function";
const deleteAlarm = (props) => {
  const alarmSet = getItem(props.viewState);
  alarmSet.splice(props.sno - 1, 1);
  setItem(props.viewState, alarmSet);
  props.viewStateChanger(props.viewState);
};
function Dalarm(props) {
  let cl = "";
  if (props.viewState === "active") {
    cl = "table-bb-active";
  }
  if (props.viewState === "success") {
    cl = "table-bb-success";
  }
  if (props.viewState === "missed") {
    cl = "table-bb-danger";
  }
  return (
    <>
      <tr className={cl}>
        <th scope="row">{props.sno}</th>
        <td>{toTitleCase(props.name)}</td>
        <td className="digital">{props.time}</td>
        {props.viewState === "active" ? <td>{props.rtime}</td> : <></>}
        <td>{props.repeat}</td>
        <td className="dAlarm" onClick={() => deleteAlarm(props)}>
          Delete
        </td>
      </tr>
    </>
  );
}
export default Dalarm;
