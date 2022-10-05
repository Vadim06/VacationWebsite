import { Grid } from '@fluentui/react-northstar';
import * as React from 'react';
import { VacationCalendarComponent } from '../../components/vacation-calendar/vacation-calendar.components';
import './calendar.scss';

export interface CalendarViewProps {
  month: number;
  year: number;
}

const monthsDays = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

const CalendarView = () => {
  const currentDate = new Date();
  const [calendarState, setCalendarState] =
    React.useState<CalendarViewProps>({
      month: currentDate.getMonth(),
      year: currentDate.getFullYear(),
    });

  return (
    <div>
      <div>
        <input
          type="number"
          min="2022"
          max="2024"
          defaultValue="2022"
          onChange={(event) => {
            const newValue = event?.target?.value || 2022;
            setCalendarState((oldState) => {
              console.log('State changed');
              return {
                ...oldState,
                year: Number(newValue),
              };
            });
          }}
        />
        <Grid
          className="month-setter"
          columns="repeat(4, 40px)"
          rows="repeat(3, 40px)"
        >
          {monthsDays.map((month, index) => (
            <div
              className="month-setter--option"
              key={month + index}
              onClick={() =>
                setCalendarState((oldState) => {
                  console.log('State changed');
                  return {
                    ...oldState,
                    month: index,
                  };
                })
              }
            >
              {month}
            </div>
          ))}
        </Grid>
        <VacationCalendarComponent
          year={calendarState.year}
          month={calendarState.month}
          todayDate={currentDate}
        />
      </div>
    </div>
  );
};

export { CalendarView };
