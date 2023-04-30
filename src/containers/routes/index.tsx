import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { ROUTE_URL } from '../../utils/constants/app';
import { Home, CurrentNews } from '../pages';
import { ROUTES } from './constants';
import { useEffect } from 'react';

export const MainRoutes = () => {
  useEffect(() => {
    const newRefId = document.location.hash.replace('#', '');

    if (newRefId) {
      window.history.replaceState({}, document.title, window.location.pathname); // remove hash from URL
      window.location.href = `${ROUTES.currentNews.path}/${newRefId}`; // redirect to news page
    }
  }, []);

  return (
    <BrowserRouter basename={ROUTE_URL === '' ? '/' : ROUTE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`${ROUTES.currentNews.path}/:id`} element={<CurrentNews />} />
        <Route path={`${ROUTES.currentNews.path}/:id`} element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
