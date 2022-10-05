import * as React from 'react';
import './requestDurationComponent.scss';
import { times } from '../../../mock-data/request.mock-data';
import { SwitchComponent } from '../../../components/switchComponent/switchComponent';
import { DatePicker } from '@fluentui/react';

let timesArray: string[] = times;
const RequestDurationComponent = () => {
  const formatDate = (date?: Date): string => {
    if (!date) return '';
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };
  return (
    <>
      <div className="RequestDurationContainer">
        <div className="requestDate1 requestDurationElement">
          <DatePicker
            className="requestDatePicker"
            formatDate={formatDate}
            placeholder="Select date"
          />
        </div>
        <div className="requestTime1 requestDurationElement">
          <select
            className="requestSelect"
            id="requestElement"
          >
            {timesArray.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </div>
        <div className="requestSwitch1 requestDurationElement">
          <SwitchComponent
            id={'switch1'}
            text={'All day'}
          />
        </div>
        <div className="requestDate2 requestDurationElement">
          <DatePicker
            className="requestDatePicker"
            formatDate={formatDate}
            placeholder="Select date"
          />
        </div>
        <div className="requestTime2 requestDurationElement">
          <select
            className="requestSelect"
            id="requestElement"
          >
            {timesArray.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </div>
        <div className="requestSwitch2 requestDurationElement">
          <SwitchComponent
            id={'switch2'}
            text={'All day'}
          />
        </div>
      </div>
    </>
  );
};

export { RequestDurationComponent };
