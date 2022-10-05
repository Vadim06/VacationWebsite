import * as React from 'react';
import { SvgCircleProps } from '../../../interfaces/components.props.interface';

const SvgCircle = ({
  className,
  cx,
  cy,
  r,
  fill,
  stroke,
  strokeLinecap,
  strokeWidth,
  strokeDasharray,
  strokeDashoffset,
}: SvgCircleProps) => {
  return (
    <circle
      className={className}
      cx={cx}
      cy={cy}
      r={r}
      fill={fill}
      stroke={stroke || ''}
      strokeLinecap={strokeLinecap || 'square'}
      strokeWidth={strokeWidth}
      strokeDasharray={
        strokeDasharray?.length
          ? strokeDasharray.join(' ')
          : ''
      }
      strokeDashoffset={strokeDashoffset}
    ></circle>
  );
};

export { SvgCircle };
