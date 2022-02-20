import { FC } from "react";
import { format, startOfWeek, addDays } from "date-fns";

interface calendarMonthlyViewHeaderInterface {
  currentMonth: number | Date;
}

const ShiftBoardMonthlyViewHeader: FC<calendarMonthlyViewHeaderInterface> = (
  props: calendarMonthlyViewHeaderInterface
) => {
  const { currentMonth } = props;
  const dateFormat = "EEEE";
  const days: any = [];
  const newDays: any = [];
  let startDate = startOfWeek(currentMonth);
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="col col-center" key={i}>
        {format(addDays(startDate, i), dateFormat)}
        {/* {console.log(format(addDays(startDate, i), dateFormat))} */}
      </div>
    );
    newDays.push(format(addDays(startDate, i), dateFormat));
  }

  return (
    <div className="days shiftboard-row" id="monthly-view-week-header">
      {days}
    </div>
  );
};

export default ShiftBoardMonthlyViewHeader;
