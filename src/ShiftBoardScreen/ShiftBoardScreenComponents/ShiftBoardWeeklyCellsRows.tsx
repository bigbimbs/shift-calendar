import { FC } from "react";
import { format } from "date-fns";

interface ShiftBoardWeeklyCellsRowsProps {
  weekDay: string;
  currentWeek: Date | number;
  day: {};
  onDateClick: (e: React.MouseEvent<HTMLElement>) => void;
  data: {
    id: number;
    type: string;
    shiftStatus: string;
    shiftMessage: string;
    date: string;
    time: string;
    urgent: string;
    morningShift: string;
    afternoonShift: string;
    eveningShift: string;
  }[];
}

const ShiftBoardWeeklyCellsRows: FC<ShiftBoardWeeklyCellsRowsProps> = (
  props: ShiftBoardWeeklyCellsRowsProps
) => {
  const { weekDay, day, currentWeek, onDateClick, data } = props;
  const monthYear = format(currentWeek, "MM-yyyy");
  const shiftFormat = day + "-" + monthYear;
  const morningShift = data.filter(
    (e) => e.date === shiftFormat && e.morningShift !== ""
  );
  const afternoonShift = data.filter(
    (e) => e.date === shiftFormat && e.afternoonShift !== ""
  );
  const eveningShift = data.filter(
    (e) => e.date === shiftFormat && e.eveningShift !== ""
  );
  return (
    <div className="row nurse-shift-weekly">
      <div className="col col-center cell">
        <div className="d-flex p-3" style={{ position: "relative" }}>
          <p className="ms-4" id="monthly-view-week-header">
            {weekDay}
          </p>
          <p id="shiftboard-weekly-cells-number">{day}</p>
        </div>
      </div>
      <div
        className="mt-3 col cell nurse-shiftboard-weekly-shift-heading"
        id={day + "-" + monthYear + " Morning Shift"}
        onClick={onDateClick}
      >
        {morningShift.map((morningShifts) => {
          if (morningShifts.urgent === "true") {
            return (
              <div className="d-flex" style={{ position: "relative" }}>
                <p key={morningShifts.id}>{morningShifts.morningShift}</p>
                <p
                  key={morningShifts.id}
                  style={{
                    position: "relative",
                    width: "80px",
                    marginLeft: "auto",
                    marginTop: "0px",
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
              </div>
            );
          } else if (morningShifts.shiftStatus === "Missed") {
            return (
              <p
                key={morningShifts.id}
                style={{ color: "#EB5757", textAlign: "left" }}
              >
                Missed Shifts
              </p>
            );
          } else if (morningShifts.shiftStatus === "Completed") {
            return (
              <p
                key={morningShifts.id}
                style={{ color: "#27AE60", textAlign: "left" }}
              >
                Completed Shift
              </p>
            );
          } else if (morningShifts.shiftStatus === "Pending") {
            return <p key={morningShifts.id}>{morningShifts.morningShift}</p>;
          } else {
            return "";
          }
        })}
      </div>
      <div
        className="mt-3 col col-center cell nurse-shiftboard-weekly-shift-heading"
        id={day + "-" + monthYear + " Afternoon Shift"}
        onClick={onDateClick}
      >
        {afternoonShift.map((afternoonShifts) => {
          if (afternoonShifts.urgent === "true") {
            return (
              <div className="d-flex" style={{ position: "relative" }}>
                <p key={afternoonShifts.id}>{afternoonShifts.afternoonShift}</p>
                <p
                  key={afternoonShifts.id}
                  style={{
                    position: "absolute",
                    right: "10px",
                    background: "#EB5757",
                    border: "1px solid #EB5757",
                    boxSizing: "border-box",
                    color: "#fff",
                    borderRadius: "4px",
                    padding: "0px 5px",
                  }}
                >
                  ! Urgent
                </p>
              </div>
            );
          } else if (afternoonShifts.shiftStatus === "Missed") {
            return (
              <p
                key={afternoonShifts.id}
                style={{ color: "#EB5757", textAlign: "left" }}
              >
                {afternoonShifts.afternoonShift}
              </p>
            );
          } else if (afternoonShifts.shiftStatus === "Complete") {
            return (
              <p
                key={afternoonShifts.id}
                style={{ color: "#27AE60", textAlign: "left" }}
              >
                Completed Shift
              </p>
            );
          } else if (afternoonShifts.shiftStatus === "Pending") {
            return (
              <p key={afternoonShifts.id}>{afternoonShifts.afternoonShift}</p>
            );
          } else {
            return "";
          }
        })}
      </div>
      <div
        className="mt-3 col col-center cell nurse-shiftboard-weekly-shift-heading"
        id={day + "-" + monthYear + " Evening Shift"}
        onClick={onDateClick}
      >
        {eveningShift.map((eveningShifts) => {
          if (eveningShifts.urgent === "true") {
            return (
              <div className="d-flex" style={{ position: "relative" }}>
                <p key={eveningShifts.id}>{eveningShifts.eveningShift}</p>
                <p
                  key={eveningShifts.id}
                  style={{
                    position: "absolute",
                    right: "10px",
                    background: "#EB5757",
                    border: "1px solid #EB5757",
                    boxSizing: "border-box",
                    color: "#fff",
                    borderRadius: "4px",
                    padding: "0px 5px",
                  }}
                >
                  ! Urgent
                </p>
              </div>
            );
          } else if (eveningShifts.shiftStatus === "Missed") {
            return (
              <p
                key={eveningShifts.id}
                style={{ color: "#EB5757", textAlign: "left" }}
              >
                Missed Shift
              </p>
            );
          } else if (eveningShifts.shiftStatus === "Complete") {
            return (
              <p
                key={eveningShifts.id}
                style={{ color: "#27AE60", textAlign: "left" }}
              >
                Completed Shifts
              </p>
            );
          } else if (eveningShifts.shiftStatus === "Pending") {
            return <p key={eveningShifts.id}>{eveningShifts.eveningShift}</p>;
          } else {
            return "";
          }
        })}
      </div>
    </div>
  );
};

export default ShiftBoardWeeklyCellsRows;
