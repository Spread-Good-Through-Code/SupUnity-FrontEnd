import type { TTrackedCommitment } from "types";

const CommitmentTracked = ({
  date,
  commitment,
  status,
}: TTrackedCommitment) => {
  const formatDay = (day: string) => {
    const num = Number(day);
    let ending;
    switch (num) {
      case 1:
      case 21:
      case 31:
        ending = "st";
        break;
      case 2:
      case 22:
        ending = "nd";
        break;
      case 3:
      case 23:
        ending = "rd";
        break;
      default:
        ending = "th";
    }
    return `${num}${ending}`;
  };

  const formatDate = (date: string) => {
    const months = {
      "01": "January",
      "02": "February",
      "03": "March",
      "04": "April",
      "05": "May",
      "06": "June",
      "07": "July",
      "08": "August",
      "09": "September",
      "10": "October",
      "11": "November",
      "12": "December",
    };
    const dateArr = date.split("-") as [
      keyof typeof months,
      string,
      string
    ];
    const month = months[dateArr[0]];
    const day = formatDay(dateArr[1]);

    return `${month} ${day}, ${dateArr[2]}`;
  };

  const formattedDate = formatDate(date);

  return (
    <tr>
      <td>{formattedDate}</td>
      <td>{commitment}</td>
      <td>{status}</td>
    </tr>
  );
};

export default CommitmentTracked;
