import * as React from 'react';
import './menu.scss';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Settings20Regular,
  CalendarLtr20Regular,
  Home20Regular,
  ChatHelp20Regular,
} from '@fluentui/react-icons';
import { useLocation } from 'react-router-dom';

interface MenuItems {
  text: string;
  itemId: React.RefObject<HTMLLabelElement>;
  path: string;
}

let icons = [
  <Home20Regular
    className="menuIcon"
    primaryFill={'#0078D4'}
  />,
  <CalendarLtr20Regular
    className="menuIcon"
    primaryFill={'#0078D4'}
  />,
  <Settings20Regular
    className="menuIcon"
    primaryFill={'#0078D4'}
  />,
];
export const Menu: React.FunctionComponent = () => {
  let location = useLocation();
  const container = useRef<HTMLDivElement>(null);
  const item1 = useRef<HTMLLabelElement>(null);
  const item2 = useRef<HTMLLabelElement>(null);
  const item3 = useRef<HTMLLabelElement>(null);
  const item4 = useRef<HTMLAnchorElement>(null);
  const item5 = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (location.pathname === '/request') {
      item2.current?.classList.add('active');
      container.current?.classList.add('activeBar2');
    } else if (location.pathname === '/settings') {
      item3.current?.classList.add('active');
      container.current?.classList.add('activeBar3');
    } else if (location.pathname === '/') {
      item1.current?.classList.add('active');
      container.current?.classList.remove('activeBar2');
      container.current?.classList.remove('activeBar3');
    } else if (location.pathname === '/help') {
      item4.current?.classList.add('active');
      container.current?.classList.remove('activeBar2');
      container.current?.classList.remove('activeBar3');
    } else if (location.pathname === '/privacyPolicy') {
      item5.current?.classList.add('active');
      container.current?.classList.remove('activeBar2');
      container.current?.classList.remove('activeBar3');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const menuItems: MenuItems[] = [
    {
      text: 'Overview',
      itemId: item1,
      path: '*',
    },
    {
      text: 'Requests',
      itemId: item2,
      path: '/request',
    },
    {
      text: 'Settings',
      itemId: item3,
      path: '/settings',
    },
  ];
  const clickHandler = (
    id:
      | React.RefObject<HTMLLabelElement>
      | React.RefObject<HTMLAnchorElement>,
  ) => {
    if (id === item4 || id === item5) {
      clearingFunc(false);
    } else {
      clearingFunc(true);
    }
    id.current?.classList.add('active');
    if (id === item2) {
      container.current?.classList.add('activeBar2');
    }
    if (id === item3) {
      container.current?.classList.add('activeBar3');
    }
  };
  const clearingFunc = (fullClean: boolean) => {
    item1.current?.classList.remove('active');
    item2.current?.classList.remove('active');
    item3.current?.classList.remove('active');
    item4.current?.classList.remove('active');
    item5.current?.classList.remove('active');
    if (fullClean) {
      container.current?.classList.remove('activeBar3');
      container.current?.classList.remove('activeBar2');
    }
  };

  return (
    <div className="navContainer" ref={container}>
      <div className="menuTop">
        {menuItems.map((item, index) => (
          <Link key={index} className="link" to={item.path}>
            <label
              className="itemContainer"
              ref={item.itemId}
              onClick={(e) => clickHandler(item.itemId)}
            >
              <input type="radio" name="navbarItem" />
              <p>
                {icons[index]}
                {item.text}
              </p>
            </label>
          </Link>
        ))}
      </div>
      <footer className="menuFooter">
        <Link
          to={'/help'}
          className="itemContainer link"
          ref={item4}
          onClick={(e) => clickHandler(item4)}
        >
          <p>
            <ChatHelp20Regular
              className="menuIcon menuHelpIcon"
              primaryFill={'#0078D4'}
            />
            Help
          </p>
        </Link>
        <Link
          to={'/privacyPolicy'}
          className="itemContainer link"
          ref={item5}
          onClick={(e) => clickHandler(item5)}
        >
          <p>Privacy Policy</p>
        </Link>
      </footer>
    </div>
  );
};
