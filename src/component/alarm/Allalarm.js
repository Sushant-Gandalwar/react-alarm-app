import React from "react";
import { timeRemaing, getItem } from "../../function";
import Dalarm from "./Dalarm";
import "./alarm.css";
export default function Allalarm(props) {
  const all = getItem(props.viewState);
  return (
    <>
      <div class="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Title</th>
              {props.viewState === "active" ? (
                <th scope="col">Remaing Time</th>
              ) : (
                <></>
              )}
              <th scope="col">Repeat</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {all.map((dad, index) => {
              const attribute = {
                sno: `${index + 1}`,
                name: `${dad.name}`,
                time: `${dad.time}`,
                repeat: `${dad.repeat}`,
                rtime: timeRemaing(props.currentTime, dad.time)
              };
              return (
                <Dalarm
                  {...attribute}
                  viewState={props.viewState}
                  viewStateChanger={props.viewStateChanger}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
