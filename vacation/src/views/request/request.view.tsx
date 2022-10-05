import * as React from 'react';
import './request.scss';
import {
  Button,
  TextArea,
} from '@fluentui/react-northstar';
import {
  Clock20Regular,
  Edit20Regular,
  Lightbulb20Regular,
  LineHorizontal320Regular,
  Location20Regular,
  Person20Regular,
} from '@fluentui/react-icons';
import {
  reasons,
  timezones,
  approvers,
} from '../../mock-data/request.mock-data';
import { RequestDurationComponent } from './timeComponent/requestDurationComponent';
import { SwitchComponent } from '../../components/switchComponent/switchComponent';
import OOFLogo from '../../assets/OOFLogo';
import TeamsLogo from '../../assets/teamsLogo';

let reasonsArray: string[] = reasons;
let timezonesArray: string[] = timezones;
let approversArray: string[] = approvers;
const selectedValue = 'default value';
const RequestView = () => {
  const reset = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="requestContainer">
        <div className="topRequestArea">
          <h1>Make a request</h1>
          <p className="requestText">
            Use this page to submit a request to increase
            your allowances or request for compensatory
            days. Once your request is approved you may
            utilize the allowances by submitting vacation
            request(s)
          </p>
          <div className="requestElementContainer">
            <Edit20Regular className="requestIcon" />
            <TextArea
              id="requestElement"
              placeholder="Add Title"
            />
          </div>
          <div className="RequestDurationComponentContainer requestElementContainer">
            <Clock20Regular className="requestIcon requestIconClock" />
            <RequestDurationComponent />
          </div>
          <div className="selectReasonContainer requestElementContainer">
            <Lightbulb20Regular className="requestIcon" />
            <select
              className="requestSelect"
              id="requestElement"
              defaultValue={selectedValue}
            >
              <option value={selectedValue} disabled>
                Request reason
              </option>
              {reasonsArray.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>
          <div className="selectTimezoneContainer requestElementContainer">
            <Location20Regular className="requestIcon" />
            <select
              className="requestSelect"
              id="requestElement"
              defaultValue={selectedValue}
            >
              <option value={selectedValue} disabled>
                Select time zone
              </option>
              {timezonesArray.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>
          <div className="selectApproverContainer requestElementContainer">
            <Person20Regular className="requestIcon" />
            <select
              className="requestSelect"
              id="requestElement"
              defaultValue={selectedValue}
            >
              <option value={selectedValue} disabled>
                Select approver
              </option>
              {approversArray.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>
          <div className="requestElementContainer requestDescriptionElementContainer">
            <LineHorizontal320Regular className="requestIcon requestIconLines" />
            <TextArea
              id="requestElement"
              className="requestDescription"
              placeholder="Add Title"
            />
          </div>
          <label htmlFor="switch3" className="createOOF">
            <OOFLogo />
            <p className="createContent">
              Create event OOF to my calendar for my team
            </p>
            <SwitchComponent id={'switch3'} text={''} />
          </label>
          <label htmlFor="switch4" className="createPost">
            <TeamsLogo />
            <p className="createContent">
              Create post to my team channel
            </p>
            <SwitchComponent id={'switch4'} text={''} />
          </label>
        </div>
        <div className="bottomRequestArea">
          <Button id="makeRequestBtn">Make request</Button>
          <Button id="resetRequestBtn" onClick={reset}>
            Reset
          </Button>
        </div>
      </div>
    </>
  );
};

export { RequestView };
