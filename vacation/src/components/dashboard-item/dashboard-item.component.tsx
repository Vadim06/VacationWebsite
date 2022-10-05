import * as React from 'react';
import { DashboardItemComponentProps } from '../../interfaces/components.props.interface';
import './dashboard-item.scss';

const DashboardItemComponent: React.FC<
  DashboardItemComponentProps
> = ({ children, className }) => {
  return (
    <div
      className={`dashboard-item ${
        className ? className : ''
      }`}
    >
      {children || null}
    </div>
  );
};

export { DashboardItemComponent };
