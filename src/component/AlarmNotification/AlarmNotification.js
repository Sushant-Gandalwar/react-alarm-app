import React from "react";
import "./AlarmNotification.css";
import { coverScreen } from "../../function";
export default function AlarmNotification(props) {
  return (
    <div className="full-screen-center">
      <div className="alarm-notification">
        <div className="alarm-notification-text">{props.text}</div>
        <div
          className="alarm-notification-button"
          onClick={() => {
            props.alarmToNext("success", new Date().toTimeString().slice(0, 5));
            props.alarmnotificationState({
              show: false,
              text: props.alarmnotification.text
            });
            coverScreen(false);
          }}
        >
          Done
        </div>
      </div>
    </div>
  );
}
