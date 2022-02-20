import React, { FC, useState, useRef } from "react";
import NurseShiftBoardScreenHeader from "./ShiftBoardScreenComponents/ShiftBoardScreenHeader";
import NurseShiftBoardMonthlyViewHeader from "./ShiftBoardScreenComponents/ShiftBoardMonthlyViewHeader";
import NurseShiftBoardMonthlyViewCells from "./ShiftBoardScreenComponents/ShiftBoardMontlyViewCells";
import NurseShiftBoardWeeklyCells from "./ShiftBoardScreenComponents/ShiftBoardWeeklyCells";
import NurseShiftBoardWeeklyCellsRows from "./ShiftBoardScreenComponents/ShiftBoardWeeklyCellsRows";
// import NurseShiftBoardModal from "./ShiftBoardScreenComponents/ShiftBoardModal";

import {
  currentMonthInterface,
  selectedDateInterface,
  currentWeekInterface,
  weekButtonInterface,
  monthButtonInterface,
  customStartDateInterface,
  customEndDateInterface,
  mondayInterface,
  tuesdayInterface,
  wednessdayInterface,
  thursdayInterface,
  fridayInterface,
  // modalViewInterface,
} from "../Interfaces/calanderShiftBoard";
import "./style.css";

import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  endOfWeek,
  addWeeks,
  subWeeks,
} from "date-fns";

interface ShiftBoardProps {
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

const ShiftBoardScreen: FC<ShiftBoardProps> = (props) => {
  const { data } = props;
  const [currentMonth, setCurrentMonth] = useState<
    currentMonthInterface["currentMonth"]
  >(new Date());
  const [selectedDate] = useState<selectedDateInterface["selectedDate"]>(
    new Date()
  );
  const [currentWeek, setCurrentWeek] = useState<
    currentWeekInterface["currentWeek"]
  >(new Date());
  const [weekButton, setWeekButton] =
    useState<weekButtonInterface["weekButton"]>(false);
  const [monthButton, setMonthButton] =
    useState<monthButtonInterface["monthButton"]>(true);
  const [customStartDate, setCustomStartDate] = useState<
    customStartDateInterface["customStartDate"]
  >(format(startOfWeek(new Date()), "d"));
  const [customEndDate, setCustomEndDate] = useState<
    customEndDateInterface["customEndDate"]
  >(format(endOfWeek(new Date()), "d"));
  const [monday, setMonday] = useState<mondayInterface["monday"]>(
    format(addDays(startOfWeek(new Date()), 1), "d")
  );
  const [tuesday, setTuesday] = useState<tuesdayInterface["tuesday"]>(
    format(addDays(startOfWeek(new Date()), 2), "d")
  );
  const [wednessday, setWednessday] = useState<
    wednessdayInterface["wednessday"]
  >(format(addDays(startOfWeek(new Date()), 3), "d"));
  const [thursday, setThursday] = useState<thursdayInterface["thursday"]>(
    format(addDays(startOfWeek(new Date()), 4), "d")
  );
  const [friday, setFriday] = useState<fridayInterface["friday"]>(
    format(addDays(startOfWeek(new Date()), 5), "d")
  );
  // const [modalView, setModalView] =
  //   useState<modalViewInterface["modalView"]>(false);

  function nextMonth(): void {
    setCurrentMonth(addMonths(currentMonth, 1));
  }

  function prevMonth(): void {
    setCurrentMonth(subMonths(currentMonth, 1));
  }

  function nextWeek(): void {
    const weekFormatForOtherComponentState = "d";
    setCurrentWeek(addWeeks(currentWeek, 1));
    setCustomEndDate(
      format(
        endOfWeek(addWeeks(currentWeek, 1)),
        weekFormatForOtherComponentState
      )
    );
    setCustomStartDate(
      format(
        startOfWeek(addWeeks(currentWeek, 1)),
        weekFormatForOtherComponentState
      )
    );
    setMonday(format(addDays(startOfWeek(addWeeks(currentWeek, 1)), 1), "d"));
    setTuesday(format(addDays(startOfWeek(addWeeks(currentWeek, 1)), 2), "d"));
    setWednessday(
      format(addDays(startOfWeek(addWeeks(currentWeek, 1)), 3), "d")
    );
    setThursday(format(addDays(startOfWeek(addWeeks(currentWeek, 1)), 4), "d"));
    setFriday(format(addDays(startOfWeek(addWeeks(currentWeek, 1)), 5), "d"));
  }

  function prevWeek(): void {
    const weekFormatForOtherComponentState = "d";
    setCurrentWeek(subWeeks(currentWeek, 1));
    setCustomEndDate(
      format(
        endOfWeek(subWeeks(currentWeek, 1)),
        weekFormatForOtherComponentState
      )
    );
    setCustomStartDate(
      format(
        startOfWeek(subWeeks(currentWeek, 1)),
        weekFormatForOtherComponentState
      )
    );
    setMonday(format(addDays(startOfWeek(subWeeks(currentWeek, 1)), 1), "d"));
    setTuesday(format(addDays(startOfWeek(subWeeks(currentWeek, 1)), 2), "d"));
    setWednessday(
      format(addDays(startOfWeek(subWeeks(currentWeek, 1)), 3), "d")
    );
    setThursday(format(addDays(startOfWeek(subWeeks(currentWeek, 1)), 4), "d"));
    setFriday(format(addDays(startOfWeek(subWeeks(currentWeek, 1)), 5), "d"));
  }

  function toggleButtonActive(e: React.MouseEvent<HTMLElement>): void {
    e.preventDefault();
    if (e.currentTarget.id === "nurse-shift-board-month-button") {
      setMonthButton(true);
      setWeekButton(false);
    } else {
      setMonthButton(false);
      setWeekButton(true);
    }
  }

  const modalData = useRef({ id: "" });
  function onDateClick(e: React.MouseEvent<HTMLElement>): void {
    modalData.current.id = e.currentTarget.id;
    // setModalView(true);
  }
  // function closeModal(): void {
  //   setModalView(false);
  // }
  return (
    <div id="shift-board-body" className="mx-5 rounded">
      <div id="shiftboard-main" className="calendar">
        <NurseShiftBoardScreenHeader
          monthButton={monthButton}
          weekButton={weekButton}
          currentMonth={currentMonth}
          currentWeek={currentWeek}
          toggleButtonActive={toggleButtonActive}
          nextWeek={nextWeek}
          prevWeek={prevWeek}
          nextMonth={nextMonth}
          prevMonth={prevMonth}
        />
        {/* <NurseShiftBoardModal
          modalData={modalData.current.id}
          modalView={modalView}
          closeModal={closeModal}
        /> */}
        <div style={monthButton ? { display: "block" } : { display: "none" }}>
          <NurseShiftBoardMonthlyViewHeader currentMonth={currentMonth} />
          <NurseShiftBoardMonthlyViewCells
            currentMonth={currentMonth}
            selectedDate={selectedDate}
            onDateClick={onDateClick}
            data={data}
          />
        </div>
        <div style={weekButton ? { display: "block" } : { display: "none" }}>
          <NurseShiftBoardWeeklyCells />
          <NurseShiftBoardWeeklyCellsRows
            currentWeek={currentWeek}
            weekDay={"Sunday"}
            day={customStartDate}
            onDateClick={onDateClick}
            data={data}
          />
          <NurseShiftBoardWeeklyCellsRows
            currentWeek={currentWeek}
            weekDay={"Monday"}
            day={monday}
            onDateClick={onDateClick}
            data={data}
          />
          <NurseShiftBoardWeeklyCellsRows
            currentWeek={currentWeek}
            weekDay={"Tuesday"}
            day={tuesday}
            onDateClick={onDateClick}
            data={data}
          />
          <NurseShiftBoardWeeklyCellsRows
            currentWeek={currentWeek}
            weekDay={"Wednessday"}
            day={wednessday}
            onDateClick={onDateClick}
            data={data}
          />
          <NurseShiftBoardWeeklyCellsRows
            currentWeek={currentWeek}
            weekDay={"Thursday"}
            day={thursday}
            onDateClick={onDateClick}
            data={data}
          />
          <NurseShiftBoardWeeklyCellsRows
            currentWeek={currentWeek}
            weekDay={"Friday"}
            day={friday}
            onDateClick={onDateClick}
            data={data}
          />
          <NurseShiftBoardWeeklyCellsRows
            currentWeek={currentWeek}
            weekDay={"Saturday"}
            day={customEndDate}
            onDateClick={onDateClick}
            data={data}
          />
        </div>
      </div>
    </div>
  );
};
export default ShiftBoardScreen;
