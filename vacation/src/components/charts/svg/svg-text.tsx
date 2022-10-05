import * as React from 'react';
import { SvgTextProps } from '../../../interfaces/components.props.interface';

const SvgText = ({
  className,
  x,
  y,
  text,
}: SvgTextProps) => {
  return (
    <text x={x} y={y} className={className}>
      {text}
    </text>
  );
};

export { SvgText };
