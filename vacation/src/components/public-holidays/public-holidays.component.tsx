import * as React from 'react';
import { Flex, Grid } from '@fluentui/react-northstar';
import { ClipboardBulletListRtl20Regular } from '@fluentui/react-icons';
import './public-holidays.scss';
import { PublicHolidaysTableComponentProps } from '../../interfaces/components.props.interface';

const PublicHolidaysComponent: React.FC<
  PublicHolidaysTableComponentProps
> = ({
  tableHeaderText,
  tableHeaderDateLocalization,
  tableHeaderDescriptionLocalization,
  events,
}) => {
  return (
    <Grid
      columns="76px 0.5fr 1fr"
      className="public-holidays"
    >
      <Flex className="public-holidays__header public-holidays__header--delimeter">
        <Flex.Item>
          <div>{tableHeaderText}</div>
        </Flex.Item>
      </Flex>
      <Flex className="public-holidays__empty_column">
        <ClipboardBulletListRtl20Regular />
      </Flex>
      <Flex className="public-holidays__dates">
        <Flex.Item className="public-holidays__dates--header">
          <span>{tableHeaderDateLocalization}</span>
        </Flex.Item>
        {events.map((event, index) => (
          <Flex.Item
            key={event.date + index}
            className="public-holidays__dates--content"
          >
            <span>{event.date}</span>
          </Flex.Item>
        ))}
      </Flex>
      <Flex className="public-holidays__description">
        <Flex.Item className="public-holidays__description--header">
          <span>{tableHeaderDescriptionLocalization}</span>
        </Flex.Item>
        {events.map((event, index) => (
          <Flex.Item
            key={event.bankHolidayName + index}
            className="public-holidays__description--content"
          >
            <span>{event.bankHolidayName}</span>
          </Flex.Item>
        ))}
      </Flex>
    </Grid>
  );
};

export { PublicHolidaysComponent };
