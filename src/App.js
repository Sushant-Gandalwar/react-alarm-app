import React, { useState } from "react";
import { coverScreen, AlaramTimeList, getItem, setItem } from "./function";
import ReactPlayer from "react-player";
import Allalarm from "./component/alarm/Allalarm";
import AddAlarm from "./component/AddAlarm/AddAlarm";
import AlarmNotification from "./component/AlarmNotification/AlarmNotification";
import ViewStateChange from "./component/ViewStateChange/ViewStateChange";
let timeNote = undefined;
let oneTimeBizz = undefined;
export default function App() {
  const [alarmnotification, alarmnotificationState] = useState({
    show: false,
    text: ""
  });
  const [viewState, viewStateChanger] = useState("active");
  const [isAlarmAdd, isAlarmAddState] = useState(false);
  const [currentTime, currentTimeChange] = useState(
    new Date().toTimeString().slice(0, 5)
  );
  const alarmToNext = (key = "success", time) => {
    const activeLi = getItem("active");
    const nextLi = getItem(key);
    const index = activeLi.findIndex((ele) => ele.time === time);
    const deleted = activeLi.splice(index, 1)[0];
    oneTimeBizz = deleted.time;
    if (deleted.repeat === "once") {
      setItem("active", activeLi);
    }
    nextLi[nextLi.length] = deleted;
    setItem(key, nextLi);
    viewStateChanger(viewState);
    timeNote = undefined;
  };

  setInterval(() => {
    const cTime = new Date().toTimeString().slice(0, 5);
    currentTimeChange(new Date().toTimeString().slice(0, 8));
    if (oneTimeBizz === cTime) {
      return 0;
    } else {
      oneTimeBizz = undefined;
    }
    if (timeNote === undefined && AlaramTimeList().includes(cTime)) {
      const text = getItem("active").filter((ac) => ac.time === cTime)[0].name;
      alarmnotificationState({
        show: true,
        text: text
      });
      isAlarmAddState(false);
      timeNote = cTime;
      coverScreen(true);
    } else if (timeNote !== undefined && !AlaramTimeList().includes(cTime)) {
      alarmnotificationState({
        show: false,
        text: ""
      });
      coverScreen(false);
      alarmToNext("missed", timeNote);
    }
  }, 1000);
  const AddAlarmClick = () => {
    isAlarmAddState(true);
    coverScreen(true);
  };

  return (
    <>
      <div hidden>
        <ReactPlayer
          url="alarm.mp3"
          playing={alarmnotification.show}
          volume={1}
          loop={true}
        />
      </div>
      <ViewStateChange view={viewState} viewStateChanger={viewStateChanger} />
      {alarmnotification.show ? (
        <AlarmNotification
          text={alarmnotification.text}
          alarmToNext={alarmToNext}
          alarmnotificationState={alarmnotificationState}
          alarmnotification={alarmnotification}
        />
      ) : (
        <></>
      )}
      <button className="add-alarm-button btn" onClick={AddAlarmClick}>
        +
      </button>
      {isAlarmAdd ? (
        <AddAlarm
          isAlarmAddState={isAlarmAddState}
          viewState={viewState}
          viewStateChanger={viewStateChanger}
        />
      ) : (
        <></>
      )}
      <Allalarm
        viewState={viewState}
        viewStateChanger={viewStateChanger}
        currentTime={currentTime}
      />
    </>
  );
}
