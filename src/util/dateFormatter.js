const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function ordinalSuffixOf(i) {
  const j = i % 10;
  const k = i % 100;

  if (j === 1 && k !== 11) return i + "st";
  if (j === 2 && k !== 12) return i + "nd";
  if (j === 3 && k !== 13) return i + "rd";

  return i + "th";
}

const slugDate = date => {
  var d = new Date(date);
  return `${d.getFullYear()}-${("0" + (d.getMonth() + 1)).slice(-2)}-${(
    "0" + d.getDate()
  ).slice(-2)}`;
};
export default function(date) {
  const d = new Date(date);
  const month = MONTHS[d.getMonth()];
  const dayOfMonth = ordinalSuffixOf(d.getDate());
  return `${month} ${dayOfMonth}, ${d.getFullYear()}`;
}
