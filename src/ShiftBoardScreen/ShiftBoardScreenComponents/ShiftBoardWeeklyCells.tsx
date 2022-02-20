import { FC } from "react";

const ShiftBoardWeeklyCells: FC = () => {
  return (
    <div className="row nurse-shift-weekly">
      <div className="col col-center cell pt-3 pb-3">
        <p id="monthly-view-week-header">Week Days</p>
      </div>
      <div className="col col-center cell nurse-shiftboard-weekly-shift-heading">
        <p className="pt-3" id="monthly-view-week-header">
          Morning Shift <span>(7am to 3pm)</span>
        </p>
      </div>
      <div className="col col-center cell nurse-shiftboard-weekly-shift-heading">
        <p className="pt-3" id="monthly-view-week-header">
          Afternoon Shift <span>(3pm to 11pm)</span>
        </p>
      </div>
      <div className="col col-center cell nurse-shiftboard-weekly-shift-heading">
        <p className="pt-3" id="monthly-view-week-header">
          Evening Shift <span>(11pm to 7am)</span>
        </p>
      </div>
    </div>
  );
};

export default ShiftBoardWeeklyCells;
