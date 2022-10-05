import * as React from 'react';
import { useRef, useState } from 'react';
import './navbarItem.css';

interface Props {
  text: string;
}

export const NavbarItem: React.FunctionComponent<Props> = ({
  text,
}: Props) => {
  return (
    <>
      <label className="itemContainer">
        <input type="radio" name="navbarItem" />
        <p>{text}</p>
      </label>
    </>
  );
};
