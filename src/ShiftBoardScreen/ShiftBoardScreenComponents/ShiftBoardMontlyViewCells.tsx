import { FC } from "react";
import {
  format,
  addDays,
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
} from "date-fns";

interface ShiftBoardMonthlyViewCellsInterface {
  currentMonth: number | Date;
  selectedDate: number | Date;
  onDateClick: (e: React.MouseEvent<HTMLElement>) => void;
  data: {
    id: number;
    type: string;
    shiftStatus: string;
    shiftMessage: string;
    date: string;
    time: string;
    urgent: string;
  }[];
}

const ShiftBoardMonthlyViewCells: FC<ShiftBoardMonthlyViewCellsInterface> = (
  props: ShiftBoardMonthlyViewCellsInterface
) => {
  const { currentMonth, selectedDate, onDateClick, data } = props;
  // const data = customDataForTesting;
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const dateFormat = "d";
  const idDateFormat = "dd-MM-yyyy";
  const showDataDateFormat = "d-MM-yyyy";
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      let formattedDateForData = format(day, showDataDateFormat);
      var shiftDate = data.map((data) => {
        if (data.date === formattedDateForData) {
          if (data.urgent === "true") {
            return (
              <div className="" style={{ position: "relative" }}>
                <p
                  key={data.id}
                  style={{
                    position: "relative",
                    width: "80px",
                    marginLeft: "auto",
                    marginTop: "10px",
                    background: "#EB5757",
                    border: "1px solid #EB5757",
                    boxSizing: "border-box",
                    color: "#fff",
                    borderRadius: "4px",
                    padding: "0px 5px",
                    fontWeight: "normal",
                  }}
                >
                  ! Urgent
                </p>
                <p
                  key={data.id}
                  style={{
                    position: "relative",
                    marginLeft: "10px",
                    fontWeight: "normal",
                  }}
                >
                  {data.shiftMessage}
                </p>
              </div>
            );
          } else if (data.shiftStatus === "Missed") {
            return (
              <p
                key={data.id}
                style={{
                  color: "#EB5757",
                  textAlign: "left",
                  position: "relative",
                  marginTop: "10px",
                  marginLeft: "10px",
                  fontWeight: "normal",
                }}
              >
                {data.shiftMessage}
              </p>
            );
          } else if (data.shiftStatus === "Completed") {
            return (
              <p
                key={data.id}
                style={{
                  color: "#27AE60",
                  textAlign: "left",
                  position: "relative",
                  marginTop: "10px",
                  marginLeft: "10px",
                  fontWeight: "normal",
                }}
              >
                {data.shiftMessage}
              </p>
            );
          } else if (data.shiftStatus === "Pending") {
            return (
              <p
                key={data.id}
                style={{
                  position: "relative",
                  marginTop: "10px",
                  marginLeft: "10px",
                  fontWeight: "normal",
                }}
              >
                {data.shiftMessage}
              </p>
            );
          } else {
            return "";
          }
        } else {
          return "";
        }
      });
      formattedDate = format(day, dateFormat);
      days.push(
        <div
          className={`col cell ${
            !isSameMonth(day, monthStart)
              ? "disabled"
              : isSameDay(day, selectedDate)
              ? "selected"
              : ""
          }`}
          id={format(day, idDateFormat)}
          key={day.toDateString()}
          onClick={onDateClick}
        >
          <div>{shiftDate}</div>
          <span className="number" id="shiftboard-monthly-cells-number">
            {formattedDate}
          </span>
          <span className="shiftboard-bg">{formattedDate}</span>
        </div>
      );
      day = addDays(day, 1);
    }
    // let num = 2;
    rows.push(
      <div className="shiftboard-row" key={day.toDateString()}>
        {days}
      </div>
    );
    days = [];
  }
  return <div className="body">{rows}</div>;
};

export default ShiftBoardMonthlyViewCells;
