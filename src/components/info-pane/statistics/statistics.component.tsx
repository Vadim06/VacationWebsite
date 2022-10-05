import * as React from 'react';
import { DonutComponent } from '../../../components/charts/donut/donut.component';
import { APP_COLORS } from '../../../constants/constants';
import './statistics.scss';

const StatisticsComponent: React.VFC = () => (
  <div className="info-pane__statistics">
    <DonutComponent daysLeft={10} daysAll={30} />
    <DonutComponent
      circleColor={APP_COLORS.red}
      daysLeft={5}
      daysAll={10}
    />
  </div>
);

export { StatisticsComponent };
