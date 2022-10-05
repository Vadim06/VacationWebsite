import * as React from 'react';
import './switchComponent.scss';
import { ISwitchComponentProps } from '../../interfaces/request.interface';

export const SwitchComponent: React.VFC<
  ISwitchComponentProps
> = ({ id, text }) => {
  return (
    <>
      <label className="switchComponent">
        <input type="checkbox" id={id} />
        <span className="switchSlider"></span>
      </label>
      <label htmlFor={id} className="switchComoponentLabel">
        <p>{text}</p>
      </label>
    </>
  );
};
