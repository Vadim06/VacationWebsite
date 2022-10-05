import * as React from 'react';
import { SvgWrapperProps } from '../../../interfaces/components.props.interface';

const SvgWrapper = ({
  children,
  height,
  width,
  className,
}: SvgWrapperProps) => {
  return (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      viewBox="0 0 42 42"
      className={className}
    >
      {children || null}
    </svg>
  );
};

export { SvgWrapper };
