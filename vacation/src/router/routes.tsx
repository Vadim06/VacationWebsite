import {
  DefaultRoute,
  RouteValue,
  RoutsValueType,
} from '../interfaces/common.iterface';
import {
  CalendarView,
  DashboardView,
  RequestView,
  SettingsView,
  PrivacyView,
  HelpView,
} from '../views';

const DEFAULT_HOME_ROUTE: RoutsValueType = '/';
const DEFAULT_ANY_ROUTE: DefaultRoute = {
  path: '*',
  redirectTo: DEFAULT_HOME_ROUTE,
};
const ROUTES: RouteValue[] = [
  {
    text: 'Overview',
    path: '/',
    element: <DashboardView />,
  },
  {
    text: 'Calendar',
    path: '/calendar',
    element: <CalendarView />,
  },
  {
    text: 'Settings',
    path: '/settings',
    element: <SettingsView />,
  },
  {
    text: 'Make a request (test)',
    path: '/request',
    element: <RequestView />,
  },
  {
    text: 'Privacy policy',
    path: '/privacyPolicy',
    element: <PrivacyView />,
  },
  {
    text: 'Help',
    path: '/help',
    element: <HelpView />,
  },
];

export { ROUTES, DEFAULT_ANY_ROUTE };
