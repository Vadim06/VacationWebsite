import { PublicHolidayEvent } from '../interfaces/components.props.interface';

const publicHolidaysCalendarMockHeader: string =
  'Public Holidays - Czech Republic';

const publicHolidaysCalendarMockHeaderDateLocalization: string =
  'Date';

const publicHolidaysCalendarMockHeaderDescriptionLocalization: string =
  'Description';

const publicHolidaysCalendarMockEvents: PublicHolidayEvent[] =
  [
    {
      date: '1 Jan 2022',
      bankHolidayName: 'New Years Day',
    },
    {
      date: '15 Apr 2022',
      bankHolidayName: 'Velký pátek',
    },
    {
      date: '18 Apr 2022',
      bankHolidayName: 'Velikonoční pondělí',
    },
    {
      date: '1 May 2022',
      bankHolidayName: 'Labour Day',
    },
    {
      date: '8 May 2022',
      bankHolidayName: 'Victory in Europe Day',
    },
    {
      date: '5 Jul 2022',
      bankHolidayName: 'Saints Cyril and Methodius Day',
    },
    {
      date: '6 Jul 2022',
      bankHolidayName: 'Jan Hus Day',
    },
    {
      date: '28 Sep 2022',
      bankHolidayName: 'Czech Statehood Day',
    },
    {
      date: '28 Oct 2022',
      bankHolidayName: 'Independent CZ State Day',
    },
    {
      date: '17 Nov 2022',
      bankHolidayName:
        'Struggle for Freedom and Democracy Day',
    },
    {
      date: '24 Dec 2022',
      bankHolidayName: 'Christmas Eve',
    },
    {
      date: '25 Dec 2022',
      bankHolidayName: 'Christmas',
    },
    {
      date: '26 Dec 2022',
      bankHolidayName: 'Christmas',
    },
  ];

export {
  publicHolidaysCalendarMockEvents,
  publicHolidaysCalendarMockHeader,
  publicHolidaysCalendarMockHeaderDateLocalization,
  publicHolidaysCalendarMockHeaderDescriptionLocalization,
};
