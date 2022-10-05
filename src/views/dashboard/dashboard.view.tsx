import * as React from 'react';
import { Flex } from '@fluentui/react-northstar';
import { DonutComponent } from '../../components/charts/donut/donut.component';
import { DashboardItemComponent } from '../../components/dashboard-item/dashboard-item.component';
import { PublicHolidaysComponent } from '../../components/public-holidays/public-holidays.component';
import { ActivityHistoryComponent } from '../../components/content/activity-history/activity-history.component';
import './dashboard.scss';
import {
  sickDaysLeftMockData,
  vacationDaysLeftMockData,
} from '../../mock-data/donut-data.mock-data';
import {
  publicHolidaysCalendarMockEvents,
  publicHolidaysCalendarMockHeader,
  publicHolidaysCalendarMockHeaderDateLocalization,
  publicHolidaysCalendarMockHeaderDescriptionLocalization,
} from '../../mock-data/public-holidays-calendar-events.mock-data';
import {
  activityHistoryHeaderMock,
  activityHistoryTitlesRowMock,
  activityHistoryMock,
} from '../../mock-data/activity-history.mock-data';

const DashboardView = () => (
  <>
    <Flex.Item>
      <DashboardItemComponent className="activity-history">
        <ActivityHistoryComponent
          activityHistoryHeader={activityHistoryHeaderMock}
          activityHistoryTitlesRows={
            activityHistoryTitlesRowMock
          }
          activityHistory={activityHistoryMock}
        />
      </DashboardItemComponent>
    </Flex.Item>

    <Flex.Item>
      <Flex className="info-pane" gap="gap.small" column>
        <DashboardItemComponent className="info-pane__statistics">
          <>
            <DonutComponent
              circleColor={
                vacationDaysLeftMockData.donutColor
              }
              daysLeft={vacationDaysLeftMockData.daysLeft}
              daysAll={vacationDaysLeftMockData.daysAll}
            />
            <DonutComponent
              circleColor={sickDaysLeftMockData.donutColor}
              daysLeft={sickDaysLeftMockData.daysLeft}
              daysAll={sickDaysLeftMockData.daysAll}
            />
          </>
        </DashboardItemComponent>
        <DashboardItemComponent className="info-pane__public-holidays">
          <PublicHolidaysComponent
            events={publicHolidaysCalendarMockEvents}
            tableHeaderText={
              publicHolidaysCalendarMockHeader
            }
            tableHeaderDateLocalization={
              publicHolidaysCalendarMockHeaderDateLocalization
            }
            tableHeaderDescriptionLocalization={
              publicHolidaysCalendarMockHeaderDescriptionLocalization
            }
          />
        </DashboardItemComponent>
      </Flex>
    </Flex.Item>
  </>
);

export { DashboardView };
