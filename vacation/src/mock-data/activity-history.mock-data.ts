import { IActivityHistory } from '../interfaces/components.props.interface';

const activityHistoryHeaderMock: string = 'Latest Activity';

const activityHistoryTitlesRowMock: string[] = [
  'Title',
  'Period',
  'Days',
  'Reason',
  'Approver',
  'Status',
];

const activityHistoryMock: IActivityHistory[] = [
  {
    title: 'Business trip NYC 22',
    period: '01/01/2022 - 10/01/2022',
    daysAmount: '10 Days',
    reason: 'Business Trip',
    approver: 'Mike Spirit',
    status: 'Approved',
  },
  {
    title: 'Business trip NYC 22',
    period: '01/01/2022 - 10/01/2022',
    daysAmount: '10 Days',
    reason: 'Business Trip',
    approver: 'Mike Spirit',
    status: 'Approved',
  },
  {
    title: 'Business trip NYC 22',
    period: '01/01/2022 - 10/01/2022',
    daysAmount: '10 Days',
    reason: 'Business Trip',
    approver: 'Mike Spirit',
    status: 'Approved',
  },
  {
    title: 'Business trip NYC 22',
    period: '01/01/2022 - 10/01/2022',
    daysAmount: '10 Days',
    reason: 'Business Trip',
    approver: 'Mike Spirit',
    status: 'Approved',
  },
  {
    title: 'Business trip NYC 22',
    period: '01/01/2022 - 10/01/2022',
    daysAmount: '10 Days',
    reason: 'Business Trip',
    approver: 'Mike Spirit',
    status: 'Approved',
  },
  {
    title: 'Business trip NYC 22',
    period: '01/01/2022 - 10/01/2022',
    daysAmount: '10 Days',
    reason: 'Business Trip',
    approver: 'Mike Spirit',
    status: 'Approved',
  },
];

export {
  activityHistoryMock,
  activityHistoryHeaderMock,
  activityHistoryTitlesRowMock,
};
