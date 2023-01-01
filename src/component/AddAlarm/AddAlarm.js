//oninvalid="this.setCustomValidity('Enter User Name Here')"
import { AlaramTimeList, coverScreen } from "../../function";
import "./AddAlarm.css";
export default function AddAlarm(props) {
  const myFunction = (event) => {
    event.preventDefault();
    const name = document.getElementById("add-alarm-name").value;
    const time = document.getElementById("add-alarm-time").value;
    const repeat = document.getElementById("add-alarm-repeat").value;
    const allAlarmLi = JSON.parse(localStorage.getItem("active"));
    if (AlaramTimeList().includes(time)) {
      alert("Alarm already Exist");
    } else {
      allAlarmLi[allAlarmLi.length] = {
        name: name,
        time: time,
        repeat: repeat
      };
      localStorage.setItem("active", JSON.stringify(allAlarmLi));
    }
    coverScreen(false);
    props.viewStateChanger(props.viewState);
    props.isAlarmAddState(false);
  };
  const cancelAddAlarm = () => {
    coverScreen(false);
    props.isAlarmAddState(false);
  };
  return (
    <div className="full-screen-center vertical-center">
      <form className="add-element pop-up" onSubmit={myFunction}>
        <label>Name</label>
        <input
          className="form-control"
          id="add-alarm-name"
          type="text"
          required
        />
        <label>Time</label>
        <input
          className="form-control"
          type="time"
          id="add-alarm-time"
          required
        />
        <label>Repeat</label>
        <select className="form-control" id="add-alarm-repeat">
          <option value="once">Once</option>
          <option value="everyday">Everyday</option>
        </select>
        <div className="d-flex">
          <button
            type="submit"
            className="btn add-alarm-buttons"
            id="add-alarm-submit"
          >
            Add alarm
          </button>
          <button
            className="btn add-alarm-buttons"
            id="cancel-alarm-submit"
            onClick={cancelAddAlarm}
          >
            cancel
          </button>
        </div>
      </form>
    </div>
  );
}
