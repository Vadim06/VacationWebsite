import * as React from 'react';
import { useRef } from 'react';
import './settingsDropdown.css';

interface Props {}

export const SettingsDropdown: React.FunctionComponent<
  Props
> = ({}: Props) => {
  const dropdown = useRef<HTMLInputElement>(null);
  const toggleDrop = () => {
    console.log('toggleDrop');
    if (dropdown.current) {
      dropdown.current.classList.toggle('active');
    }
  };
  return (
    <>
      <label
        className="itemContainer"
        onFocus={toggleDrop}
        onBlur={toggleDrop}
      >
        <input type="radio" name="navbarItem" />
        <p>Settings</p>
        <span className="arrow"></span>
      </label>
      <div className="dropdown" ref={dropdown}>
        <p>General</p>
        <br />
        <p>Time zone</p>
        <br />
        <p>Company branch</p>
        <br />
        <p>Manager</p>
        <br />
      </div>
    </>
  );
};
