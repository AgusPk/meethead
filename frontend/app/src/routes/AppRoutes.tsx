import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Landing from 'pages/Landing/Landing';
import { Routes as RouteMap } from './Routes';
import NotFound from 'pages/404';

const AppRoutes: FC = () => (
  <Routes>
    <Route path={RouteMap.ROOT} element={<Landing />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

/**
 * Another way to implement 404 with redirection is:
 * import { Route, Routes, Navigate } from 'react-router-dom';
 * <Route path="/404" element={<NotFound />} />
 * <Route path="*" element={<Navigate replace to="/404" />} />
 */

export default AppRoutes;
