import React, { FC } from "react";
import { format, startOfWeek, endOfWeek } from "date-fns";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface calendarHeaderInterface {
  monthButton: boolean;
  weekButton: boolean;
  currentMonth: number | Date;
  currentWeek: number | Date;
  toggleButtonActive: (e: React.MouseEvent<HTMLElement>) => void;
  nextWeek: () => void;
  prevWeek: () => void;
  nextMonth: () => void;
  prevMonth: () => void;
}

const ShiftBoardScreenHeader: FC<calendarHeaderInterface> = (
  props: calendarHeaderInterface
) => {
  const dateFormat = "MMMM yyyy";
  const weekFormat = "MMM. d. yyyy";

  const {
    monthButton,
    weekButton,
    currentMonth,
    currentWeek,
    toggleButtonActive,
    nextWeek,
    prevWeek,
    nextMonth,
    prevMonth,
  } = props;

  return (
    <div className="header shiftboard-row flex-middle">
      <div className="col col-start">
        <h5 id="nurse-shiftboard-heading-name">Shift-Calendar</h5>
      </div>
      {props.monthButton ? (
        <div className="col col-center">
          <div className="icon" onClick={prevMonth}>
            <FaAngleLeft />
          </div>
          <span id="nurse-shiftboard-heading-date">
            {format(currentMonth, dateFormat)}
          </span>
          <div className="icon" onClick={nextMonth}>
            <FaAngleRight />
          </div>
        </div>
      ) : (
        <div className="col-center">
          <div className="icon" onClick={prevWeek}>
            <FaAngleLeft />
          </div>
          <span id="nurse-shiftboard-heading-date">
            {format(startOfWeek(currentWeek), weekFormat)} -
            {" " + format(endOfWeek(currentWeek), weekFormat)}
          </span>
          <div className="icon" onClick={nextWeek}>
            <FaAngleRight />
          </div>
        </div>
      )}
      <div className="col col-end shiftboard-buttons">
        <button
          className={
            weekButton ? "shiftboard-button-active" : "shiftboard-button"
          }
          id="nurse-shift-board-week-button"
          onClick={toggleButtonActive}
        >
          Week
        </button>
        <button
          className={
            monthButton ? "shiftboard-button-active" : "shiftboard-button"
          }
          id="nurse-shift-board-month-button"
          onClick={toggleButtonActive}
        >
          Month
        </button>
      </div>
    </div>
  );
};

export default ShiftBoardScreenHeader;
