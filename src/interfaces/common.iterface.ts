export type ColorsNameType = 'blue' | 'red' | 'grey';
export type ColorsHexType =
  | '#0078D4'
  | '#A4262C'
  | '#EDEBE9';
export type SvgStrokeLinecapType =
  | 'square'
  | 'butt'
  | 'round'
  | 'inherit';
export type RoutsNameType =
  | 'Overview'
  | 'Calendar'
  | 'Request'
  | 'General'
  | 'PrivacyPolicy'
  | 'Help';
export type RoutsValueType =
  | '/'
  | '/calendar'
  | '/settings'
  | '/request'
  | '/general'
  | '/privacyPolicy'
  | '/help';
export type DefaultRoutePath = '*';

export interface RouteValue {
  text: string;
  path: RoutsValueType;
  element: JSX.Element;
}

export interface DefaultRoute {
  path: DefaultRoutePath;
  redirectTo: RoutsValueType;
}
