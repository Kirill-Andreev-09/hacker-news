import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ROUTE_URL } from '../../utils/constants/app';
import { Home, CurrentNews } from '../pages';
import { ROUTES } from './constants';

export const MainRoutes = () => {
  return (
    <BrowserRouter basename={ROUTE_URL === '' ? '/' : ROUTE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`${ROUTES.currentNews.path}/:id`} element={<CurrentNews />} />
      </Routes>
    </BrowserRouter>
  );
};
