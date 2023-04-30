import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ROUTE_URL } from '../../utils/constants/app';
import { Home, CurrentNews } from '../pages';
import { ROUTES } from './constants';
import { useEffect } from 'react';

const id = document.location.hash.replace('#', '');

export const MainRoutes = () => {
  useEffect(() => {
    if (id) {
      localStorage.setItem('newsId', id);
    }
  }, []);

  return (
    <BrowserRouter basename={ROUTE_URL === '' ? '/' : ROUTE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`${ROUTES.currentNews.path}/:id`} element={<CurrentNews />} />
      </Routes>
    </BrowserRouter>
  );
};
