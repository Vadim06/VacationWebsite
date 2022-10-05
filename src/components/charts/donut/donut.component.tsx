import { APP_COLORS } from '../../../constants/constants';
import {
  DonutComponentProps,
  IStatisticsComponentProps,
} from '../../../interfaces/components.props.interface';
import { SvgCircle } from '../svg/svg-circle.component';
import { SvgText } from '../svg/svg-text';
import { SvgWrapper } from '../svg/svg-wrapper.component';

const DonutComponent: React.VFC<
  IStatisticsComponentProps
> = ({
  circleColor,
  daysLeft,
  daysAll,
}: DonutComponentProps) => {
  // TODO: add animation - when you open a page, it should move from 100% to youer value
  // TOFO: should I somehow use some hook for the strokeDashoffset calculation?
  const strokeDashoffset = 100 - (100 * daysLeft) / daysAll;

  return (
    <SvgWrapper
      height={150}
      width={150}
      className={'donut'}
    >
      <>
        {/* TODO: move values to constants, figure out how to get rid of this repeated components */}
        <SvgText
          x={11}
          y={23}
          className={'text-bold text-svg-big'}
          text={daysLeft}
        />
        <SvgText
          x={23}
          y={23}
          className={'text-bold text-svg-med'}
          text={`/ ${daysAll}`}
        />
        <SvgText
          x={13}
          y={29}
          className={'text-bold text-svg-med'}
          text={' Days left'}
        />
        <SvgCircle
          className={'donut-ring'}
          cx={21}
          cy={21}
          r={16}
          fill={'transparent'}
          stroke={APP_COLORS.grey}
          strokeWidth={3}
        />
        <SvgCircle
          className={'donut-segment'}
          cx={21}
          cy={21}
          r={16}
          fill={'transparent'}
          stroke={circleColor || APP_COLORS.blue}
          strokeWidth={3}
          strokeLinecap={'round'}
          strokeDasharray={[100, 100]}
          strokeDashoffset={strokeDashoffset}
        />
      </>
    </SvgWrapper>
  );
};

export { DonutComponent };
