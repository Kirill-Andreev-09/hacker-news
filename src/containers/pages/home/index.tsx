import { useEffect } from 'react';
import { Layout } from '../../layout';
import { NewsList, UpdateButton } from './components';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/containers/routes/constants';

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const newsId = localStorage.getItem('newsId');
    if (newsId) {
      navigate(`${ROUTES.currentNews.path}/${newsId}`);
    }
  }, []);

  return (
    <Layout headerRightIcon={<UpdateButton />}>
      <NewsList />
    </Layout>
  );
};
