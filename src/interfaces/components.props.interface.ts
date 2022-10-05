import { ReactElement } from 'react';
import {
  ColorsHexType,
  SvgStrokeLinecapType,
} from './common.iterface';

export interface IHeaderProps {
  headerText: string;
  headerNewRequestBtnLabel: string;
  headerBadge: number;
}

export interface DonutComponentProps {
  // strokeDashoffset: number;
  daysLeft: number;
  daysAll: number;
  circleColor?: ColorsHexType;
}

export interface SvgWrapperProps {
  children: JSX.Element;
  className: string;
  height: number;
  width: number;
}

export interface SvgCircleProps {
  className: string;
  cx: number;
  cy: number;
  r: number;
  fill: string;
  stroke?: string;
  strokeLinecap?: SvgStrokeLinecapType;
  strokeWidth?: number;
  strokeDasharray?: number[];
  strokeDashoffset?: number;
}

export interface SvgTextProps {
  x: number;
  y: number;
  className: string;
  text: string | number;
}

export interface PublicHolidayEvent {
  date: string;
  bankHolidayName: string;
}

export interface PublicHolidaysTableComponentProps {
  tableHeaderText: string;
  tableHeaderDateLocalization: string;
  tableHeaderDescriptionLocalization: string;
  events: PublicHolidayEvent[];
}

export interface PublicHolidaystableValues {
  dates: ReactElement[];
  bankHolidayNames: ReactElement[];
}

export interface DashboardItemComponentProps {
  children: JSX.Element;
  className?: string;
}
export interface IStatisticsComponentProps {
  daysLeft: number;
  daysAll: number;
  circleColor?: ColorsHexType;
}

export interface IActivityHistory {
  title: string;
  period: string;
  daysAmount: string;
  reason: string;
  approver: string;
  status: string;
}

export interface IActivityHistoryProps {
  activityHistoryHeader: string;
  activityHistoryTitlesRows: string[];
  activityHistory: IActivityHistory[];
}
