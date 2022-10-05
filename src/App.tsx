import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Navigate, Routes } from 'react-router';
import {
  Provider,
  teamsTheme,
  Flex,
} from '@fluentui/react-northstar';
import { DEFAULT_ANY_ROUTE, ROUTES } from './router/routes';
import './App.scss';
import { Menu } from './components/menu/menu';

import { HeaderComponent } from './components/header/header.component';
import { DashboardItemComponent } from './components/dashboard-item/dashboard-item.component';
import {
  headerMock,
  headerNewRequestBtnMock,
  headerNotificationBadge,
} from './mock-data/header.mock-data';

export const App: React.FC = () => {
  return (
    <Provider theme={teamsTheme}>
      <BrowserRouter>
        {/* STATIC ELEMENTS - SITE HEADER + SIDE MENU */}
        <HeaderComponent
          headerText={headerMock}
          headerNewRequestBtnLabel={headerNewRequestBtnMock}
          headerBadge={headerNotificationBadge}
        />

        <Flex gap="gap.small" padding="padding.medium">
          <Flex.Item>
            <DashboardItemComponent className="nav-bar">
              <Menu />
            </DashboardItemComponent>
          </Flex.Item>

          {/* ROUTES */}
          <Routes>
            {ROUTES.map((route, index) => (
              <Route
                key={route.text + '-path-' + index}
                path={route.path}
                element={route.element}
              />
            ))}
            <Route
              path={DEFAULT_ANY_ROUTE.path}
              element={
                <Navigate
                  replace
                  to={DEFAULT_ANY_ROUTE.redirectTo}
                />
              }
            />
          </Routes>
        </Flex>
      </BrowserRouter>
    </Provider>
  );
};
