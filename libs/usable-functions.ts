export function formatNumberToTime(number: number) {
  var hours = Math.floor(number);
  var minutes = Math.floor((number - hours) * 60);
  var formattedMinutes = String(minutes).padStart(2, "0");
  return hours + ":" + formattedMinutes;
}

export function isObjectEmpty(obj: {}) {
  return Object.keys(obj).length === 0;
}