import * as React from 'react';
import './vacation-calendar.scss';
import { Flex, Grid } from '@fluentui/react-northstar';

const checkIfDatesEqual = (date1: Date, date2: Date) => {
  //   const date1WithoutTime = new Date(date1.getTime());
  //   const date2WithoutTime = new Date(date2.getTime());

  //   date1WithoutTime.setUTCHours(0, 0, 0, 0);
  //   date2WithoutTime.setUTCHours(0, 0, 0, 0);

  //   return date1WithoutTime.getTime() === date2WithoutTime.getTime();
  return (
    `${date1.getFullYear()}-${date1.getMonth()}-${date1.getDate()}` ===
    `${date2.getFullYear()}-${date2.getMonth()}-${date2.getDate()}`
  );
};

const getLastDayOfPreviousMonth = (
  month: number,
  year: number,
) => {
  return new Date(year, month, 0);
};
const getFirstDayOfNextMonth = (
  month: number,
  year: number,
) => {
  return new Date(year, month + 1, 1);
};

const daysOfWeekNames = [
  'mon',
  'tue',
  'wed',
  'th',
  'fri',
  'sat',
  'sun',
];
// const monthsNames = [

// ]

const daysOfWeekNamesElements = daysOfWeekNames.map(
  (dayOfWeek, index) => (
    <div
      className="vacation-calendar--cell"
      key={dayOfWeek + index}
    >
      {dayOfWeek}
    </div>
  ),
);

const VacationCalendarComponent = (props: {
  month: number;
  year: number;
  todayDate?: Date;
}) => {
  const { month, year, todayDate } = props;
  console.log(props);
  const currentDate = todayDate || new Date();
  const baseDate = new Date(year, month, 15);

  const lastDayOfPreviousMonth = getLastDayOfPreviousMonth(
    baseDate.getMonth(),
    baseDate.getFullYear(),
  );
  const firstDayOfNextMonth = getFirstDayOfNextMonth(
    baseDate.getMonth(),
    baseDate.getFullYear(),
  );

  const lastDayOfPreviousMonthWeekDayIndex =
    lastDayOfPreviousMonth.getDay() - 1;
  const lastDayOfPreviousMonthWeekDay =
    daysOfWeekNames[lastDayOfPreviousMonthWeekDayIndex];
  const firstDayOfNextMonthWeekDayIndex =
    firstDayOfNextMonth.getDay() - 1;
  const firstDayOfNextMonthWeekDay =
    daysOfWeekNames[firstDayOfNextMonthWeekDayIndex];
  const lastDateOfCurrentMonth = new Date(
    baseDate.getFullYear(),
    baseDate.getMonth() + 1,
    0,
  );

  console.log({
    currentDate,
    // currentDateFY: currentDate.getFullYear(),
    lastDayOfPreviousMonth,
    lastDayOfPreviousMonthWeekDay,
    firstDayOfNextMonth,
    firstDayOfNextMonthWeekDay,
    lastDateOfCurrentMonth,
  });

  const firstCalendarDate =
    lastDayOfPreviousMonthWeekDayIndex < 6
      ? new Date(
          lastDayOfPreviousMonth.getFullYear(),
          lastDayOfPreviousMonth.getMonth(),
          lastDayOfPreviousMonth.getDate() -
            lastDayOfPreviousMonthWeekDayIndex,
        )
      : new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          1,
        );
  // const lastDayO =

  console.log({ firstCalendarDate });

  const calendarDates: Date[] = [firstCalendarDate];

  for (let index = 1; index < 42; index++) {
    const date = new Date(
      firstCalendarDate.getFullYear(),
      firstCalendarDate.getMonth(),
      firstCalendarDate.getDate() + index,
    );
    calendarDates.push(date);
  }

  const emptyCellsElements = calendarDates.map(
    (date: Date, index) => {
      if (checkIfDatesEqual(date, currentDate)) {
        console.log('AHOJ!');
      }

      return (
        <div
          key={index}
          className={`vacation-calendar--cell ${
            checkIfDatesEqual(date, currentDate)
              ? 'vacation-calendar--cell-today'
              : ''
          }`}
          //  past days - grey
        >
          {date.toDateString()}
        </div>
      );
    },
  );

  return (
    <Grid
      className="vacation-calendar"
      rows="repeat(7, 90px)"
      columns="repeat(7, 140px)"
      content={[
        ...daysOfWeekNamesElements,
        ...emptyCellsElements,
      ]}
    />
  );
};

export { VacationCalendarComponent };
