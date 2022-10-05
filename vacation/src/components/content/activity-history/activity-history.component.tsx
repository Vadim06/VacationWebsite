import * as React from 'react';
import { Flex } from '@fluentui/react-northstar';
import './activity-history.scss';
import { IActivityHistoryProps } from '../../../interfaces/components.props.interface';
import { ClipboardBulletListLtr20Regular } from '@fluentui/react-icons';
const ActivityHistoryComponent: React.FC<
  IActivityHistoryProps
> = ({
  activityHistoryHeader,
  activityHistoryTitlesRows,
  activityHistory,
}) => {
  return (
    <>
      <div className="activity-history__header">
        {activityHistoryHeader}
      </div>
      <Flex className="activity-history__title-wrapper activity-history__title-wrapper--delimeter">
        <i>
          <ClipboardBulletListLtr20Regular />
        </i>
        {activityHistoryTitlesRows.map((title, index) => (
          <Flex.Item key={title + index}>
            <span className="activity-history__title">
              {title}
            </span>
          </Flex.Item>
        ))}
      </Flex>
      {activityHistory.map((activityRecord, index) => (
        <Flex
          key={activityRecord.daysAmount + index}
          className="activity-history__records"
        >
          <Flex.Item className="activity-history__record">
            <span>{activityRecord.title}</span>
          </Flex.Item>
          <Flex.Item className="activity-history__record">
            <span>{activityRecord.period}</span>
          </Flex.Item>
          <Flex.Item className="activity-history__record">
            <span>{activityRecord.daysAmount}</span>
          </Flex.Item>
          <Flex.Item className="activity-history__record">
            <span>{activityRecord.reason}</span>
          </Flex.Item>
          <Flex.Item className="activity-history__record">
            <span>{activityRecord.approver}</span>
          </Flex.Item>
          <Flex.Item className="activity-history__record">
            <span className="activity-history__record--approved">
              {activityRecord.status}
            </span>
          </Flex.Item>
        </Flex>
      ))}
    </>
  );
};

export { ActivityHistoryComponent };
