import * as React from 'react';
import MSVIcon from '../../assets/msv_logo';
import './header.scss';
import { Button, Flex } from '@fluentui/react-northstar';
import { IHeaderProps } from '../../interfaces/components.props.interface';
import {
  AddCircle16Regular,
  Alert20Regular,
} from '@fluentui/react-icons';

const HeaderComponent: React.VFC<IHeaderProps> = ({
  headerText,
  headerNewRequestBtnLabel,
  headerBadge,
}) => (
  <Flex id="navbar">
    <Flex className="header__left">
      <Flex.Item className="header__logo">
        <i>
          <MSVIcon />
        </i>
      </Flex.Item>
      <Flex.Item>
        <span className="header__text">{headerText}</span>
      </Flex.Item>
    </Flex>

    <Flex className="header__right">
      <Flex.Item>
        <span className="header__button-wrapper">
          <AddCircle16Regular
            className="header__button--plus"
            primaryFill={'white'}
          />
          <Button
            className="header__button"
            inverted
            content={headerNewRequestBtnLabel}
          />
        </span>
      </Flex.Item>
      <Flex.Item>
        <>
          <div className="header__notifications-wrapper">
            <Alert20Regular
              className="header__notifications-icon"
              primaryFill="white"
            />
            <span className="header__notifications-badge">
              {headerBadge}
            </span>
          </div>
        </>
      </Flex.Item>
      <Flex.Item>
        <>
          <div className="header__avatar-wrapper">
            <img
              src={require('../../assets/avatar.png')}
              alt="avatar"
              className="header__avatar"
            />
          </div>
        </>
      </Flex.Item>
    </Flex>
  </Flex>
);

export { HeaderComponent };
