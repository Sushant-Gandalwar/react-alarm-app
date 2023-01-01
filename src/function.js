export function getItem(key) {
  let rep = localStorage.getItem(key);
  if (rep === null) {
    localStorage.setItem(key, "[]");
    return [];
  }
  return JSON.parse(rep);
}
export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function select(selection, singleElement = true) {
  if (singleElement) {
    return document.querySelector(selection);
  } else {
    return [...document.querySelectorAll(selection)];
  }
}
function m2D(n) {
  if (n < 10) {
    return `0${n}`;
  }
  return `${n}`;
}
export function timeRemaing(cTime, t) {
  let dd = new Date("01/01/2007 " + t) - new Date("01/01/2007 " + cTime);
  if (dd < 0) {
    dd = 24 * 60 * 60 * 1000 + dd;
  }
  let dsec = dd / 1000;
  let dmin = Math.floor(dsec / 60);
  dsec = dsec % 60;
  const hour = Math.floor(dmin / 60);
  const min = dmin % 60;
  const sec = dsec;
  return `${m2D(hour)}:${m2D(min)}:${m2D(sec)}`;
}
export function clearInput() {
  select("input", false).forEach((input) => {
    if (input.type === "checkbox") {
      input.checked = false;
    } else {
      input.value = "";
    }
  });
}
export function coverScreen(isCover = true) {
  select("#cover").style.display = "none";
  if (isCover === false) {
    select("#cover").style.display = "none";
    clearInput();
  } else {
    select("#cover").style.display = "flex";
    select("body").style.overflow = "hidden";
  }
}
export function AlaramTimeList() {
  return getItem("active").map((li) => li.time);
}

export function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
